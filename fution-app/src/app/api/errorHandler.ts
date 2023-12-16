import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";
import { APIResponse } from "./typedef";
import { ZodError } from "zod";

export default function errorHandler(error: any) {
  let status = 500,
    errorMsg = "internal server error";
  console.error(error);

  if (error instanceof ZodError) {
    status = 400;
    errorMsg = error.issues.map((e) => e.path + " - " + e.message).join("\n");
  }
  
  if (
    error instanceof PrismaClientValidationError ||
    error instanceof PrismaClientKnownRequestError
  ) {
    status = 400;
    errorMsg = error.message.replace(/(\r\n|\n|\r)/gm, "");
  }
  
  if (error instanceof Error) {
    if (error.message.includes("user's role is not")) {
      status = 403;
      errorMsg = error.message;
    }
    if (error.message === "data not found") {
      status = 404;
      errorMsg = error.message;
    }
    if (error.message === "Unauthorized") {
      status = 401;
      errorMsg = error.message;
    }
    if (error.message === "can't update REJECTED record") {
      status = 400;
      errorMsg = error.message;
    }
  }
  
  return NextResponse.json<APIResponse<never>>(
    { status, error: errorMsg },
    { status }
  );
}
