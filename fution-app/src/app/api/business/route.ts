import BusinessModel from "@/models/business";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../typedef";
import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";

export async function GET() {
    try {
        const businesses = await BusinessModel.readAll();
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /business",
            data: businesses
        });
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

export async function POST(req: NextRequest) {
    try {
        const input = await req.json();

        // TODO: get from middleware (login info)
        const userId = "f84b2d57-3b51-4a3f-99f2-7c0378a44b7f";
        input.userId = userId;

        const newBusiness = await BusinessModel.add(input);
        return NextResponse.json<APIResponse<unknown>>({
            status: 201,
            message: "success POST /business",
            data: newBusiness
        }, {
            status: 201
        })
    } catch (error) {
        let status = 500, errorMsg = "internal server error";
        console.error(error);
        
        if (error instanceof PrismaClientValidationError || error instanceof PrismaClientKnownRequestError) {
            status = 400;
            errorMsg = error.message;
        }

        return NextResponse.json<APIResponse<never>>(
            { status, error: errorMsg },
            { status }
        );
    }
}