import {
  APIResponse,
  BusinessType,
  LenderType,
  RecordType,
} from "@/app/api/typedef";
import Link from "next/link";
import { redirect } from "next/navigation";
import { readPayloadJose } from "@/utils/jwt";
import ClientInputError from "@/global-components/ClientInputError";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

// ------------------------------------------------------------

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/lender}`, {
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
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

//* PURPOSE: FOR POPULATING DATA
//1.fetch all record
export const fetchAllRecord = async (id: String) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/record`);
  const responseJson: APIResponse<RecordType[]> = await response.json();
  if (responseJson.status === 401) {
    redirect("/login");
  }

  //2.find one record based on loaneeId and loanerId
  const lId = await lenderId();
  // console.log(lId, "lender id");

  const found = responseJson.data?.find((element: RecordType) => {
    return element.loaneeId === id && element.loanerId === lId;
  });

  if (found) {
    return found;
  }
};

// * to populate data
const fetchBusinessById = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/business/${id}`
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

  // * if lender click reject button
  const rejectButtonHandler = async () => {
    if ((await fetchAllRecord) === undefined) {
      redirect(
        `/business/${params.id}?error=${business?.name} " has never requested. Therefore, rejected button will not work"`
      );
    } else {
      const recordId = await fetchAllRecord(params.id);
      const response = await fetch(
        `http://localhost:3000/api/record/${recordId?.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({ status: "REJECTED" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const resJson = await response.json();
      if (!response.ok) {
        redirect(`/record/${params.id}?error=${resJson.error}`);
      }
      revalidatePath(`/business/${params.id}`);
      redirect(`/business/${params.id}`);
    }
  };

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

            <div className="container mx-auto px-20">
              <div className="md:flex md:flex-row-reverse items-center py-2 gap-3">
                <Link
                  className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#7cd17f] transition-all duration-150 ease-in hover:bg-[#c06363]"
                  href={`/records/lender/${params.id}`}
                >
                  Negotiate
                </Link>

                <form action={rejectButtonHandler}>
                  <button className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#e49393] transition-all duration-150 ease-in hover:bg-[#c06363]">
                    Reject
                  </button>
                </form>

                <Link
                  href={"/videocall"}
                  className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#9ab3f2] transition-all duration-150 ease-in hover:bg-[#5d78bc]"
                >
                  <div className="flex justify-center">Call</div>
                </Link>
              </div>
              <ClientInputError />
            </div>
          </section>
        </div>
        {/* left side */}

        {/* right side */}
        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">Business Information</h3>
              </div>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Monthly revenue</p>
              <p className="text-grey">{business?.monthlyRevenue.toString()}</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Credit score</p>
              <p className="text-grey">{business?.creditScore}</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Credibility</p>
              <p className="text-grey">{business?.credential}%</p>
            </div>
            <div className="border-b grid grid-cols-2 py-4 px-6">
              <p className="font-semibold">Status</p>
              <p className="text-grey">{business?.status}</p>
            </div>
          </div>
        </div>

        <div className="text-black">
          <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
            <div className="border-b">
              <div className="flex justify-between px-6 -mb-px">
                <h3 className="py-6 font-bold text-xl">Business Information</h3>
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

export default BusinessCardDetailPage;
