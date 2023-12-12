import { Business } from "@prisma/client";
import prisma from "../../prisma/config";
/*
type Business = {
    id: string;
    name: string;
    monthlyRevenue: runtime.Decimal;
    creditScore: number;
    description: string;
    credential: number;
    tagline: string;
    userId: string;
}
*/
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
        return await prisma.business.create({ data: input });
    }
}