import { NextRequest, NextResponse } from "next/server";
import errorHandler from "../../errorHandler";
import RecordModel from "@/models/record";
import { APIResponse } from "../../typedef";
import { z } from "zod";

const recordPutSchema = z.object({
    amount: z.number().min(0),
    interest: z.number().min(0).max(100),
    due: z.date()
}).refine(schema => schema.due > new Date(), "Due date cannot be in the past");

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const record = await RecordModel.readById(id);

    if (!record) {
      throw new Error("data not found");
    }

    return NextResponse.json<APIResponse<unknown>>({
      status: 200,
      message: "success GET /record/[id]",
      data: record,
    });
  } catch (error) {
    return errorHandler(error);
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        // find product by id
        const { id } = params;
        const record = await RecordModel.readById(id);
        
        if (!record) {
            throw new Error("data not found");
        }

        // get user input to PUT
        const input = await req.json();
        input.due = new Date(input.due);
        const parsed = recordPutSchema.safeParse(input);
        if (!parsed.success) {
            throw parsed.error;
        }
        
        // update...
        const { amount, due, interest } = parsed.data;
        const updatedRecord = await RecordModel.update({ id, amount, due, interest });
        return NextResponse.json<APIResponse<unknown>>(
            { status: 200, message: "success PUT /record/[id]", data: updatedRecord }
        )
    } catch (error) {
        return errorHandler(error);
    }
}
      
      
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const record = await RecordModel.readById(id);

    if (!record) {
      throw new Error("data not found");
    }
    const result = await req.json();
    const updatedData = await RecordModel.patchStatus({
      id,
      status: result.status,
    });
    return NextResponse.json<APIResponse<unknown>>({
      status: 200,
      message: "success PATCH /record/[id]",
      data: updatedData,
    });
  } catch (error) {
    return errorHandler(error);
  }
}
