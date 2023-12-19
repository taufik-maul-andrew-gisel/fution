import React from "react";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LenderType } from "@/app/api/typedef";
import Link from "next/link";
import { toDollarFormat } from "@/utils/toDollarFormat";

const CardLender = ({ data }: { data: LenderType }) => {
  
  return (<>
<div className="h-full w-full mt-2 inline-block p-2 hover:scale-105 ease-in-out duration-300">
  <div className="h-full w-full flex flex-col justify-between rounded-lg shadow-lg">
    <div className="flex-grow text-center p-6 border-b flex flex-col justify-between rounded-lg" style={{ background: "#505254" }}>
      <div>
        <p className="pt-2 text-lg font-semibold" style={{ color: "rgb(209 213 219)" }}>
          {data.name}
        </p>
      </div>
      <div className="mt-5">
        <Link href={`/records/business/${data.id}`} className="border bg-gray-300 rounded-full py-2 px-4 text-xs font-semibold">
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
          <p className="text-sm font-medium text-gray-800">
            Min budget
          </p>
        </div>
          <p className="text-sm font-medium text-gray-800">
            {toDollarFormat(Number(data.minBudget.toString()))}
          </p>
      </div>

      <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
        <div className="flex gap-2 items-center">
          <AiOutlineDollarCircle />
          <p className="text-sm font-medium text-gray-800">
            Max budget
          </p>
        </div>
          <p className="text-sm font-medium text-gray-800">
            {toDollarFormat(Number(data.maxBudget.toString()))}
          </p>
      </div>
      
    </div>
  </div>
</div>
  </>)
};

export default CardLender;
