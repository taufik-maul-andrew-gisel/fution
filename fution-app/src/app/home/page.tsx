import Nav from "@/global-components/Nav";
import React from "react";
import { APIResponse, BusinessType, LenderType } from "../api/typedef";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import clientAuth from "@/global-components/ClientAuth";
import { UserRole } from "@prisma/client";
import CardBusiness from "@/global-components/CardBusiness";
import CardLender from "@/global-components/CardLender";

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
      {/* <div> */}
      <Nav />
      {/* <Banner /> */}
      {/* <div className="my-8 mx-8"> /}
      {/ Updated the styling here /}
      {/ <h1 className="flex justify-center items-center text-5xl">business</h1> /}
      {/ <Card /> /}
      {/ </div> /}
      <div className="my-8 mx-8">
        {/ Updated the styling here */}
      {/* <h1 className="flex justify-center items-center text-5xl font-sans font-bold">
          Your Request
        </h1> */}
      {/* <Card />
        <h1 className="flex justify-center items-center text-5xl">Lenders</h1>
        <Card /> */}
      {/* <h1 className="flex justify-center items-center text-3xl hover:text-blue-800">
          <button>See all..</button>
        </h1> */}

      <div className="flex flex-col">
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
          <span className="mb-6 underline leading-8 underline-offset-8	decoration-8 decoration-blue-400">
            <h2 className="text-4xl font-bold">Your Request</h2>
          </span>
          <div className="relative flex items-center flex-row">
            <div
              id="slider"
              className="w-full h-full overflow-x-scroll scroll whitespace-nowrap"
            >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
        {/* request section */}

        {/* All lenders */}
        <div className="flex flex-col justify-center content-center text-center bg-gray-200  pt-4 p-28 text-black">
          <span className="mb-6 underline leading-8 underline-offset-8	decoration-8 decoration-blue-400">
            <h2 className="text-4xl font-bold">Lenders Recommendation</h2>
          </span>
          <div className="relative overflow-y-auto">
            <Card />
            <Card />
          </div>
        </div>
        {/* All lenders */}
      </div>

      {/* </div> */}
    </>
  );
};

export default Page;
