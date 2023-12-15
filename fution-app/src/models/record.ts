import { LoanStatus } from "@prisma/client";
import prisma from "../../prisma/config";
import getQuartersBetweenTwoDates from "@/utils/quarter";
import calculateInterest from "@/utils/interest";
import { Decimal } from "@prisma/client/runtime/library";
import getRealTimeInflation from "@/utils/inflationData";

export default class RecordModel {
  static async readAll() {
    return await prisma.record.findMany();
  }

  static async readById(id: string) {
    return await prisma.record.findFirst({ where: { id } });
  }

  static async readAllByUser(userId: string) {
    // get all records whose loaner or loanee id is equal to id in params.
    return await prisma.record.findMany({
      where: { OR: [{ loaneeId: userId }, { loanerId: userId }] },
    });
  }

  static async add(input: { amount: number, due: Date, businessId: string, lenderId: string }) {
    const { amount, due, businessId, lenderId } = input;
    return await prisma.record.create({ data: {
      amount,
      due,
      status: "PENDING",
      loaneeId: businessId,
      loanerId: lenderId,
    } })
  }

  static async update(input: { id: string, amount: number, due: Date, interest: number }) {
    const { id, amount, due, interest } = input;
    return await prisma.record.update({
      where: { id },
      data: { amount, due, interest }
    })
  }
  
  static async patchStatus(input: { id: string; status: LoanStatus }) {
    const { id, status } = input;
    return await prisma.record.update({
      where: { id },
      data: { status },
    });
  }

  // get the amount due after interest is applied
  static async getDebtAfterInterest(id: string) {
    const record = await RecordModel.readById(id);
    if (!record) return;
    
    // need 4 params: initValue, interest, inflations, futureInflation
    const initValue = record.amount;
    const interest = record.interest;
    const period = getQuartersBetweenTwoDates(record.createdAt, new Date());
    const inflationData = await getRealTimeInflation();

    // get inflation rate for each term, plus the future prediction for the next four terms
    const inflations = inflationData.filter(infl => {
      const year = Number(infl.time.substring(0, 4));
      const term = Number(infl.time[infl.time.length - 1]);
      let startYear = period.start.year, startQ = period.start.q;
      let endYear = period.end.year, endQ = period.end.q;

      if (year > startYear && year < endYear) return true;
      if (year === startYear && term >= startQ) return true;
      if (year === endYear && term <= endQ) return true;

      // also want to get the future four terms
      for (let i = 0; i < 4; i++) {
        const { nextYear, nextQ } = getNextQuarter(endYear, endQ)
        if (year === nextYear && term === nextQ) return true;
        endYear = nextYear;
        endQ = nextQ;
      }
    }).map(infl => new Decimal(infl.interestRate))

    return calculateInterest(initValue, interest, inflations.slice(0, -4), inflations.slice(-4));
  }
}


// helper function: get next quarter
function getNextQuarter(year: number, q: number) {
  let nextYear = year, nextQ = q + 1;
  if (q + 1 > 4) {
    nextYear = nextYear + 1;
    nextQ = 1;
  }
  return { nextYear, nextQ }
}