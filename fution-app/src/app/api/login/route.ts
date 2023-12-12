import User from "@/models/user";
import { compareTextWithHash } from "@/utils/bcryptjs";
import { NextResponse } from "next/server";
import { APIResponse } from "../typedef";
import { createToken } from "@/utils/jwt";
import errorHandler from "../errorHandler";

export const POST = async (request: Request) => {
  try {
    const data = await request.json();
    const foundUser = await User.getByUsername(data.username);
    if (!foundUser || !compareTextWithHash(data.password, foundUser.password)) {
      return NextResponse.json<APIResponse<never>>(
        {
          status: 400,
          error: "Invalid Email Or Password",
        },
        {
          status: 400,
        }
      );
    }
    const payload = {
      id: foundUser.id,
      username: foundUser.username,
      role: foundUser.role,
    };
    const token = createToken(payload);
    const result = {
      token,
    };
    return NextResponse.json<APIResponse<unknown>>(
      {
        status: 200,
        message: "success POST /login",
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
