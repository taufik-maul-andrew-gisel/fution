import BusinessModel from "@/models/business"
import LenderModel from "@/models/lender"
import RecordModel from "@/models/record"
import { LoanStatus } from "@prisma/client"
import { Decimal } from "@prisma/client/runtime/library"

export type APIResponse<T> = {
    status: number,
    error?: string,
    message?: string,
    data?: T
}

// for client
export type LenderType = {
    id: string;
    name: string;
    minBudget: Decimal;
    maxBudget: Decimal;
    minInterest: Decimal;
    maxInterest: Decimal;
    userId: string;
}

export type BusinessType = {
    status: string;
    credibility: number;
    id: string;
    name: string;
    monthlyRevenue: Decimal;
    creditScore: number;
    description: string;
    credential: number;
    tagline: string;
    userId: string;
}

export type RecordType = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    updatedAmount: number;
    amount: Decimal;
    interest: Decimal;
    status: LoanStatus;
    due: Date;
    loaneeId: string;
    loanerId: string;
}
