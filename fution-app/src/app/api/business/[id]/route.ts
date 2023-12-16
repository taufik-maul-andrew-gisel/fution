import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../../typedef";
import BusinessModel from "@/models/business";
import errorHandler from "../../errorHandler";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        if (!(await BusinessModel.readById(id))) {
            throw new Error("data not found");
        }

        const business = await BusinessModel.readById(id);

        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /business/[id]",
            data: business
        })
    } catch (error) {
        return errorHandler(error);
    }
}