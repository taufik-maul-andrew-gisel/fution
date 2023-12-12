import BusinessModel from "@/models/business";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse } from "../typedef";
import errorHandler from "../errorHandler";
import { z } from "zod";
import User from "@/models/user";

const businessInputSchema = z.object({
    name: z.string().min(1),
    monthlyRevenue: z.number().min(0),
    creditScore: z.number().min(300).max(850),
    description: z.string().min(100),
    tagline: z.string().min(1)
});

export async function GET() {
    try {
        const businesses = await BusinessModel.readAll();
        return NextResponse.json<APIResponse<unknown>>({
            status: 200,
            message: "success GET /business",
            data: businesses
        });
    } catch (error) {
        return errorHandler(error);
    }
}

export async function POST(req: NextRequest) {
    try {
        const input = await req.json();

        // validate input (with zod)
        const parsed = businessInputSchema.safeParse(input);
        if (!parsed.success) {
            throw parsed.error;
        }

        // TODO: get from middleware (login info)
        const userId = "5c992b9f-356b-4b60-8106-83ecf84cb660";
        if ((await User.getById(userId))?.role !== "BUSINESS") {
            return NextResponse.json<APIResponse<never>>(
                { status: 403, error: "User's role is not BUSINESS" },
                { status: 403 }
            )
        }
        
        const { name, monthlyRevenue, creditScore, description, tagline } = parsed.data;
        const newBusiness = await BusinessModel.add({
            name, monthlyRevenue, creditScore, description, tagline, userId
        });
        return NextResponse.json<APIResponse<unknown>>({
            status: 201,
            message: "success POST /business",
            data: newBusiness
        }, {
            status: 201
        })
    } catch (error) {
        return errorHandler(error);
    }
}