import React from "react";
import Image from "next/image";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
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
      <div className="h-full w-full mt-2 inline-block p-2 hover:scale-105 ease-in-out duration-300">
        <div className="h-full w-full flex flex-col justify-between rounded-lg shadow-lg">
          <div
            className="flex-grow text-center p-6 border-b flex flex-col justify-between rounded-lg"
            style={{ background: "#505254" }}
          >
            <div>
              <p
                className="pt-2 text-lg font-semibold"
                style={{ color: "rgb(209 213 219)" }}
              >
                {data.name}
              </p>
            </div>
            <div className="mt-5">
              <Link
                href={`/records/business/${data.id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold"
                style={{ background: "rgb(209 213 219)" }}
              >
                Request Funds
              </Link>
            </div>
          </div>

          <div className="h-40 border-b">
            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
              <div className="flex gap-2 items-center">
                <HiOutlineArrowTrendingUp />
                <p className="text-sm font-medium text-gray-800">
                  Min interest
                </p>
              </div>
              <p className="text-sm font-medium text-gray-800">
                {data.minInterest.toString()}%
              </p>
            </div>

            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
              <div className="flex gap-2 items-center">
                <HiOutlineArrowTrendingUp />
                <p className="text-sm font-medium text-gray-800">
                  Max interest
                </p>
              </div>
              <p className="text-sm font-medium text-gray-800">
                {data.maxInterest.toString()}%
              </p>
            </div>

            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle />
                <p className="text-sm font-medium text-gray-800">Min budget</p>
              </div>
              <p className="text-sm font-medium text-gray-800">
                {toDollarFormat(Number(data.minBudget.toString()))}
              </p>
            </div>

            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
              <div className="flex gap-2 items-center">
                <AiOutlineDollarCircle />
                <p className="text-sm font-medium text-gray-800">Max budget</p>
              </div>
              <p className="text-sm font-medium text-gray-800">
                {toDollarFormat(Number(data.maxBudget.toString()))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardLender;
