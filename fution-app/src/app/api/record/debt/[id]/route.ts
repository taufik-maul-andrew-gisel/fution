import errorHandler from "@/app/api/errorHandler";
import { APIResponse } from "@/app/api/typedef";
import RecordModel from "@/models/record";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    _req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const { id } = params;
        const record = await RecordModel.getDebtAfterInterest(id);
    
        if (!record) {
            throw new Error("data not found");
        }

        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /record/refresh/[id]",
            data: record,
        });
    } catch (error) {
        return errorHandler(error);
    }
}