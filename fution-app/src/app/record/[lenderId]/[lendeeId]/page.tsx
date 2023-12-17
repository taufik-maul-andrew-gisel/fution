import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import React from "react";
import { APIResponse, RecordType } from "@/app/api/typedef";

//to add new row in table Record
async function onActionHandler(loaneeId: string, loanerId: string) {
  "use server";

  //1. find record by loanerid & LOANEEID
  //   async () => {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_URL}/api/record/${loaneeId}`,
  //       {
  //         headers: { Cookie: cookies().toString() },
  //       }
  //     );
  //     const responseJson: APIResponse<RecordType> = await response.json();

  //     if (responseJson.status === 200) {
  //       redirect(`/business/{loaneeId}`);
  //     }
  //     return responseJson.data;
  //   };

  // post

  // put
}

function Record({
  params,
}: {
  params: { loaneeId: string; loanerId: string };
}) {
  console.log(params);

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-black text-center text-4xl font-bold m-10">
          Record Form
        </h1>
        {/* <form
          action=""
          className=" w-1/2 m-10 border-2 border-slate-200 bg-slate-50 text-black rounded-lg p-4"
        >
          <div>
            <label htmlFor="">Amount</label>
            <input type="text" placeholder="amount" />
          </div>
          <div>
            <label htmlFor="">placheolder</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">placheolder</label>
            <input type="text" />
          </div>
          <button type="submit">submit</button>
        </form> */}
        <form
          action={() => {
            onActionHandler(params.loaneeId, params.loanerId);
          }}
          className=" w-1/2 m-10 border-2 border-slate-200 bg-slate-50 text-black rounded-lg p-4 space-y-4"
        >
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
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
              type="due"
              id="due"
              name="due"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
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
              type="interest"
              id="interest"
              name="interest"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
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
}

export default Record;
