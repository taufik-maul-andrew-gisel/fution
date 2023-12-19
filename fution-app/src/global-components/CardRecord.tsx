import React from "react";
import { RecordType } from "@/app/api/typedef";
import Link from "next/link";
import { toDollarFormat } from "@/utils/toDollarFormat";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { LuCalendarClock } from "react-icons/lu";
import { GrStatusInfo } from "react-icons/gr";

const CardRecord = ({
  data,
}: {
  data: { record: RecordType; name: string | undefined };
}) => {
  const { record } = data;
  const { id, amount, interest, status, due } = record;
  
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
      <Link
        href={`/records/${id}`}
        className="border bg-gray-300 rounded-full py-2 px-4 text-xs font-semibold"
      >
        See Details
      </Link>
    </div>
  </div>

  <div
    className="h-40 border-b"
  >
      <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
        <div className="flex gap-2 items-center">
          <AiOutlineDollarCircle />
          <p className="text-sm font-medium text-gray-800">
            Debt
          </p>
        </div>
          <p className="text-sm font-medium text-gray-800">
            {toDollarFormat(Number(amount.toString()))}
          </p>
      </div>

      <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
        <div className="flex gap-2 items-center">
          <HiOutlineArrowTrendingUp />
          <p className="text-sm font-medium text-gray-800">
            Interest
          </p>
        </div>
          <p className="text-sm font-medium text-gray-800">
            {interest.toString()}%
          </p>
      </div>

      <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
        <div className="flex gap-2 items-center">
          <LuCalendarClock />
          <p className="text-sm font-medium text-gray-800">
            Due
          </p>
        </div>
          <p className="text-sm font-medium text-gray-800">
            {due.toLocaleString().split("T")[0]}
          </p>
      </div>

      <div className="px-4 py-2 hover:bg-gray-100 flex justify-between">
        <div className="flex gap-2 items-center">
          <GrStatusInfo />
          <p className="text-sm font-medium text-gray-800">
            Status
          </p>
        </div>
            { (status === "REJECTED" || status === "OVERDUE") 
            ? (
              <p className="text-sm font-medium text-red-600">
                {status}
              </p>
            ) : (status === "PAID" ? (
                  <p className="text-sm font-medium text-emerald-600">
                    {status}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-800">
                    {status}
                  </p>
                )
            ) }
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRecord;
