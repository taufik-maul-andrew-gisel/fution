import { APIResponse, RecordDetailType } from "@/app/api/typedef";
import { getNextQuarter } from "@/utils/quarter";
import { toDollarFormat } from "@/utils/toDollarFormat";
import { cookies } from "next/headers";
import Link from "next/link";
import React from "react";
import RecordComponent from "./RecordComponent";

// !fetch one record(include loanee detail and loaner detail with loanee credibility) based on record Id
async function fetchRecord(id: string) {
  //record Id
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record/${id}`, {
    headers: { Cookie: cookies().toString() },
  });
  const resJson: APIResponse<RecordDetailType> = await res.json();
  return resJson.data;
}

async function fetchRecordDebt(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/record/debt/${id}`,
    {
      headers: { Cookie: cookies().toString() },
    }
  );
  const resJson: APIResponse<{ init: string; curr: string; next: string[] }> =
    await res.json();
  return resJson.data;
}

// !functional component
async function RecordDetail({ params }: { params: { id: string } }) {
  const recordId = params.id;
  const record = await fetchRecord(recordId);
  const debt = await fetchRecordDebt(recordId);

  // get next 4 terms
  const currYear = new Date().getFullYear();
  const currMonth = new Date().getMonth();
  let currQ: number;
  if (currMonth < 10) {
    currQ = 3;
  } else if (currMonth < 7) {
    currQ = 2;
  } else if (currMonth < 4) {
    currQ = 1;
  } else {
    currQ = 4;
  }
  const { nextYear: nextYear1, nextQ: nextQ1 } = getNextQuarter(
    currYear,
    currQ
  );
  const { nextYear: nextYear2, nextQ: nextQ2 } = getNextQuarter(
    nextYear1,
    nextQ1
  );
  const { nextYear: nextYear3, nextQ: nextQ3 } = getNextQuarter(
    nextYear2,
    nextQ2
  );
  const { nextYear: nextYear4, nextQ: nextQ4 } = getNextQuarter(
    nextYear3,
    nextQ3
  );

  return (
    <>
      <div className="py-6 px-20">
        <div className="grid grid-cols-4 z-0 gap-4">
          <div className="col-span-4 mt-2 text-2xl font-bold ml-1 mb-2">
            <h2>Record Details</h2>
          </div>

          {/* loanee */}
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm pt-2 pb-4 px-7">
            <div>
              <img
                src="/profile-pic.png"
                className="w-16 rounded-full mx-auto my-4 p-0 border-[3px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              <h2 className="col-span-3 text-lg font-semibold ml-1">
                {record?.loanee.name}
              </h2>
            </div>
            <div className="text-left [&_div]:mb-1 ml-1">
              <div className="mt-4 flex justify-between">
                <p className="font-semibold" style={{ fontSize: "0.9rem" }}>
                  Credit score
                </p>
                <p className="text-sm">{record?.loanee.creditScore}</p>
              </div>
              <div className="mt-2 flex justify-between tooltip">
                <div className="flex">
                  <p className="font-semibold" style={{ fontSize: "0.9rem" }}>
                    FuTion score
                  </p>
                  <div className="tooltiptext text-sm">
                    This score based on the ratio of rejected requests and
                    on-time paid loans, to the total number of requests a
                    business makes. Each factor has different weightings.
                  </div>
                </div>
                <p className="text-sm">{record?.loanee.credential}%</p>
              </div>
              <div className="mt-2 flex justify-between tooltip">
                <p className="font-semibold" style={{ fontSize: "0.9rem" }}>
                  Credibility
                </p>
                {record && record.loanee.credibility >= 80 && (
                  <p className="text-sm text-emerald-600 font-semibold">
                    {record.loanee.credibility}%
                  </p>
                )}
                {record &&
                  record.loanee.credibility >= 65 &&
                  record.loanee.credibility < 80 && (
                    <p className="text-sm text-yellow-600 font-semibold">
                      {record.loanee.credibility}%
                    </p>
                  )}
                {record &&
                  record.loanee.credibility >= 0 &&
                  record.loanee.credibility < 65 && (
                    <p className="text-sm text-red-600 font-semibold">
                      {record.loanee.credibility}%
                    </p>
                  )}
                <div className="tooltiptext text-sm">
                  This score is based on the ratio of a business's credit score
                  to its FuTion score.
                </div>
              </div>
            </div>
          </div>

          {/* record */}
          <div className="col-span-2 flex flex-col justify-between text-black bg-white border-t border-b sm:rounded sm:border shadow pt-2 pb-4 px-7">
            {record?.loanee.id && (
              <RecordComponent record={record} debt={debt} />
            )}
          </div>

          {/* loaner */}
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm p-3">
            <div>
              <img
                src="/profile-pic.png"
                className="w-16 rounded-full mx-auto my-4 p-0 border-[3px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              <h2 className="col-span-3 text-lg font-semibold ml-1">
                {record?.loaner.name}
              </h2>
            </div>
            <div className="text-left [&_div]:mb-1 ml-1">
              <div className="mt-4">
                <p className="font-semibold" style={{ fontSize: "0.9rem" }}>
                  Preferred budget range
                </p>
                <p className="text-sm">
                  {toDollarFormat(Number(record?.loaner.minBudget.toString()))}{" "}
                  -{" "}
                  {toDollarFormat(Number(record?.loaner.maxBudget.toString()))}
                </p>
              </div>
              <div className="mt-2">
                <p className="font-semibold" style={{ fontSize: "0.9rem" }}>
                  Preferred interest range
                </p>
                <p className="text-sm">
                  {record?.loaner.minInterest.toString()}% -{" "}
                  {record?.loaner.maxInterest.toString()}%
                </p>
              </div>
            </div>
          </div>

          <div className="text-2xl font-bold ml-1 mt-2 pt-4 mb-2 col-span-4">
            <h2>Predicted Future Payment</h2>
            {/* <h4 className="text-base font-semibold mt-2">If you were to pay in the future, you would have to pay...</h4> */}
          </div>

          {/* future payment */}
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear1}-Q${nextQ1}`}</h4>
            <p className="text-sm">
              {toDollarFormat(Math.round(Number(debt?.next[0]) * 100) / 100)}
            </p>
          </div>
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear2}-Q${nextQ2}`}</h4>
            <p className="text-sm">
              {toDollarFormat(Math.round(Number(debt?.next[1]) * 100) / 100)}
            </p>
          </div>
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear3}-Q${nextQ3}`}</h4>
            <p className="text-sm">
              {toDollarFormat(Math.round(Number(debt?.next[2]) * 100) / 100)}
            </p>
          </div>
          <div className="flex flex-col text-black text-center bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm pt-2 pb-4 px-7">
            <h4 className="text-base font-semibold my-1">{`${nextYear4}-Q${nextQ4}`}</h4>
            <p className="text-sm">
              {toDollarFormat(Math.round(Number(debt?.next[3]) * 100) / 100)}
            </p>
          </div>
        </div>
      </div>

      {/* <h1>record detail</h1>
        <ul>
            <li>loaner: {record?.loaner.name}</li>
            <li>loanee: {record?.loanee.name}</li>
            <li>status: {record?.status}</li>
            <li>due: {record?.due.toLocaleString().split("T")[0]}</li>
            <li>initial amount: {debt?.init}</li>
            <li>outstanding amount: {debt?.curr}</li>
            <li>if you were to pay in the future, you have to pay:
                <ul>
                    <li>next term: {debt?.next[0]}</li>
                    <li>next 2 terms: {debt?.next[1]}</li>
                    <li>next 3 terms: {debt?.next[2]}</li>
                    <li>next 4 terms: {debt?.next[3]}</li>
                </ul>
            </li>
        </ul> */}
    </>
  );
}

export default RecordDetail;
