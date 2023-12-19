import React from "react";
import Image from "next/image";
import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import Link from "next/link";
import { toDollarFormat } from "@/utils/toDollarFormat";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { readPayloadJose } from "@/utils/jwt";
import { redirect } from "next/navigation";

// ! function outside functional component
//* PURPOSE: FOR GETTING BUSINESS ID
export const businessId = async () => {
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

  const fetchBusiness = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/business`,
      {
        headers: { Cookie: cookies().toString() },
      }
    );
    const responseJson: APIResponse<BusinessType[]> = await response.json();

    if (responseJson.status === 401) {
      ("/login");
    }
    return responseJson.data;
  };

  const found = (await fetchBusiness())?.find(
    (element: BusinessType) => element.userId === tokenData.id
  );

  return found?.id;
};

// //* PURPOSE: FOR POPULATING DATA
//1.fetch all record
export const fetchAllRecord = async (id: String) => {
  //lender id
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();
  console.log(responseJson, "record sblm di filter");
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const bId = await businessId();
  // console.log(bId, "lender id");

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loaneeId === bId && element.loanerId === id;
  });

  return found;
};

//--------------------------------------------------------

const CardLender = async ({ data }: { data: LenderType }) => {
  //data is lender infomation (one, di map function di home)

  const lenderCurrentValue: RecordType | undefined = await fetchAllRecord(
    data.id
  );

  const id = data.id;
  // console.log(id, "96");
  return (
    <>
      <div className="h-full w-full mx-auto right-0 mt-2 inline-block p-2 hover:scale-105 ease-in-out duration-300">
        <div className="h-full w-full flex flex-col justify-between bg-white rounded overflow-hidden shadow-lg">
          <div className="flex-grow text-center p-6 bg-gray-800 border-b flex flex-col justify-between">
            <div>
              <svg
                aria-hidden="true"
                role="img"
                className="h-24 w-24 text-white rounded-full mx-auto"
                width={32}
                height={32}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
                />
              </svg>
              <p className="pt-2 text-lg font-semibold text-gray-50">
                {data.name}
              </p>
            </div>
            <div className="mt-5">
              {!lenderCurrentValue ? (
                <Link
                  href={`/records/business/${id}`}
                  className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
                >
                  Request Funds
                </Link>
              ) : (
                <Link
                  href={`/home`}
                  className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100 cursor-not-allowed"
                >
                  Request Funds
                </Link>
              )}
              {/* <Link
                href={`/records/business/${data.id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Request Funds
              </Link> */}
            </div>
          </div>
          <div className="h-40 border-b">
            {/*  */}
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3 flex flex-row  space-x-2">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Min interest
                </p>
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {data.minInterest.toString()}%
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="pl-3 flex flex-row  space-x-2">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Max interest
                </p>
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {data.maxInterest.toString()}%
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3 flex flex-row  space-x-2">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Min budget
                </p>
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {toDollarFormat(Number(data.minBudget.toString()))}
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="px-4 py-2 hover:bg-gray-100 flex">
              <div className="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="pl-3 flex flex-row  space-x-2">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  Max budget
                </p>
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {toDollarFormat(Number(data.maxBudget.toString()))}
                </p>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLender;
