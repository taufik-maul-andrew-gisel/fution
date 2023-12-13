import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../../typedef";
import errorHandler from "../../errorHandler";
import LenderModel from "@/models/lender";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const lender = await LenderModel.readById(id);
    
        if (!lender) {
            throw new Error("data not found");
        }
    
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /lender/[id]",
            data: lender
        })
    } catch (error) {
        return errorHandler(error);
    }
}