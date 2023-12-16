import prisma from "../../prisma/config";
import RecordModel from "./record";

export default class BusinessModel {
    static async updateBasedOnExistingRecords(id: string) {
        const records = await RecordModel.getRecordsByLoaneeId(id);

        // update credential
        let overdues = 0, rejected = 0, paid = 0;
        records.forEach(record => {
            if (record.status === "OVERDUE") {
                overdues++;
            } 
            else if (record.status === "PAID") {
                paid++;
            }
            else if (record.due < new Date()) {
                if (record.status === "PENDING") {
                    RecordModel.patchStatus({ id: record.id, status: "REJECTED" });
                    rejected++;
                }
                else if (record.status === "DEBT") {
                    RecordModel.patchStatus({ id: record.id, status: "OVERDUE" });
                    overdues++;
                }
            }
            
            // too many rejected requests will also affect credentials
            if (record.status === "REJECTED") {
                rejected++;
            }
        })

        let numr = (paid + rejected) * 100;
        let denumr = (overdues + 2 * rejected);
        
        return await prisma.business.update({
            where: { id }, 
            data: { credential: denumr === 0 ? 100 : (numr / denumr) }
        })
    }

    static getCredibility(creditScore: number, credential: number) {
        // get credit score percentage
        // credit score runs from 300 to 850
        const creditScorePercentage = ((creditScore - 300) / 550) * 100;
        const credentialPercentage = credential;

        // get credibility (weighted from both credit score and credential)
        const credibilityPercentage = (creditScorePercentage + credentialPercentage) / 2;
        if (credibilityPercentage >= 80) {
            return { status:"green", credibility: Math.floor(credibilityPercentage) };
        } else if (credibilityPercentage >= 65) {
            return { status:"yellow", credibility: Math.floor(credibilityPercentage) };
        } else {
            return { status:"red", credibility: Math.floor(credibilityPercentage) };
        }
    }

    static async readAll() {
        let data = await prisma.business.findMany();

        let returnData = await Promise.all(data.map(async (d) => {
            const updated = await BusinessModel.updateBasedOnExistingRecords(d.id);
            const { status, credibility } = BusinessModel.getCredibility(
                d.creditScore,
                updated.credential
            );
            return { ...d, status, credibility }
        }));
        return returnData;
    }

    static async readById(id: string) {
        const business = await prisma.business.findFirst({ where: { id } });
        if (!business) return;

        // update credibility
        await BusinessModel.updateBasedOnExistingRecords(id);

        // get credit score percentage
        // credit score runs from 300 to 850
        const { creditScore, credential } = business;
        const { status, credibility } = BusinessModel.getCredibility(creditScore, credential);
        return { ...business, status, credibility }
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