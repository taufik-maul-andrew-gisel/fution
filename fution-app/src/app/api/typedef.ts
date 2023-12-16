import BusinessModel from "@/models/business"
import LenderModel from "@/models/lender"
import RecordModel from "@/models/record"

export type APIResponse<T> = {
    status: number,
    error?: string,
    message?: string,
    data?: T
}

export type LenderType = LenderModel

export type BusinessType = BusinessModel & { status: string; credibility: number; }

export type RecordType = RecordModel