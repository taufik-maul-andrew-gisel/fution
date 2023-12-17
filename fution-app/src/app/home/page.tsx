import Nav from "@/global-components/Nav";
import React, { use } from "react";
import { APIResponse, BusinessType, LenderType, RecordType } from "../api/typedef";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { UserRole } from "@prisma/client";
import CardBusiness from "@/global-components/CardBusiness";
import CardLender from "@/global-components/CardLender";
import { readPayloadJose } from "@/utils/jwt";
import CardRecord from "@/global-components/CardRecord";

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

const fetchRecord = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`, {
    headers: { Cookie: cookies().toString() },
  });
  const responseJson: APIResponse<RecordType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
}

const StatusColour = ({ colour }: { colour: string }) => {
  switch (colour) {
    case "yellow":
      return <div className="rounded-lg bg-yellow-500 h-5 w-5 inline-block"></div>
    case "green":
      return <div className="rounded-lg bg-green-500 h-5 w-5 inline-block"></div>
    case "red":
      return <div className="rounded-lg bg-red-500 h-5 w-5 inline-block"></div>      
    default:
      break;
  }
}

// ------------------------------------------------------------------

const Page = async () => {
  // get token and decode to get user role
  const token = cookies().get("token");
  if (!token || token.value.length <= 0) {
      redirect("/login");
  }
  const payload = await readPayloadJose(token.value);
  const role = payload.role as UserRole;
  const userId = payload.id as string;
  
  // get that user's business (or lender)
  let business: BusinessType | undefined, 
    lender: LenderType | undefined,
    records: RecordType[] | undefined,
    recordBusiness: string[] | undefined,
    recordLender: string[] | undefined;
    
  // get the remaining shit
  let businessData = await fetchBusiness(), 
    lenderData = await fetchLender(),
    recordData = await fetchRecord();
  
  if (role === "BUSINESS" && businessData) {
    business = businessData.find(data => {
      return data.userId === userId
    })
    records = recordData?.filter(data => {
      return data.loaneeId === business?.id
    })
    recordLender = records?.map(record => {
      let name = "";
      lenderData?.forEach(lender => {
        if (lender.id === record.loanerId) name = lender.name;
      })
      return name;
    })
  } else if (role === "LENDER" && lenderData) {
    lender = lenderData.find(data => {
      return data.userId === userId
    })
    records = recordData?.filter(data => {
      return data.loanerId === lender?.id
    })
    recordBusiness = records?.map(record => {
      let name = "";
      businessData?.forEach(business => {
        if (business.id === record.loaneeId) name = business.name;
      })
      return name;
    })
  }
  

  return (
    <>
    <div className="p-6">
      <div className="grid grid-cols-3 z-0 gap-4">
        <div className="text-2xl font-bold ml-1">
          { business && <h2>Your Business</h2> }
          { lender && <h2>Your Lender</h2> }
        </div>

        <div className="text-2xl font-bold col-span-2 ml-1">
          <h2>Your Requests</h2>
        </div>

        <div className="flex flex-col text-black">
          <section className="flex-1 w-full flex flex-col gap-3 bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden py-2 px-5">
            <div>
              <img
                src="/profile-pic.png"
                className="w-28 rounded-full mx-auto my-10 p-0 border-[3px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              { business && <h1 className="text-2xl font-bold text-center">{business.name}</h1> }
              { lender && <h1 className="text-2xl font-bold text-center">{lender.name}</h1> }
              { business && <p className="block my-2 font-semibold text-center">{business.tagline}</p> }
            </div>

            <ul className="container mx-auto px-20" style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}>
              { business && (<>
                  <li className="flex justify-between">Credibility: <span>{business.credibility}%</span></li>
                  <li className="flex justify-between">Status: <StatusColour colour={business.status}/></li>
              </>) }
            </ul>
            { lender && (<>
                <p className="text-justify">A visionary investor eagerly empowers small businesses with strategic loans, fostering growth and innovation. Passionate about supporting entrepreneurs, they bring financial expertise to propel promising ventures toward success.</p>
            </>) }
          </section>
        </div>



        <div className="col-span-2 text-center text-black bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden py-2 px-10 grid grid-cols-3 gap-2">
              { records && records.map((record, i) => {
                if (recordLender) {
                  return <CardRecord key={i} data={{ record, name: recordLender[i] }} />
                }
                else if (recordBusiness) {
                  return <CardRecord key={i} data={{ record, name: recordBusiness[i] }} />
                }
              }) }
        </div>
        
        <div className="flex flex-col justify-center content-center text-center pt-4 p-28 text-black">
          <span className="mb-6 underline leading-6 underline-offset-8 decoration-4 decoration-blue-400">
            <h2 className="text-3xl font-bold">Featured</h2>
          </span>
          <div className="relative overflow-y-auto">
            { lender && businessData &&
              businessData.map((d) => {
                return <CardBusiness data={d} key={d.id} />;
              })
            }
            { business && lenderData &&
              lenderData.map((d) => {
                return <CardLender data={d} key={d.id} />;
              })
            }
          </div>
        </div>
        
      </div>

    </div>
    </>
  );
};

export default Page;
