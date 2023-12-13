import { LoanStatus } from "@prisma/client";
import prisma from "../../prisma/config";

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
    // console.log(input, "ini di model");
    const { id, status } = input;
    return await prisma.record.update({
      where: { id },
      data: { status },
    });
  }
}
