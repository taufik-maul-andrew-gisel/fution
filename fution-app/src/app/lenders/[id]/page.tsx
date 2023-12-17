import { APIResponse, LenderType } from "@/app/api/typedef";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const fetchLenderById = async (id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ledner/${id}`, {
    headers: { Cookie: cookies().toString() },
  });
  const responseJson: APIResponse<LenderType> = await response.json();

  if (responseJson.status === 401) {
    redirect("/login");
  }
  return responseJson.data;
}



const LenderCardsDetailPage = ({ params }: { params: { id: string } }) => {
  const lender = fetchLenderById(params.id);

  return (
    <>
      return (
    <>
      {/* Main container */}
      <div className="grid grid-cols-[5fr_7fr] gap-5 justify-center p-6">
        {/* left side */}
        <div className="flex flex-col row-span-2">
          {/* cards */}
          <section className="flex-1 w-full flex flex-col justify-between gap-3 bg-white border-t border-b sm:rounded sm:border shadow backdrop-blur-sm overflow-hidden py-2 px-5">
            <div>
              <img
                src="/profile-pic.png"
                className="w-44 rounded-full  mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />
              <h1 className="text-3xl font-bold text-center">"business?.name"</h1>
              <p className="block my-1 font-semibold text-center">"business?.tagline"</p>
              <p className="mt-3 text-justify" style={{ fontSize: "0.95rem", lineHeight: "1.4rem" }}>
                business?.description
              </p>
            </div>

            <div className="container mx-auto px-4 mt-2">
              <div className="md:flex md:flex-row-reverse items-center py-2 gap-3">
                <button className="flex-1 border border-[#2235a2] rounded-[4px] py-3 text-white bg-[#2c9a30] transition-all duration-150 ease-in hover:bg-[#000000]">
                  Negotiate
                </button>

                <button className="flex-1 border border-[#a22222] rounded-[4px] py-3 text-white bg-[#ff3a3a] transition-all duration-150 ease-in hover:bg-[#000000]">
                  Reject
                </button>
              </div>
            </div>
          </section>
          {/* cards */}
        </div>
        {/* left side */}

        {/* right side */}
        {/* <div className="flex flex-col gap-3 flex-1 text-black container mx-auto px-4 mt-2 border-t"> */}
          {/* 1st table */}
          <div className="text-black">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b">
                <div className="flex justify-between px-6 -mb-px">
                  <h3 className="text-blue-dark py-4 font-normal text-lg">
                    Business Information
                  </h3>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">Monthly revenue</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">CA$21.28</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">CREDIT SCORE</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">200</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">CREDENTIAL</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">100</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">STATUS</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="bg-yellow-200 border-spacing-1 text-yellow-200">
                    ---
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 1st table */}

          {/* 2nd table */}
          <div className="text-black">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b">
                <div className="flex justify-between px-6 -mb-px">
                  <h3 className="text-blue-dark py-4 font-normal text-lg">
                    LOAN INFORMATION
                  </h3>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">AMOUNT</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">$5000</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">INTEREST</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">5%</div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">DUE DATE</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">
                      FRIDAY, 20 SEPTEMBER 2024
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-grow flex px-6 py-6 text-grey-darker items-center border-b -mx-4">
                <div className="w-2/5 xl:w-1/4 px-4 flex items-center">
                  <p className="text-lg font-bold">STATUS</p>
                </div>
                <div className="flex w-3/5 md:w/12">
                  <div className="w-1/2 px-4">
                    <div className="text-right text-grey">
                      PENDING (WILL CHANGE)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* right side */}
      </div>
      {/* Main container */}
    </>
  );
    </>
  );
};

export default LenderCardsDetailPage;

