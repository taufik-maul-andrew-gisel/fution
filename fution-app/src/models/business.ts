import prisma from "../../prisma/config";

export default class Business {
    static async get() {
        return await prisma.business.findMany();
    }
}