import LenderModel from "@/models/lender";
import { APIResponse } from "../typedef";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const lenders = await LenderModel.readAll();
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /lender",
            data: lenders
        })
    } catch (error) {
        console.error(error);
        return NextResponse.json<APIResponse<never>>({
            status: 500,
            error: "internal server error"
        }, { 
            status: 500
        });
    }
}