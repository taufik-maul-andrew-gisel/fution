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
            where: { OR: [
                { loaneeId: userId }, 
                { loanerId: userId }
            ] }
        })
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
}