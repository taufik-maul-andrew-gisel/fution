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
        <div
          id="banner"
          className="relative py-20 flex content-center items-center justify-center"
        >
          {/* Banner foto */}
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover blur-[2px]"
            style={{
              backgroundImage: 'url("excited.png")',
            }}
          >
            <span className="w-full h-full absolute opacity-75 bg-slate-100" />
          </div>

          {/* Banner word */}
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="lg:w-6/12 pt-4 ml-auto mr-auto text-center">
                <div className="pr-12 flex flex-col justify-between">
                  <div>
                    <h1 className="text-black font-semibold text-5xl">
                      Your story starts with us.
                    </h1>
                    <p className="mt-5 mb-4 text-lg text-black font-semibold">
                      FuTion: your business funding solution. Where ambitions are financed and dreams realized.
                      Invest, borrow, and succeed with FuTion.
                    </p>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link
                      href="/register"
                      className="rounded-lg mt-10 px-9 py-4 bg-sky-200 text-black text-lg font-semibold shadow-md transition duration-300 ease-in-out hover:bg-sky-300 hover:shadow-lg w-fit"
                    >
                      Get Started
                    </Link>
                  </div>
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
        <section id="matchingprocess">
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
                    Register as a borrower or lender. Fill out our simple forms and you can start requesting or lending funds in no time.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="font-bold mb-2">STEP 2</div>
                  <p>
                    Negotiate with your potential partners about the loaned funds, the interest and the pay-back due date.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="font-bold mb-2">STEP 3</div>
                  <p>
                    Utilize our special features such as real-time video call to smoothen out the negotation process.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="font-bold mb-2">STEP 4</div>
                  <p>
                    For businesses, aim to keep your rejections and number of late payments low, as they affect your credibility. Lenders are more likely to help you if you are more credible!
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
                width={600} // Adjust width as needed
                height={300} // Adjust height as needed
                // layout="intrinsic" // or 'responsive' based on your needs
                className="border-[1px] rounded-lg"
                style={{ boxShadow: "1px 1px 10px 0px gray" }}
              />
            </div>
          </div>
        </section>

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
            <div className="grid grid-cols-2 gap-5">
              {/* <!-- Card 1: PEMODAL --> */}
              <div className="px-4 flex flex-col justify-between items-center bg-white rounded-lg p-6 shadow w-[100%]">
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
                  Contribute towards small businesses
                </p>
              </div>

              {/* <!-- Card 3: PEMINJAM --> */}
              <div className="px-4 flex flex-col justify-between items-center bg-white rounded-lg p-6 shadow w-[100%]">
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
                <p className="text-gray-600">
                  Kick-start your business journey
                </p>
              </div>

              <div className="col-span-2 flex justify-center">
                <Link
                  href="/register"
                  className="rounded mt-4 px-6 py-3 bg-sky-200 text-black font-semibold shadow-md transition duration-300 ease-in-out hover:bg-sky-300 hover:shadow-lg w-fit"
                >
                  Register
                </Link>
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
