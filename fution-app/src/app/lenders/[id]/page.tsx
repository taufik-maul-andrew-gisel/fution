import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import { readPayloadJose } from "@/utils/jwt";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

// --------------------------------------------------------------------

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
        headers: {
          "Content-Type": "application/json",
          Cookie: cookies().toString(),
        },
      }
    );
    const responseJson: APIResponse<BusinessType[]> = await response.json();
    if (responseJson.status === 401) {
      redirect("/login");
    }
    return responseJson.data;
  };

  const found = (await fetchBusiness())?.find(
    (element: BusinessType) => element.userId === tokenData.id
  );

  return found?.id;
};

//* PURPOSE: FOR POPULATING DATA
//1.fetch all record
export const fetchAllRecord = async (id: String) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString(),
    },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const bId = await businessId();

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loanerId === id && element.loaneeId === bId;
  });

  if (found) {
    return found;
  }
};

// * to populate data
export const fetchLenderById = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/lender/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    }
  );
  const responseJson: APIResponse<LenderType> = await response.json();

  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

//----------------------------------------------------------------

// !Functional component
const LenderCardDetailPage = async ({ params }: { params: { id: string } }) => {
  // * to populate data
  const lender = await fetchLenderById(params.id);
  console.log(lender);

  // * tampilan
  return (
    <>
      {/* Main container */}
      <div className="grid grid-cols-[8fr_5fr] gap-5 justify-center p-6 ">
        {/* left side */}
        <div className="flex flex-col row-span-2 text-black">
          <section className="flex-1 w-full flex flex-col justify-between gap-3 bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden py-2 px-5">
            <div>
              <img
                src="/profile-pic.png"
                className="w-44 rounded-full mx-auto my-10 p-0 border-[4px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              <h1 className="text-2xl font-bold text-center">{lender?.name}</h1>
              <p className="block my-2 font-semibold text-center">email</p>
              <p
                className="mt-5 text-justify"
                style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
              >
                Enquire a loan from {lender?.name}. You must propose a value (in
                USD) and the date that you plan to pay back at the latest. If
                you fail to pay back your oustanding loan before the due date,
                you will lose credibility. In addition, aim to propse values
                inside the preferred range of your lender, othwerwise there will
                be a higher probability that your request will be rejected.
                Rejected requests also count towards your credibility score. Try
                to keep it high, in order to increase your chances of your
                requests getting accepted by your lenders!
              </p>
            </div>

            <div className="container mx-auto px-20">
              <div className="md:flex md:flex-row-reverse items-center py-2 gap-3">
                {/*     
                <button className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#7cd17f] transition-all duration-150 ease-in hover:bg-[#4ca74f]">
                  Negotiate
                </button> */}

                <Link
                  className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#e7e24c] transition-all duration-150 ease-in hover:bg-[#c06363]"
                  href={`/testRecordLender/${lender?.id}`} //lendersid
                >
                  Request Fund
                </Link>
              </div>
            </div>
          </section>
        </div>
        {/* left side */}

        {/* right side */}
        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">lender Information</h3>
              </div>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Min budget</p>
              <p className="text-grey">{lender?.minBudget.toString()}</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Max budget</p>
              <p className="text-grey">{lender?.maxBudget.toString()}</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Min interest</p>
              <p className="text-grey">{lender?.minInterest.toString()}%</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Max interest</p>
              <p className="text-grey">{lender?.maxInterest.toString()}%</p>
            </div>
          </div>
        </div>

        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">Record</h3>
              </div>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">CA$21.28</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">CA$21.28</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">CA$21.28</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">CA$21.28</p>
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
      {/* Main container */}
    </>
  );
};

export default LenderCardDetailPage;
