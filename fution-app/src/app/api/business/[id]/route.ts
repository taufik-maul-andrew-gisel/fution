import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../../typedef";
import BusinessModel from "@/models/business";
import errorHandler from "../../errorHandler";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const business = await BusinessModel.readById(id);
    
        if (!business) {
            throw new Error("data not found");
        }

        const { creditScore, credential } = business;
        const { status, credibility } = BusinessModel.getCredibility(creditScore, credential);
    
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /business/[id]",
            data: { ...business, status, credibility }
        })
    } catch (error) {
        return errorHandler(error);
    }
}