import {
  APIResponse,
  LenderType,
  RecordDetailType,
  RecordType,
} from "@/app/api/typedef";
import { toDollarFormat } from "@/utils/toDollarFormat";
import Link from "next/link";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { readPayloadJose } from "@/utils/jwt";
import LenderModel from "@/models/lender";

//------------------------------------------------------------
// ! function outside functional component

//* PURPOSE: TO CHECK IF IT IS A BUSINESS OR LENDER
const checkRole = async () => {
  const cookiesStore = cookies();
  const token = cookiesStore.get("token");
  if (!token) {
    throw new Error("no token");
  }
  const tokenData = await readPayloadJose<{
    id: string;
    username: string;
    role: string;
  }>(token.value);
  return tokenData.role;
};

//* PURPOSE: FOR GETTING LENDER ID
export const lenderId = async () => {
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

  const fetchLender = async () => {
    // console.log(process.env.NEXT_PUBLIC_URL);
    // const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lender}`, {
    //   headers: {
    //     Cookie: cookies().toString(),
    //   },
    // });

    // // console.log(response.status);
    // const responseJson: APIResponse<LenderType[]> = await response.json();
    // // console.log("AFTER");
    // // console.log(responseJson, "fetchLender line 46");
    // if (responseJson.status === 401) {
    //   redirect("/login");
    // }
    return await LenderModel.readAll();
  };

  // console.log("before, <<<< ");
  // console.log(await fetchLender());
  const found = (await fetchLender())?.find((element: LenderType) => {
    // console.log(element);
    // console.log(tokenData);
    return element.userId === tokenData.id;
  });
  // console.log("after, <<<< ");

  return found?.id;
};

//* PURPOSE: WILL GET ONE RECORD, THIS RECORD IS TO TAKE ITS RECORDID TO CHANGE STATUS
//1.fetch all record
export const fetchAllRecord = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: {
      Cookie: cookies().toString(),
    },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();

  if (responseJson.status === 401) {
    redirect("/login");
  }
  //2.find one record based on loaneeId and loanerId
  const lId = await lenderId();

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loaneeId === id && element.loanerId === lId;
  });

  return found;
};

// ! functional component
async function RecordComponent({
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
  const theRole = await checkRole();
  // * if lender click reject button
  const rejectButtonHandler = async () => {
    "use server";

    let oneRecord =
      record?.loaneeId && (await fetchAllRecord(record?.loaneeId));

    if (oneRecord) {
      const id = oneRecord.id;
      const response = await fetch(`http://localhost:3000/api/record/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ status: "REJECTED" }),
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      });
      const resJson = await response.json();

      if (!response.ok) {
        redirect(`/records/${record?.id}?error=${resJson.error}`);
      }
      revalidatePath(`/records/${record?.id}`);
      redirect(`/records/${record?.id}`);
    }
  };
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
        {record?.status === "PENDING" && (
          <p className="mt-2">
            Click the negotiate button and submit the same values as above to
            accept the request.
          </p>
        )}
        {record?.status === "DEBT" && (
          <p className="mb-2">{record.loanee.name} is currently in debt.</p>
        )}
        {record?.status === "DEBT" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Amount</p>
            <p>
              {debt?.curr ? toDollarFormat(Number(debt?.curr.toString())) : ""}
            </p>
          </div>
        )}
        {record?.status === "DEBT" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Interest</p>
            <p>{record.interest.toString()}%</p>
          </div>
        )}
        {record?.status === "DEBT" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Due</p>
            <p>{record?.due.toLocaleString().split("T")[0]}</p>
          </div>
        )}
        {record?.status === "REJECTED" && (
          <p>This request has been rejected by {record.loaner.name}.</p>
        )}
        {record?.status === "OVERDUE" && (
          <p className="mb-2">This loan is not paid off before the due date.</p>
        )}
        {record?.status === "OVERDUE" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Amount</p>
            <p>
              {debt?.curr ? toDollarFormat(Number(debt?.curr.toString())) : ""}
            </p>
          </div>
        )}
        {record?.status === "OVERDUE" && (
          <div className="flex justify-between items-center pr-3 font-semibold text-base">
            <p>Interest</p>
            <p>{record.interest.toString()}%</p>
          </div>
        )}
        {record?.status === "OVERDUE" && (
          <p className="mt-2">
            Payment is no longer possible on this website. If you intend to pay
            this off, please contact your lender for more information.
          </p>
        )}
      </div>
      <div className="ml-auto mr-0 mb-1 mt-3 font-semibold text-sm flex items-end">
        {/* need authorisation */}
        {record?.status === "DEBT" && (
          <div className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-4 ml-2 shadow">
            <Link
              href="/home"
              className="w-full h-full"
            >
              Pay
            </Link>
          </div>
        )}

        {/* no need authorisation */}
        {record?.status === "PENDING" && (
          <>
            {/* LOGIC FOR REJECT (ONLY LENDERS SIDE WILL APPEAR) */}
            {theRole === "LENDER" && (
              <form action={rejectButtonHandler}>
                <button className="bg-red-200 rounded-lg hover:bg-red-300 flex-grow-0 py-2 px-4 ml-2 shadow">
                  Reject
                </button>
              </form>
            )}
            {/* LOGIC FOR REJECT (ONLY LENDERS SIDE WILL APPEAR) */}

            {/* LOGIC FOR NEGOTIATE (FOR BOTH SIDE)*/}
            {(() => {
              if (record.updatedAmount % 2 != 0 && theRole === "LENDER") {
                return (
                  <Link 
                    href={`/records/lender/${record.loaneeId}`}
                    className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-4 ml-2 shadow">
                    <div className="w-full h-full">
                      Negotiate
                    </div>
                  </Link>
                );
              } else if (
                record.updatedAmount % 2 == 0 &&
                theRole === "BUSINESS"
              ) {
                return (
                  <Link 
                    href={`/records/business/${record.loaner.id}`}
                    className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-4 ml-2 shadow">
                  <div
                    className="w-full h-full"
                  >
                    Negotiate
                  </div>
                  </Link>
                );
              } else {
                return (
                  <Link 
                    href={`/records/${record.id}`}
                    className="bg-emerald-200 rounded-lg hover:bg-emerald-300 flex-grow-0 py-2 px-4 ml-2 shadow cursor-not-allowed">
                  <div
                    className="w-full h-full"
                  >
                    Negotiate
                  </div>
                  </Link>
                );
              }
            })()}

            {/* LOGIC FOR NEGOTIATE (FOR BOTH SIDE)*/}

            {/* LOGIC FOR CALL (ONLY LENDERS SIDE WILL APPEAR) */}
            {theRole === "LENDER" && (
              <Link 
                href={`/videocall/${record.loaneeId}`} //idnya business
                className="bg-blue-200 rounded-lg hover:bg-blue-300 flex-grow-0 py-2 px-4 ml-2 shadow">
              <div
                className="w-full h-full"
              >
                Call
              </div>
              </Link>
            )}
            {/* LOGIC FOR CALL (ONLY LENDERS SIDE WILL APPEAR) */}
          </>
        )}
        <Link 
          href="/home"
          className="bg-sky-200 rounded-lg hover:bg-sky-300 flex-grow-0 py-2 px-4 ml-2 shadow">
        <div
          className="w-full h-full"
        >
          Back
        </div>
        </Link>
      </div>
    </>
  );
}

export default RecordComponent;
