import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import Link from "next/link";
import { redirect } from "next/navigation";
import { readPayloadJose } from "@/utils/jwt";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import LenderModel from "@/models/lender";
import { toDollarFormat } from "@/utils/toDollarFormat";
import User from "@/models/user";

// * to populate data
const fetchBusinessById = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/business/${id}`,
    {
      headers: {
        Cookie: cookies().toString(),
      },
    }
  );
  const responseJson: APIResponse<BusinessType> = await response.json();

  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

//----------------------------------------------------------------

// !Functional component
const BusinessCardDetailPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  // * to populate data
  const business = await fetchBusinessById(params.id);

  let user;
  if (business) user = await User.getById(business.userId);

  // * tampilan
  return (
    <>
      {/* Main container */}

      <div className=" px-20 grid grid-cols-3 gap-5 justify-center p-6 ">
        {/* left side */}
        <div className="flex flex-col col-span-2 row-span-2 text-black">
          <section className="flex-1 w-full flex flex-col justify-between gap-3 bg-white border-t border-b sm:rounded sm:border shadow py-2 px-5">
            <div>
              <img
                src="/profile-pic.png"
                className="w-36 rounded-full mx-auto my-10 p-0 border-[4px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              <h1 className="text-2xl font-bold text-center">
                {business?.name}
              </h1>
              <p className="block my-2 font-semibold text-center">
                {business?.tagline}
              </p>
              <p
                className="mt-5 text-justify"
                style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}
              >
                {business?.description}
              </p>
            </div>
          </section>
        </div>
        {/* left side */}

        {/* right side */}
        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">Business Information</h3>
              </div>
            </div>

            <div className="border-b py-4 pl-6 pr-8 flex justify-between items-center">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">
                {toDollarFormat(Number(business?.monthlyRevenue.toString()))}
              </p>
            </div>

            <div className="border-b py-4 pl-6 pr-8 flex justify-between items-center">
              <p className="font-semibold">Credit score</p>
              <p className="text-grey">{business?.creditScore}</p>
            </div>

            <div className="border-b py-4 pl-6 pr-8 flex justify-between items-center">
              <div className="font-semibold flex gap-2">
                FuTion score
                <div className="w-6 h-6 rounded-full bg-slate-200 text-gray-600 tooltip">
                  <div className="text-center">?</div>
                  <div className="tooltiptext-left text-sm font-normal">
                    This score based on the ratio of rejected requests and
                    on-time paid loans, to the total number of requests a
                    business makes. Each factor has different weightings.
                  </div>
                </div>
              </div>
              <p className="text-grey">{business?.credential}%</p>
            </div>

            <div className="border-b py-4 pl-6 pr-8 flex justify-between items-center">
              <div className="font-semibold flex gap-2">
                Credibility
                <div className="w-6 h-6 rounded-full bg-slate-200 text-gray-600 tooltip">
                  <div className="text-center">?</div>
                  <div className="tooltiptext-left text-sm font-normal">
                    This score is based on the ratio of a business's credit
                    score to its FuTion score.
                  </div>
                </div>
              </div>
              {business && business.credibility >= 80 && (
                <p className="text-emerald-600 font-semibold">
                  {business.credibility}%
                </p>
              )}
              {business &&
                business.credibility >= 65 &&
                business.credibility < 80 && (
                  <p className="text-yellow-600 font-semibold">
                    {business.credibility}%
                  </p>
                )}
              {business &&
                business.credibility >= 0 &&
                business.credibility < 65 && (
                  <p className="text-red-600 font-semibold">
                    {business.credibility}%
                  </p>
                )}
            </div>
          </div>
        </div>

        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">Contacts</h3>
              </div>
            </div>
            <div className="border-b flex justify-between items-center gap-2 py-4 px-6">
              <p className="font-semibold">Owner</p>
              <p className="text-grey">{user?.username}</p>
            </div>
            <div className="border-b flex justify-between items-center gap-2 py-4 px-6">
              <p className="font-semibold">Email</p>
              <p className="text-grey">{business?.email}</p>
            </div>
          </div>
        </div>
        {/* right side */}
      </div>
      {/* Main container */}
    </>
  );
};

export default BusinessCardDetailPage;
