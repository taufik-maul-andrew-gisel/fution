import { LoanStatus } from "@prisma/client";
import prisma from "../../prisma/config";
import { getQuartersBetweenTwoDates, getNextQuarter } from "@/utils/quarter";
import calculateInterest from "@/utils/interest";
import { Decimal } from "@prisma/client/runtime/library";
import getRealTimeInflation from "@/utils/inflationData";

export default class RecordModel {
  static async readAll() {
    return await prisma.record.findMany({ orderBy: { updatedAt: "desc" } });
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

  static async add(input: { amount: number, due: Date, businessId: string, lenderId: string, interest: number }) {
    const { amount, due, businessId, lenderId, interest } = input;
    return await prisma.record.create({ data: {
      amount,
      due,
      loaneeId: businessId,
      loanerId: lenderId,
      interest
    } })
  }

  static async update(input: { id: string, amount: number, due: Date, interest: number }) {
    let { id, amount, due, interest } = input;

    // if input value doesn't change at all, change status to DEBT
    // otherwise, simply update the value and keep status as PENDING
    const currData = await prisma.record.findFirst({
      where: { id },
      select: { amount: true, due: true, interest: true, updatedAmount: true }
    })
    if (!currData) return;
    if ((new Decimal(amount)).equals(currData.amount) && 
    (new Decimal(interest)).equals(currData.interest)) {
      return await RecordModel.patchStatus({ id, status: "DEBT" });
    }

    
    return await prisma.record.update({
      where: { id },
      data: { 
        amount: new Decimal(amount), 
        due, 
        interest: new Decimal(interest), 
        // increment update count by 1 to allow validation for business/lender
        // so that they can't request PUT twice (or more)
        updatedAmount: currData.updatedAmount + 1
      }
    })
  }

  
  static async patchStatus(input: { id: string; status: LoanStatus }) {
    const { id, status } = input;
    return await prisma.record.update({
      where: { id },
      data: { status },
    });
  }

  static async getRecordsByLoaneeId(loaneeId: string) {
    return await prisma.record.findMany({ where: { loaneeId } })
  }

  static async getRecordsByLoanerId(loanerId: string) {
    return await prisma.record.findMany({ where: { loanerId } })
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
      
      if (year > startYear && year < endYear && term <= endQ) return true;
      if (year === startYear && term >= startQ) return true;

      // also want to get the future four terms
      for (let i = 0; i < 4; i++) {
        const { nextYear, nextQ } = getNextQuarter(endYear, endQ)
        if (year === nextYear && term === nextQ) return true;
        endYear = nextYear;
        endQ = nextQ;
      }
    }).map(infl => new Decimal(infl.interestRate))

    if (inflations.length === 4) inflations.unshift(new Decimal(0));

    return calculateInterest(initValue, interest, inflations.slice(0, -4), inflations.slice(-4));
  }
}