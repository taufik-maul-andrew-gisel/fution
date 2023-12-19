import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import ClientInputError from "@/global-components/ClientInputError";
import { readPayloadJose } from "@/utils/jwt";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// ! function outside functional component
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
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lender`, {
      headers: { Cookie: cookies().toString() },
    });
    const responseJson: APIResponse<LenderType[]> = await response.json();

    if (responseJson.status === 401) {
      redirect("/login");
    }
    return responseJson.data;
  };

  const found = (await fetchLender())?.find(
    (element: LenderType) => element.userId === tokenData.id
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
  // console.log(responseJson, "record sblm di filter");
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const lId = await lenderId();
  // console.log(lId, "lender id");

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loaneeId === lId && element.loanerId === id;
  });

  return found;
};

//--------------------------------------------------------

// !Functional component
const LenderFillForm = async ({
  params,
}: {
  params: { id: string }; //this id is lender id
}) => {
  const lId = await lenderId();
  // console.log(lId, "lenderId");
  // console.log(params.id, "businessId");

  const lenderCurrentValue: RecordType | undefined = await fetchAllRecord(
    params.id
  );
  // console.log(lenderCurrentValue, "record");

  const onSubmitHandler = async (formData: FormData) => {
    "use server";

    const response = await fetch(`${process.env.NEXT_PUBLIC_UR}api/record`, {
      method: "POST",
      body: JSON.stringify({
        amount: formData.get("amount"),
        interest: formData.get("interest"),
        due: formData.get("due"),
        businessId: params.id,
        lenderId: lId,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });
    const responseJson = await response.json();
    if (responseJson.status === 400) {
      redirect(`/records/lender/${params.id}?error=${responseJson.error}`);
    }
    console.log(responseJson, "error message check");
    revalidatePath(`/home`);
    redirect(`/home`);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <h1 className="text-black text-center text-4xl font-bold m-10">
          Record Form
        </h1>
        <ClientInputError />
        <form
          className=" px-10 w-1/2 m-10 border-2 border-slate-200 bg-slate-50 text-black rounded-lg p-4 space-y-4"
          action={onSubmitHandler}
        >
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              defaultValue={
                lenderCurrentValue ? lenderCurrentValue.amount.toString() : ""
              }
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
              type="date"
              id="due"
              name="due"
              className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
              defaultValue={
                lenderCurrentValue
                  ? lenderCurrentValue.due.toString().split("T")[0]
                  : ""
              }
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
              type="number"
              step="0.1"
              id="interest"
              name="interest"
              defaultValue={
                lenderCurrentValue ? lenderCurrentValue.interest.toString() : ""
              }
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
};

export default LenderFillForm;
