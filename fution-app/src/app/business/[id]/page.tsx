const BusinessCardsDetailPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-row bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 justify-center ">
        <div className="container flex justify-center">
          <div className="flex px-10 py-10">
            {/* left */}

            <section className="flex-1 w-96 flex flex-col gap-3  bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
              <img
                src="https://www.its.ac.id/it/wp-content/uploads/sites/46/2021/06/blank-profile-picture-973460_1280.png"
                className="w-60 rounded-full  mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
              />

              <h1 className="text-3xl font-bold text-center">Ionel Olariu</h1>
            </section>

            {/* left */}

            {/* right */}
            <div className="flex-1 gap-2 px-4 font-sans bg-grey-lighter flex flex-col   text-black">
              {/* Budget */}
              <div className="bg-white border-t border-b rounded shadow mb-0">
                <div className="border-b px-6">
                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6"
                    >
                      BUDGET
                    </button>
                  </div>
                </div>

                <div className=" flex flex-row px-2">
                  <div className="py-8">
                    <div className="border-r px-5">
                      <div className="text-grey-darker mb-2 ">
                        <span className="text-5xl">21,404</span>
                      </div>
                      <div className="text-sm uppercase text-grey tracking-wide">
                        MINIMUM BUDGET
                      </div>
                    </div>
                  </div>

                  <div className=" px-5 py-8">
                    <div className="text-grey-darker mb-2 ">
                      <span className="text-5xl">21,404</span>
                    </div>
                    <div className="text-sm uppercase text-grey tracking-wide">
                      MINIMUM BUDGET
                    </div>
                  </div>
                </div>
              </div>
              {/* Budget */}
              {/* Budget */}
              <div className="bg-white border-t border-b rounded shadow mb-0">
                <div className="border-b px-6">
                  <div className="flex justify-between -mb-px">
                    <button
                      type="button"
                      className="appearance-none py-4 text-blue-dark border-b border-blue-dark mr-6"
                    >
                      INTEREST
                    </button>
                  </div>
                </div>

                <div className=" flex flex-row px-2">
                  <div className="py-8">
                    <div className="border-r px-5">
                      <div className="text-grey-darker mb-2 ">
                        <span className="text-5xl">21,404</span>
                      </div>
                      <div className="text-sm uppercase text-grey tracking-wide">
                        MINIMUM INTEREST
                      </div>
                    </div>
                  </div>

                  <div className=" px-5 py-8">
                    <div className="text-grey-darker mb-2 ">
                      <span className="text-5xl">21,404</span>
                    </div>
                    <div className="text-sm uppercase text-grey tracking-wide">
                      MAXIMUM INTEREST
                    </div>
                  </div>
                </div>
              </div>
              {/* Budget */}
              {/* Request fund button */}
              <div className="bg-white border-t">
                <div className="container mx-auto px-4 mt-2">
                  <div className="md:flex md:flex-row-reverse items-center py-4">
                    {/* <a
                      href="#"
                      className="text-black font-bold inline-block leading-tight bg-blue border border-black hover:bg-blue-dark px-3 py-2 no-underline rounded"
                    >
                      Request Fund
                    </a> */}

                    <button className="flex-1 border border-[#2235a2] rounded-[4px] py-3 text-white bg-[#2c9a30] transition-all duration-150 ease-in hover:bg-[#000000]">
                      Negotiate
                    </button>
                  </div>
                </div>
              </div>
              {/* Request fund button */}
            </div>
            {/* right */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCardsDetailPage;
