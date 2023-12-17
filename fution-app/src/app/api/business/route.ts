import BusinessModel from "@/models/business";
import { NextRequest, NextResponse } from "next/server";
import { APIResponse, BusinessType } from "../typedef";
import errorHandler from "../errorHandler";
import { z } from "zod";
import User from "@/models/user";

const businessInputSchema = z.object({
  name: z.string().min(1),
  monthlyRevenue: z.number().min(0),
  creditScore: z.number().min(300).max(850),
  description: z.string().min(100),
  tagline: z.string().min(1),
  email: z.string().email()
});

export async function GET() {
  try {
    const businesses = await BusinessModel.readAll();
    return NextResponse.json<APIResponse<unknown>>({
      status: 200,
      message: "success GET /business",
      data: businesses,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    // TODO: get from middleware (login info)
    const userId = req.headers.get("x-user-id");

    if (!userId) {
      throw new Error("Unauthorized");
    }

    // validate input (with zod)
    const parsed = businessInputSchema.safeParse(input);
    if (!parsed.success) {
      throw parsed.error;
    }

    if ((await User.getById(userId))?.role !== "BUSINESS") {
      throw new Error("user's role is not BUSINESS");
    }

    const { name, monthlyRevenue, creditScore, description, tagline, email } =
      parsed.data;
    const newBusiness = await BusinessModel.add({
      name,
      monthlyRevenue,
      creditScore,
      description,
      tagline,
      userId,
      email
    });
    return NextResponse.json<APIResponse<unknown>>(
      {
        status: 201,
        message: "success POST /business",
        data: newBusiness,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return errorHandler(error);
  }
}
