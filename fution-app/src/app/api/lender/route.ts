import LenderModel from "@/models/lender";
import { APIResponse } from "../typedef";
import { NextResponse } from "next/server";
import errorHandler from "../errorHandler";

export async function GET() {
    try {
        const lenders = await LenderModel.readAll();
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /lender",
            data: lenders
        })
    } catch (error) {
        return errorHandler(error);
    }
}