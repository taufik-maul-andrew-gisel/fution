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
    headers: { Cookie: cookies().toString() }
  });
  const responseJson: APIResponse<LenderType[]> = await response.json();
  
  if(responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

const fetchBusiness = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/business`, {
    headers: { Cookie: cookies().toString() }
  });
  const responseJson: APIResponse<BusinessType[]> = await response.json();
  if(responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
}

// ------------------------------------------------------------------

const Page = async () => {
  const { role } = await clientAuth() as { role: UserRole };

  let businessData: BusinessType[] | undefined, lenderData: LenderType[] | undefined;
  if (role === "BUSINESS") {
    lenderData = await fetchLender();
  } else if (role === "LENDER") {
    businessData = await fetchBusiness();
  } else {
    redirect("/login");
  }

  return (
    <>
      <div>
        <Nav />
        <div
          className="flex justify-center items-center text-white text-center "
          style={{
            backgroundImage: 'url("/banner.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "500px",
            width: "100%",
          }}
        >
          <div className="hover:text-black font-bold">
            {/* Add hover effect to each text element */}
            <h1 className="text-4xl font-bold">Fution</h1>
            <p className="text-2xl hover:text-black">Great People, Great Company</p>
          </div>
        </div>
        
        <h1 className="flex justify-center items-center text-5xl">
          Your Request
        </h1>
        
        <ul>
          { businessData && businessData.map(d => {
            return <CardBusiness data={d} key={d.id} />
          }) }
          { lenderData && lenderData.map(d => {
            return <CardLender data={d} key={d.id} />
          }) }
        </ul>

      </div>
    </>
  );
};

export default Page;
