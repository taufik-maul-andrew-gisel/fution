import BusinessModel from "@/models/business";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../typedef";

export async function GET() {
    const businesses = await BusinessModel.readAll();
    return NextResponse.json<APIResponse<unknown>>({
        status: 200,
        message: "success GET /business",
        data: businesses
    });
}

export async function POST(req: NextRequest) {
    const input = await req.json();
    const newBusiness = await BusinessModel.add(input);
    return NextResponse.json<APIResponse<unknown>>({
        status: 201,
        message: "success POST /business",
        data: newBusiness
    }, {
        status: 201
    })
}