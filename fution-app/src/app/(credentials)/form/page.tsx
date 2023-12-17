import React from "react";
import FormLender from "@/components/formLender";
import FormBusiness from "@/components/formBusiness";
import { cookies } from "next/headers";
import { readPayloadJose } from "@/utils/jwt";
import { NextResponse } from "next/server";

const Form = async () => {
  // const role = "LENDER";
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  if (!token) {
    return NextResponse.json(
      {
        status: 401,
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }
  const tokenData = await readPayloadJose<{
    id: string;
    username: string;
    role: string;
  }>(token.value);
  // console.log(tes, "oiiiiiiiiiiiiiiiiii");

  return (
    <>{tokenData.role === "LENDER" ? <FormLender /> : <FormBusiness />} </>
  );
};

export default Form;
