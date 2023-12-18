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

const token = Cookies.get("token"); // => 'value'
// const role = req.headers.get("x-user-role") as UserRole;

// ! function outside functional component
//* PURPOSE: FOR GETTING BUSINESS ID
export const businessId = async () => {
  if (!token) {
    throw new Error("Unauthorized");
  }
  const tokenData = await readPayloadJose<{
    id: string;
    username: string;
    role: string;
  }>(token);

  const fetchBusiness = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/business`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: token,
        },
      }
    );
    const responseJson: APIResponse<BusinessType[]> = await response.json();
    if (responseJson.status === 401) {
      redirect("/login");
    }
    return responseJson.data;
  };

  const found = (await fetchBusiness())?.find(
    (element: BusinessType) => element.userId === tokenData.id
  );

  return found?.id;
};

//* PURPOSE: FOR POPULATING DATA
//1.fetch all record
export const fetchAllRecord = async (id: String) => {
  if (!token) {
    throw new Error("Unauthorized");
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: token,
    },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const bId = await businessId();
  console.log(bId, "business id");

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loanerId === id && element.loaneeId === bId;
  });

  if (found) {
    return found;
  }
};

//----------------------------------------------------------------

// !Functional component
const BusinessFillRecord = ({
  params,
}: {
  params: { id: string }; //this id is lenders id
}) => {
  const navigation = useRouter();

  const [formValue, setFormValue] = useState({
    amount: "",
    due: "",
    interest: "",
  });

  const [bId, setBId] = useState<string | undefined>("");

  const fetchData = async () => {
    try {
      console.log("masuk use effect");
      setBId(await businessId());

      const isThereRecords = await fetchAllRecord(params.id);
      console.log(isThereRecords);
      if (isThereRecords) {
        setFormValue({
          amount: isThereRecords.amount.toString(),
          due: isThereRecords.due.toString(),
          interest: isThereRecords.interest.toString(),
        });
      }
    } catch (error) {
      console.log("Error in fetchData:");
    }
  };

  useEffect(() => {
    fetchData();
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
      businessId: bId,
      lenderId: params.id,
    };
    if (!token) {
      throw new Error("Unauthorized");
    }
    const response = await fetch("http://localhost:3000/api/record", {
      method: "POST",
      body: JSON.stringify(theBody),
      headers: {
        "Content-Type": "application/json",
        Cookie: token,
      },
    });

    setFormValue({
      amount: "",
      due: "",
      interest: "",
    });

    navigation.refresh();
    navigation.push(`/lender/${params.id}`);
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

export default BusinessFillRecord;
