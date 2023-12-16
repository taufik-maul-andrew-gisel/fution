import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { readPayloadJose } from "./utils/jwt";
import next from "next";

export const middleware = async (request: NextRequest) => {
  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("/api")) {
    if (
      request.url.includes("/api/register") ||
      request.url.includes("/api/login")
    ) {
      return NextResponse.next();
      // console.log("API", request.method, request.url);
    }

    // ------------- delete later --------------
    if (request.url.includes("/api/record")) return NextResponse.next();
    if (request.url.includes("/api/record")) return NextResponse.next();
    // ------------- delete later --------------

    const cookiesStore = cookies();
    const token = cookiesStore.get("token");
    // console.log(token, "ini token");

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImY4NGIyZDU3LTNiNTEtNGEzZi05OWYyLTdjMDM3OGE0NGI3ZiIsInVzZXJuYW1lIjoiYW5kcmV3Iiwicm9sZSI6IkJVU0lORVNTIiwiaWF0IjoxNzAyNDYxNTc5fQ._VHJHxS8HzNjlFScUwleU3VZp06E7Xfv5eguXnwMBm0";
    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      }, { status: 401 });
    }
    const tokenData = await readPayloadJose<{
      id: string;
      username: string;
      role: string;
    }>(token.value);
    const requestHeaders = new Headers(request.headers);
    // set the headers
    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-username", tokenData.username);
    requestHeaders.set("x-user-role", tokenData.role);
    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  return NextResponse.next();
};
