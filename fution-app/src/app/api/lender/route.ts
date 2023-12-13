import LenderModel from "@/models/lender";
import { APIResponse } from "../typedef";
import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../errorHandler";
import { z } from "zod";
import User from "@/models/user";

const lenderInputSchema = z.object({
    name: z.string().min(1),
    minBudget: z.number().min(0),
    maxBudget: z.number(),
    minInterest: z.number().min(0),
    maxInterest: z.number()
}).refine(schema => {
    return (
        (schema.maxBudget > schema.minBudget) && 
        (schema.maxInterest > schema.minInterest)
    )
}, "Max value must be greater than min value")

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

export async function POST(req: NextRequest) {
    try {
        const input = await req.json();

        // validate input (with zod)
        const parsed = lenderInputSchema.safeParse(input);
        if (!parsed.success) {
            throw parsed.error;
        }

        // TODO: get from middleware (login info)
        const userId = "5c992b9f-356b-4b60-8106-83ecf84cb660";
        if ((await User.getById(userId))?.role !== "LENDER") {
            throw new Error("user's role is not LENDER");
        }
        
        // const { name, monthlyRevenue, creditScore, description, tagline } = parsed.data;
        // const newBusiness = await BusinessModel.add({
        //     name, monthlyRevenue, creditScore, description, tagline, userId
        // });
        return NextResponse.json<APIResponse<unknown>>({
            status: 201,
            message: "success POST /lender",
            // data: newBusiness
        }, {
            status: 201
        })
    } catch (error) {
        return errorHandler(error);
    }
}