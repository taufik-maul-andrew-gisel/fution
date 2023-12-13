import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../../errorHandler";
import RecordModel from "@/models/record";
import { APIResponse } from "../../typedef";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const record = await RecordModel.readById(id);
        
        if (!record) {
            throw new Error("data not found");
        }
        
        return NextResponse.json<APIResponse<unknown>>(
            { status: 200, message: "success GET /record/[id]", data: record }
        );
    } catch (error) {
        return errorHandler(error);
    }
}

export async function PUT(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        // ...
    } catch (error) {
        return errorHandler(error);
    }
}

export async function PATCH(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        // ...
    } catch (error) {
        return errorHandler(error);
    }
}