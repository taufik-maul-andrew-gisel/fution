import User from "@/models/user";
import { NextResponse } from "next/server";
import { APIResponse } from "../typedef";
import { z } from "zod";
import { UserRole } from "@prisma/client";
import errorHandler from "../errorHandler";

const userInputSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(5),
  role: z.string(),
});

export const POST = async (request: Request) => {
  try {
    const data = await request.json();

    const parsedData = userInputSchema.safeParse(data);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    
    const result = await User.createUser({
      username: parsedData.data.username,
      password: parsedData.data.password,
      role: parsedData.data.role as UserRole,
    });

    return NextResponse.json<APIResponse<unknown>>(
      {
        status: 200,
        message: "success POST /register",
        data: result,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return errorHandler(error);
  }
};
