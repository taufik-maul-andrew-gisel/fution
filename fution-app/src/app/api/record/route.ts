import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../errorHandler";
import { APIResponse } from "../typedef";
import RecordModel from "@/models/record";
import { z } from "zod";

const recordInputSchema = z
  .object({
    amount: z.number().min(0),
    due: z.date(),
    businessId: z.string().uuid(),
    lenderId: z.string().uuid(),
  })
  .refine(
    (schema) => schema.due > new Date(),
    "Due date cannot be in the past"
  );

export async function GET() {
  try {
    const records = await RecordModel.readAll();
    return NextResponse.json<APIResponse<unknown>>({
      status: 200,
      message: "success GET /record",
      data: records,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function POST(req: NextRequest) {
  try {
    // step 1: get input
    const input = await req.json();
    input.due = new Date(input.due);

    // step 2: validate input
    const parsed = recordInputSchema.safeParse(input);
    if (!parsed.success) {
      throw parsed.error;
    }

    // step 3: POST to db, return response
    const { amount, due, businessId, lenderId } = parsed.data;
    const newRecord = await RecordModel.add({ amount, due, businessId, lenderId });
    return NextResponse.json<APIResponse<unknown>>(
        { status: 201, message: "success POST /record", data: newRecord }, 
        { status: 201 }
    )
  } catch (error) {
    return errorHandler(error);
  }
}
