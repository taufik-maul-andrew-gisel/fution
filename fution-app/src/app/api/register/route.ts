import User from "@/models/user";
import { NextResponse } from "next/server";
import { APIResponse } from "../typedef";
import { z } from "zod";
import { UserRole } from "@prisma/client";

const userInputSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(5),
  role: z.string(),
});

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    // console.log(data, "inii");

    const parsedData = userInputSchema.safeParse(data);
    if (!parsedData.success) {
      // Kita akan throw error yang merupakan ZodError
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
    console.log(error);

    return NextResponse.json<APIResponse<never>>(
      {
        status: 500,
        message: "internal server error",
      },
      {
        status: 500,
      }
    );
  }
};
