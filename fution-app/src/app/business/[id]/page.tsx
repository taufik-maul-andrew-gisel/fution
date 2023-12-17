import { APIResponse, BusinessType } from "@/app/api/typedef";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

const fetchBusinessById = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/business/${id}`,
    {
      headers: { Cookie: cookies().toString() },
    }
  );
  const responseJson: APIResponse<BusinessType> = await response.json();

  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
};

const BusinessCardDetailPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const business = await fetchBusinessById(params.id);
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
                <button className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#7cd17f] transition-all duration-150 ease-in hover:bg-[#4ca74f]">
                  Negotiate
                </button>

                <button className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#e49393] transition-all duration-150 ease-in hover:bg-[#c06363]">
                  Reject
                </button>
                <Link
                  href={"/videocall"}
                  className="px-5 flex-1 border rounded-[10px] py-2 text-black bg-[#9ab3f2] transition-all duration-150 ease-in hover:bg-[#5d78bc]"
                >
                  <div className="flex justify-center">Call</div>
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
