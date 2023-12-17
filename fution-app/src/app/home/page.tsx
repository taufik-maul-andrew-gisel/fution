import Nav from "@/global-components/Nav";
import React, { use } from "react";
import { APIResponse, BusinessType, LenderType } from "../api/typedef";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import clientAuth from "@/global-components/ClientAuth";
import { UserRole } from "@prisma/client";
import CardBusiness from "@/global-components/CardBusiness";
import CardLender from "@/global-components/CardLender";
import Card from "@/components/card";
import { readPayloadJose } from "@/utils/jwt";

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

const fetchBusiness = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/business`, {
    headers: { Cookie: cookies().toString() },
  });
  const responseJson: APIResponse<BusinessType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

// ------------------------------------------------------------------

const Page = async () => {
  // get token and decode to get user role
  const token = cookies().get("token");
    if (!token || token.value.length <= 0) {
        redirect("/login");
    }
    const payload = await readPayloadJose(token.value);
    const role = payload.role as UserRole;
    const username = payload.username as string;

  let businessData: BusinessType[] | undefined,
    lenderData: LenderType[] | undefined;
  if (role === "BUSINESS") {
    lenderData = await fetchLender();
  } else if (role === "LENDER") {
    businessData = await fetchBusiness();
  } else {
    redirect("/login");
  }

  return (
    <>
      <div className="flex flex-col z-0">
        <div>
          <h1>Welcome back, {username}!</h1>
        </div>

        <div className="flex flex-col justify-center content-center text-center p-28 text-black">
          <span className="mb-6 underline leading-6 underline-offset-8 decoration-4 decoration-blue-400">
            <h2 className="text-3xl font-bold">Your Requests</h2>
          </span>
          <div className="relative flex items-center flex-row">
            <div className="w-full h-full overflow-x-scroll scroll whitespace-nowrap">
              {businessData &&
                businessData.map((d) => {
                  return <CardBusiness data={d} key={d.id} />;
                })}
              {lenderData &&
                lenderData.map((d) => {
                  return <CardLender data={d} key={d.id} />;
                })}
            </div>
          </div>
        </div>
        {/* request section */}

        {/* All lenders */}
        <div className="flex flex-col justify-center content-center text-center pt-4 p-28 text-black">
          <span className="mb-6 underline leading-6 underline-offset-8 decoration-4 decoration-blue-400">
            <h2 className="text-3xl font-bold">Featured</h2>
          </span>
          <div className="relative overflow-y-auto">
            {businessData &&
              businessData.map((d) => {
                return <CardBusiness data={d} key={d.id} />;
              })}
            {lenderData &&
              lenderData.map((d) => {
                return <CardLender data={d} key={d.id} />;
              })}
          </div>
        </div>
        {/* All lenders */}
      </div>

      {/* </div> */}
    </>
  );
};

export default Page;
