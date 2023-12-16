import Nav from "@/components/Nav";
import Banner from "@/components/bannerHome";
import Card from "@/components/card";
import { Business, Lender } from "@prisma/client";
import React from "react";
import { APIResponse } from "../api/typedef";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const fetchLender = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lender`, {
    headers: { Cookie: cookies().toString() }
  });
  const responseJson: APIResponse<Lender[]> = await response.json();
  console.log(responseJson);
  
  if(responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

const fetchBusiness = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/business`, {
    headers: { Cookie: cookies().toString() }
  });
  const responseJson: APIResponse<Business[]> = await response.json();
  if(responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
}


const Page = async () => {
  console.log(await fetchLender());
  return (
    <>
      <div>
        <Nav />
        <Banner />
        {/* <div className="my-8 mx-8"> /}
      {/ Updated the styling here /}
      {/ <h1 className="flex justify-center items-center text-5xl">business</h1> /}
      {/ <Card /> /}
      {/ </div> /}
      <div className="my-8 mx-8">
        {/ Updated the styling here */}
        <h1 className="flex justify-center items-center text-5xl">
          Your Request
        </h1>
        <Card />
        <h1 className="flex justify-center items-center text-5xl">Lenders</h1>
        <Card />
        <h1 className="flex justify-center items-center text-3xl hover:text-blue-800">
          <button>See all..</button>
        </h1>
      </div>
    </>
  );
};

export default Page;
