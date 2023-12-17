import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import React from "react";
import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { readPayloadJose } from "@/utils/jwt";
import ClientInputError from "@/global-components/ClientInputError";

//FOR BUSINESS DETAIL CARD
function Record({
  params,
}: {
  params: { id: string }; //this id is lenders id
}) {
  // console.log("<<<<< masuk");
  //! PURPOSE: FOR GETTING LENDERS ID
  const lendersId = async () => {
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
    return tokenData.id;
  };

  // ! PURPOSE: FOR POPULATING DATA
  //1.fetch all record
  const fetchAllRecord = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
      headers: { Cookie: cookies().toString() },
    });
    const responseJson: APIResponse<RecordType[]> = await response.json();
    if (responseJson.status === 401) {
      redirect("/login");
    }
    // return responseJson.data;
    //2.find one record based on loaneeId and loanerId
    const found = responseJson.data?.find(
      async (element: RecordType) =>
        element.loaneeId === params.id &&
        element.loanerId === (await lendersId())
    );

    return found;
  };

  (async function () {
    console.log("masuk");
    const hello = await fetchAllRecord();
    console.log(hello);
  })();

  //! PURPOSE: FOR POST NEW RECORD

  // console.log(params.id, "top");

  //to add new row in table Record
  //In business side = loanerId or lender is already from params, loaneeId or business is from get all business & use find built in [where: id from params === userId]
  async function onActionHandler(formData: FormData) {
    "use server";

    //make condition based on role
    // if (tokenData.role === "BUSINESS") {
    //cari loaneeId/businessId, using business table
    //get all /api/business
    // const fetchBusiness = async () => {
    //   const response = await fetch(
    //     `${process.env.NEXT_PUBLIC_URL}/api/business`,
    //     {
    //       headers: { Cookie: cookies().toString() },
    //     }
    //   );
    //   const responseJson: APIResponse<BusinessType[]> = await response.json();
    //   if (responseJson.status === 401) {
    //     redirect("/login");
    //   }
    //   return responseJson.data;
    // };

    // const found = (await fetchBusiness())?.find(
    //   (element: BusinessType) => element.userId === tokenData.id
    // );
    //   console.log(params.id, "lenderid");

    // const response = await fetch("http://localhost:3000/api/record", {
    //   method: "POST",
    //   //body can only receive post
    //   body: JSON.stringify({
    //     amount: Number(formData.get("amount")),
    //     due: formData.get("due"),
    //     interest: Number(formData.get("interest")),
    //     businessId: found?.id,
    //     lenderId: params.id,
    //   }),
    //   // Karena backendnya menerima tipe data "json"
    //   headers: {
    //     Cookie: cookies().toString(),
    //     "Content-Type": "application/json",
    //   },
    // });
    // const resJson = await response.json();
    // if (!response.ok) {
    //   redirect(`/record/${params.id}?error=${resJson.error}`);
    // }

    // console.log("masuks");
  }

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-black text-center text-4xl font-bold m-10">
          Record Form
        </h1>
        <ClientInputError />

        <form
          action={onActionHandler}
          className=" w-1/2 m-10 border-2 border-slate-200 bg-slate-50 text-black rounded-lg p-4 space-y-4"
        >
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value=""
            />
          </div>

          <div>
            <label
              htmlFor="due"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              type="date"
              id="due"
              name="due"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value=""
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-medium text-gray-700"
            >
              Interest
            </label>
            <input
              type="number"
              step="0.1"
              id="interest"
              name="interest"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value=""
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Negotiate
            </button>
          </div>
        </form>
        {/* Form */}
      </div>
    </>
  );
}

export default Record;
