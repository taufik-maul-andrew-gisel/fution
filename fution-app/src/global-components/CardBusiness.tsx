import React from "react";
import Image from "next/image";
import { BusinessType } from "@/app/api/typedef";
import Link from "next/link";

const CardBusiness = ({ data }: { data: BusinessType }) => {
  return (
    <>
      {console.log(data.id, "ini di card business")}
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
              <Link
                href={`/business/${data.id}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                See Detail
              </Link>
            </div>
          </div>
          <div className="h-40 border-b">
            <div className="px-2 py-3 italic">
              <span className="text-sm italic">{data.tagline}</span>
            </div>
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
                  Credit Score
                </p>
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {data.creditScore}
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
                  Credibility
                </p>
                {/* <p className="text-sm font-medium text-gray-800 leading-none">
                  {data.credibility}%
                </p> */}


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
