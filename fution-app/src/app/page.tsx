import Nav from "@/global-components/Nav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <section className="box-border m-0 p-0 font-sans"> */}
      {/* FUTION'S NAVBAR SECTION */}

      <div className="m-0 p-0 bg-white">
        {/* FUTION'S NAVBAR SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* BANNER */}
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          {/* Banner foto */}
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: 'url("excited.png")',
            }}
          >
            <span className="w-full h-full absolute opacity-75 bg-slate-200" />
          </div>

          {/* Banner word */}
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-black font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-black">
                    FuTion: Where ambitions are financed and dreams realized.
                    Join the leading platform connecting lenders to growth
                    opportunities and borrowers to seamless funding solutions.
                    Invest, borrow, and succeed with FuTion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Banner word */}
        </div>
        {/* END OF BANNER */}

        {/* ------------------------------------------------------------------------------- */}
        {/* FUTION'S MATCHING PROCESS SECTION*/}
        {/* main container div */}
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full">
          {/* Text Section */}
          <div className="flex flex-col text-black items-center md:items-start md:w-1/2 px-10 py-10">
            <h2 className="landing-page-h2 md:text-left">
              FuTion's Matching Process
            </h2>
            <div className="space-y-6">
              {/* Repeat this div for each step */}
              <div className="flex flex-col items-center md:items-start">
                <div className="font-bold mb-2">STEP 1</div>
                <p>
                  Apply fast. Fill out our simple application in minutes with no
                  impact to your credit.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="font-bold mb-2">STEP 1</div>
                <p>
                  Apply fast. Fill out our simple application in minutes with no
                  impact to your credit.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="font-bold mb-2">STEP 1</div>
                <p>
                  Apply fast. Fill out our simple application in minutes with no
                  impact to your credit.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <div className="font-bold mb-2">STEP 1</div>
                <p>
                  Apply fast. Fill out our simple application in minutes with no
                  impact to your credit.
                </p>
              </div>
              {/* ... other steps */}
            </div>
          </div>
          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center items-center px-32 py-10">
            <Image
              src="/ExampleRegistration.png"
              alt="Example Registration"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              // layout="intrinsic" // or 'responsive' based on your needs
            />
          </div>
        </div>
        {/* main container div */}
        {/* FUTION'S MATCHING PROCESS SECTION*/}
        {/* ------------------------------------------------------------------------------- */}
        {/* CARDS SECTION */}
        <div className="my-10 font-[sans-serif] text-[#333]">
          <div className="mb- text-center max-w-3xl mx-auto mb-16">
            <h2 className="landing-page-h2">Testimonials</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-12 [&>*]:pb-4 [&>*]:border-b-[1px]">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex">
                <img src={"/profile1.jpg"} className="w-13 h-11 rounded-full" />
                <div className="ml-4 text-left">
                  <p className="text-sm font-extrabold">Shellin</p>
                  <p className="text-xs text-gray-400">
                    As Lender, Founder Of Trust in Zeus
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-sm leading-relaxed">
                  Funding borrowers on FuTion is very simple and profitable
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex">
                <img src={"/profile1.jpg"} className="w-13 h-11 rounded-full" />
                <div className="ml-4 text-left">
                  <p className="text-sm font-extrabold">Maul</p>
                  <p className="text-xs text-gray-400">
                    As Lender, Founder Of PT. MaulPinjol
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-sm leading-relaxed">
                  Being a financier not only makes a profit, but I help people
                  to develop their business
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex">
                <img src={"/profile1.jpg"} className="w-13 h-11 rounded-full" />
                <div className="ml-4 text-left">
                  <p className="text-sm font-extrabold">Taufik</p>
                  <p className="text-xs text-gray-400">
                    As Borrower, Founder Of Asyique Pty Ltd.
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <p className="text-sm leading-relaxed">
                  With FuSion, it makes it very easy for you to borrow money
                  from lenders to advance your business
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* CARDS SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* ROLE SECTION */}
        {/* main div */}
        <div className="bg-gray-100 py-10">
          <div className="px-56">
            <div className="text-center mb-10">
              <h2 className="landing-page-h2">MARKETPLACE FuTion's</h2>
            </div>
            <div className="flex justify-center">
              {/* <!-- Card 1: PEMODAL --> */}
              <div className="px-4 flex flex-col justify-between items-center w-[300px]">
                <div className="flex flex-col justify-between items-center h-full p-6 bg-white shadow rounded-lg">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/loanMoney.png"
                      alt="Loan Money Icon"
                      width="100"
                      height="100"
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Lender
                    </h3>
                    <p className="text-gray-600">
                      Be part of empowering SMEs by becoming a Lender at FuTion
                    </p>
                  </div>
                  <button className="rounded mt-4 px-6 py-3 bg-sky-600 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:bg-sky-700 hover:shadow-lg">
                    Register As Lender
                  </button>
                </div>
              </div>

              {/* <!-- Card 3: PEMINJAM --> */}
              <div className="px-4 flex flex-col justify-between items-center w-[300px]">
                <div className="flex flex-col justify-between items-center h-full p-6 bg-white shadow rounded-lg">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/loanMoney.png"
                      alt="Loan Money Icon"
                      width="100"
                      height="100"
                      className="mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      Bussiness
                    </h3>
                    <p className="text-gray-600">Get Money</p>
                  </div>
                  <button className="rounded mt-4 px-6 py-3 bg-sky-600 text-white font-semibold shadow-md transition duration-300 ease-in-out hover:bg-sky-700 hover:shadow-lg">
                    Register As Bussiness
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER SECTION */}
      {/* </body> */}
    </>
  );
}
