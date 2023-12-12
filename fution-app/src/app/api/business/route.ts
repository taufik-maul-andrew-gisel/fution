import Business from "@/models/business";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../typedef";

export async function GET() {
    const businesses = await Business.get();
    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
        message: "success GET /business",
        data: businesses
    });
}