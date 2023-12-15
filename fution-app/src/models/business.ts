import prisma from "../../prisma/config";

export default class BusinessModel {
    static async readAll() {
        return await prisma.business.findMany();
    }

    static async readById(id: string) {
        return await prisma.business.findFirst({ where: { id } });
    }

    static async add(input: {
        name: string;
        monthlyRevenue: number;
        creditScore: number;
        description: string;
        tagline: string;
        userId: string;
    }) {
        try {
            return await prisma.business.create({ data: input });
        } catch (error) {
            throw error;
        }
    }
}