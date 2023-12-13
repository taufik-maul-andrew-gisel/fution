import prisma from "../../prisma/config";

/*
id: string;
name: string;
budget: Decimal;
expectedInterest: string;
userId: string;
*/

export default class LenderModel {
    static async readAll() {
        return await prisma.lender.findMany();
    }

    static async readById(id: string) {
        return await prisma.lender.findFirst({ where: { id } });
    }

    static async add(input: {
        name: string;
        minBudget: number;
        maxBudget: number;
        minInterest: number;
        maxInterest: number;
        userId: string;
    }) {
        return await prisma.lender.create({ data: input });
    }
}