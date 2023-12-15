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

    static getCredibility(creditScore: number, credential: number) {
        // get credit score percentage
        // credit score runs from 300 to 850
        const creditScorePercentage = ((creditScore - 300) / 550) * 100;
        const credentialPercentage = credential;
        const credibilityPercentage = (creditScorePercentage + credentialPercentage) / 2;
        console.log(credibilityPercentage);
        
        if (credibilityPercentage >= 80) {
            return { status:"green", credibility: Math.floor(credibilityPercentage) };
        } else if (credibilityPercentage >= 65) {
            return { status:"yellow", credibility: Math.floor(credibilityPercentage) };
        } else {
            return { status:"red", credibility: Math.floor(credibilityPercentage) };
        }
    }
}