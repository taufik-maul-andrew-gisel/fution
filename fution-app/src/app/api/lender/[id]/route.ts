import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../../typedef";
import errorHandler from "../../errorHandler";
import LenderModel from "@/models/lender";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const business = await LenderModel.readById(id);
    
        if (!business) {
            return NextResponse.json<APIResponse<never>>({
                status: 404,
                error: "data not found"
            }, {
                status: 404
            })
        }
    
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /business/[id]",
            data: business
        })
    } catch (error) {
        return errorHandler(error);
    }
}