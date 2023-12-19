import React from "react";
import { BusinessType } from "@/app/api/typedef";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Link from "next/link";
import { MdCreditScore } from "react-icons/md";

const CardBusiness = ({ data }: { data: BusinessType }) => {
  return (
    <>
<div className="h-full w-full mt-2 inline-block p-2 hover:scale-105 ease-in-out duration-300">
  <div className="h-full w-full flex flex-col justify-between rounded-lg shadow-lg">
    <div className="flex-grow text-center p-6 border-b flex flex-col justify-between rounded-lg" style={{ background: "#505254" }}>
      <div>
        <p className="pt-2 text-lg font-semibold" style={{ color: "rgb(209 213 219)" }}>
          {data.name}
        </p>
      </div>
      <div className="mt-5">
              <Link
                href={`/business/${data.id}`}
                className="border bg-gray-300 rounded-full py-2 px-4 text-xs font-semibold"
              >
                See Details
              </Link>
            </div>
          </div>
          <div className="h-40 border-b">
            <div className="px-1 py-2">
              <span className="text-sm" style={{ fontStyle: "italic" }}>{data.tagline}</span>
            </div>

            <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
              <div className="flex gap-2 items-center">
                <MdCreditScore />
                <p className="text-sm font-medium text-gray-800">
                  Credit score
                </p>
              </div>
                <p className="text-sm font-medium text-gray-800">
                  {data.creditScore}
                </p>
            </div>
            {/*  */}
            {/*  */}
            <div className="px-4 py-2 hover:bg-gray-100 ">
              <div className="flex gap-2 items-center justify-between">
                <div className="flex items-center gap-2">
                  <IoMdCheckmarkCircleOutline />
                  <p className="text-sm font-medium text-gray-800">
                    Credibility
                  </p>
                </div>

                { data.credibility >= 80 && (
                  <p className="text-sm font-medium leading-none">
                    <span className="text-emerald-600 font-semibold">{data.credibility}%</span>
                  </p>
                ) }
                { data.credibility >= 65 && data.credibility < 80 && (
                  <p className="text-sm font-medium leading-none">
                    <span className="text-yellow-600 font-semibold">{data.credibility}%</span>
                  </p>
                ) }
                { data.credibility >= 0 && data.credibility < 65 && (
                  <p className="text-sm font-medium leading-none">
                    <span className="text-red-600 font-semibold">{data.credibility}%</span>
                  </p>
                ) }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBusiness;
