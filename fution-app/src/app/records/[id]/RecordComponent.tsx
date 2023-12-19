import { RecordDetailType } from "@/app/api/typedef";
import { toDollarFormat } from "@/utils/toDollarFormat";
import Link from "next/link";
import React from "react";

function RecordComponent({
  record,
  debt,
}: {
  record?: RecordDetailType;
  debt?: {
    init: string;
    curr: string;
    next: string[];
  };
}) {
  return (
    <>
      <div>
        {record?.status === "REJECTED" && (
          <p className="text-xl font-bold mt-4 mb-2 text-center text-red-500">
            REJECTED
          </p>
        )}
        {record?.status === "OVERDUE" && (
          <p className="text-xl font-bold mt-4 mb-2 text-center text-red-500">
            OVERDUE
          </p>
        )}
        {record?.status === "PENDING" && (
          <p className="text-xl font-bold mt-4 mb-2 text-center">PENDING</p>
        )}
        {record?.status === "PAID" && (
          <p className="text-xl font-bold mt-4 mb-2 text-center text-emerald-500">
            PAID
          </p>
        )}
        {record?.status === "DEBT" && (
          <p className="text-xl font-bold mt-4 mb-2 text-center">DEBT</p>
        )}
      </div>
      <div className="text-sm">
        {record?.status === "PAID" && (
          <p className="mb-2">Loan is paid successfully.</p>
        )}
        {/* { record?.status === "PAID" && <p>Date paid: { record?.updatedAt.toLocaleString().split("T")[0] }</p> } */}
        {record?.status === "PENDING" && (
          <p className="mb-2">
            This is an ongoing negotiation process. Here are the current agreed
            values.
          </p>
        )}
        {record?.status === "PENDING" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Amount</p>
            <p>
              {record.amount
                ? toDollarFormat(Number(record.amount.toString()))
                : ""}
            </p>
          </div>
        )}
        {record?.status === "PENDING" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Interest</p>
            <p>{record.interest.toString()}%</p>
          </div>
        )}
        {record?.status === "PENDING" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Due</p>
            <p>{record?.due.toLocaleString().split("T")[0]}</p>
          </div>
        )}
        { record?.status === "PENDING" && <p className="mt-2">Click the negoitate button and submit the same values as above to accept the request.</p> }
        { record?.status === "DEBT" && <p className="mb-2">{record.loanee.name} is currently in debt.</p> }
        { record?.status === "DEBT" && (
            <div className="flex justify-between items-center pr-3 font-semibold text-base">
                <p>Amount</p> 
                <p>{ debt?.curr ? toDollarFormat(Number(debt?.curr.toString())) : ""}</p> 
            </div>
        ) }
        { record?.status === "DEBT" && (
            <div className="flex justify-between items-center pr-3 font-semibold text-base">
                <p>Interest</p> 
                <p>{ record.interest.toString() }%</p> 
            </div>
        ) }
        { record?.status === "DEBT" && (
            <div className="flex justify-between items-center pr-3 font-semibold text-base">
                <p>Due</p> 
                <p>{record?.due.toLocaleString().split("T")[0]}</p> 
            </div>
        ) }
        { record?.status === "REJECTED" && <p>This request has been rejected by {record.loaner.name}.</p> }
        { record?.status === "OVERDUE" && <p className="mb-2">This loan is not paid off before the due date.</p> }
        { record?.status === "OVERDUE" && (
            <div className="flex justify-between items-center pr-3 font-semibold text-base">
                <p>Amount</p> 
                <p>{ debt?.curr ? toDollarFormat(Number(debt?.curr.toString())) : ""}</p> 
            </div>
        ) }
        { record?.status === "OVERDUE" && (
            <div className="flex justify-between items-center pr-3 font-semibold text-base">
                <p>Interest</p> 
                <p>{ record.interest.toString() }%</p> 
            </div>
        ) }
        { record?.status === "OVERDUE" && <p className="mt-2">Payment is no longer possible on this website. If you intend to pay this off, please contact your lender for more information.</p> }

    </div>
    <div className="ml-auto mr-0 mb-4 font-semibold text-sm">
        {/* need authorisation */}
        {record?.status === "DEBT" && (
          <>
            <Link
              href="/home"
              className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-5 ml-2 shadow"
            >
              Pay
            </Link>
          </>
        )}

        {/* no need authorisation */}
        {record?.status === "PENDING" && (
          <>
            <Link
              href="/home"
              className="bg-red-200 rounded-lg hover:bg-red-300 flex-grow-0 py-2 px-5 ml-2 shadow"
            >
              Reject
            </Link>
            <Link
              href="/home"
              className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-5 ml-2 shadow"
            >
              Negotiate
            </Link>
            <Link
              href={`/videocall/${record.loaneeId}`} //idnya business
              className="bg-blue-200 rounded-lg hover:bg-blue-300 flex-grow-0 py-2 px-5 ml-2 shadow"
            >
              Call
            </Link>
          </>
        )}
        <Link
          href="/home"
          className="bg-sky-200 rounded-lg hover:bg-sky-300 flex-grow-0 py-2 px-5 ml-2 shadow"
        >
          Back
        </Link>
      </div>
    </>
  );
}

export default RecordComponent;
