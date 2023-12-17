import Nav from "@/global-components/Nav";
import React from "react";
import { APIResponse, BusinessType, LenderType } from "../api/typedef";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import clientAuth from "@/global-components/ClientAuth";
import { UserRole } from "@prisma/client";
import CardBusiness from "@/global-components/CardBusiness";
import CardLender from "@/global-components/CardLender";
import Card from "@/components/card";

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
  const { role } = (await clientAuth()) as { role: UserRole };

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
        {/* Banner */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          {/* Banner foto */}
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: 'url("excited.png")',
            }}
          >
            <span className="w-full h-full absolute opacity-75 bg-gray-800" />
          </div>

          {/* Banner word */}
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    This is a simple example of a Landing Page you can build
                    using Notus JS. It features multiple CSS components based on
                    the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Banner word */}
        </div>
        {/* Banner */}
        {/* request section */}

        <div className="flex flex-col justify-center content-center text-center bg-gray-200  p-28 text-black">
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
        <div className="flex flex-col justify-center content-center text-center bg-gray-200  pt-4 p-28 text-black">
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
