"use client";
// !IMPORT
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
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
import { validateHeaderValue } from "http";
import { unknown } from "zod";
import Cookies from "js-cookie";

// ------------------------------------------------------------

// ! function outside functional component
//* PURPOSE: FOR GETTING LENDER ID
export const lenderId = async () => {
  const token = Cookies.get("token");

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
  }>(token);

  const fetchLender = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lender}`, {
      headers: {
        "Content-Type": "application/json",
        Cookie: `token=${token}`,
      },
    });
    const responseJson: APIResponse<LenderType[]> = await response.json();
    if (responseJson.status === 401) {
      redirect("/login");
    }
    return responseJson.data;
  };

  const found = (await fetchLender())?.find(
    (element: LenderType) => element.userId === tokenData.id
  );

  return found?.id;
};

//* PURPOSE: FOR POPULATING DATA
//1.fetch all record
export const fetchAllRecord = async (id: String) => {
  const token = Cookies.get("token");
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: `token=${token}`,
    },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const lId = await lenderId();
  // console.log(lId, "lender id");

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loaneeId === id && element.loanerId === lId;
  });

  if (found) {
    return found;
  }
};

//--------------------------------------------------------

// !Functional component
const LenderFillRecord = ({
  params,
}: {
  params: { id: string }; //this id is business id
}) => {
  console.log(params.id, "lenders id");

  const navigation = useRouter();

  const [formValue, setFormValue] = useState({
    amount: "",
    due: "",
    interest: "",
  });

  let lId: string | undefined = "intiallId";

  useEffect(() => {
    async () => {
      lId = await lenderId();

      const isThereRecords = await fetchAllRecord(params.id);
      if (isThereRecords !== undefined) {
        setFormValue({
          amount: isThereRecords.amount.toString(),
          due: isThereRecords.due.toString(),
          interest: isThereRecords.interest.toString(),
        });
      }
    };
  }, []);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [event.target.id]: event.target.value,
    });
  };

  const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const theBody = {
      amount: Number(formValue.amount),
      due: formValue.due,
      interest: Number(formValue.interest),
      businessId: lId,
      lenderId: params.id,
    };

    const response = await fetch("http://localhost:3000/api/record", {
      method: "POST",
      body: JSON.stringify(theBody),
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
      },
    });

    const responseJson = await response.json();
    console.log(responseJson);

    setFormValue({
      amount: "",
      due: "",
      interest: "",
    });

    navigation.refresh();
    navigation.push(`/business/${params.id}`);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-black text-center text-4xl font-bold m-10">
          Record Form
        </h1>
        <ClientInputError />

        <form
          className=" w-1/2 m-10 border-2 border-slate-200 bg-slate-50 text-black rounded-lg p-4 space-y-4"
          onSubmit={onSubmitHandler}
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
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value={formValue.amount}
              onChange={onChangeHandler}
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
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value={formValue.due}
              onChange={onChangeHandler}
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
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              value={formValue.interest}
              onChange={onChangeHandler}
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
};

export default LenderFillRecord;
