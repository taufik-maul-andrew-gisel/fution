import { PrismaClientKnownRequestError, PrismaClientValidationError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import { APIResponse } from "./typedef";
import { ZodError } from "zod";

export default function errorHandler(error: any) {
    let status = 500, errorMsg = "internal server error";
    console.error(error);

    if (error instanceof ZodError) {
        status = 400;
        errorMsg = error.issues.map((e) => e.path + " - " + e.message).join("\n");
    }
    
    if (error instanceof PrismaClientValidationError || error instanceof PrismaClientKnownRequestError) {
        status = 400;
        errorMsg = error.message;
    }

    if (error instanceof Error) {
        if (error.message.includes("user's role is not")) {
            return NextResponse.json<APIResponse<never>>(
                { status: 403, error: error.message },
                { status: 403 }
            )
        }
        if (error.message === "data not found") {
            return NextResponse.json<APIResponse<never>>(
                { status: 404, error: error.message },
                { status: 404 }
            )
        }
    }

    return NextResponse.json<APIResponse<never>>(
        { status, error: errorMsg },
        { status }
    );
}