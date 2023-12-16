const LenderCardDetailPage = () => {
  return (
    <>
      {/* Main container */}
      <div className=" flex flex-1 flex-row bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 justify-center ">
        {/* left side */}
        <div className="flex flex-col">
          {/* cards */}
          <section className="flex-1 w-96 flex flex-col gap-3  bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
            <img
              src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png"
              className="w-60 rounded-full  mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
            />
            <h1 className="text-3xl font-bold text-center">Ionel Olariu</h1>
            <p className="block my-1 text-center">NEW YORK</p>
            <p className="mt-5 text-center font-semibold">
              User Interface design and front
            </p>
          </section>
          {/* cards */}
        </div>
        {/* left side */}

        {/* right side */}
        <div className="flex flex-col gap-3 flex-1 text-black container mx-auto px-4 mt-2 border-t">
          {/* 1st table */}
          <div className="flex-1 mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col text-black">
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
          <div className="w-full mb-6 lg:mb-0 lg:w-1/2 px-4 flex flex-col text-black">
            <div className="flex-grow flex flex-col bg-white border-t border-b sm:rounded sm:border shadow overflow-hidden">
              <div className="border-b">
                <div className="flex justify-between px-6 -mb-px">
                  <h3 className="text-blue-dark py-4 font-normal text-lg">
                    LENDING INFORMATION
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
            </div>
          </div>
          {/* 2nd table */}
          {/* Request fund button */}
          <div className="bg-white border-t ">
            <div className="container mx-auto px-4 mt-2">
              <div className="md:flex md:flex-row-reverse items-center py-4">
                <button className="flex-1 border border-[#2235a2] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#192077]">
                  Accept Request
                </button>
                <button className="flex-1 border border-[#2235a2] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#192077]">
                  Video Call
                </button>
              </div>
            </div>
          </div>
          {/* Request fund button */}
        </div>
        {/* right side */}
      </div>
      {/* Main container */}
    </>
  );
};

export default LenderCardDetailPage;
