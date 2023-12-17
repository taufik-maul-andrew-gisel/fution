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
        <section>
          <div
            className="w-full bg-cover bg-center"
            style={{
              height: "40rem",
              backgroundImage:
                "url('https://c4.wallpaperflare.com/wallpaper/129/22/327/hands-greeting-handshake-wallpaper-preview.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50 backdrop-blur-md">
              <div className="text-center">
                <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
                  Welcome To{" "}
                  <span className="underline text-blue-400">FuTion</span>
                </h1>
                <p className="text-white mt-4 text-lg md:text-xl">
                  "FuTion: Where ambitions are financed and dreams realized.
                  Join the leading platform connecting lenders to growth
                  opportunities and borrowers to seamless funding solutions.
                  Invest, borrow, and succeed with FuTion."
                </p>
                <div className="flex items-center justify-center h-full w-full">
                  <Link href="/home" className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold uppercase rounded shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <img
                      src="/logo1.png"
                      alt="Logo"
                      className="inline-block h-6 w-6 mr-2"
                    />
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* END OF BANNER */}

        {/* ------------------------------------------------------------------------------- */}
        {/* FUTION'S MATCHING PROCESS SECTION*/}
        {/* main container div */}
        <div className="flex flex-col md:flex-row bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100 w-full">
          {/* Text Section */}
          <div className="flex flex-col text-black items-center md:items-start md:w-1/2 px-10 py-10">
            <h2 className="text-4xl font-bold text-center md:text-left mb-10">
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
            <h2 className="text-3xl font-extrabold">Testimonials</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex">
                <img src={"/profile1.jpg"} className="w-13 h-11 rounded-full" />
                <div className="ml-4 text-left">
                  <p className="text-sm font-extrabold">Sellin</p>
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
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800">
                MARKETPLACE FuTion's
              </h2>
              <p className="mt-2 text-gray-600">
                Saatnya mengembangkan usaha yang produktif
              </p>
            </div>
            <div className="flex flex-wrap -mx-4 text-center items-stretch">
              {/* <!-- Card 1: PEMODAL --> */}
              <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                <div className="flex flex-col h-full px-6 py-8 bg-white shadow rounded">
                  <img
                    src="/loanMoney.png"
                    alt="Loan Money Icon"
                    style={{ height: "200px", width: "200px" }} // Adjusted logo size
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Lenders
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    Be part of empowering SMEs by becoming a Lender at FuTion
                  </p>
                  <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold uppercase rounded shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    Register As Lenders
                  </button>
                </div>
              </div>

              {/* <!-- Card 2: DANAMAS --> */}
              <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                <div className="flex flex-col h-full px-6 py-8 bg-white shadow rounded">
                  <img
                    src="/logo.png"
                    alt="Fution"
                    style={{ height: "200px", width: "200px" }} // Adjusted logo size
                    className="mx-auto mb-4"
                  />
                  <p className="text-gray-600 flex-grow">
                    Menyeleksi akun peminjam dan pemodal
                  </p>
                  <a
                    href="#"
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold uppercase rounded shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                  >
                    Learn more
                  </a>
                </div>
              </div>

              {/* <!-- Card 3: PEMINJAM --> */}
              <div className="w-full md:w-1/3 px-4">
                <div className="flex flex-col h-full px-6 py-8 bg-white shadow rounded">
                  <img
                    src="/loanMoney.png"
                    alt="Loan Money Icon"
                    style={{ height: "200px", width: "200px" }} // Adjusted logo size
                    className="mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Bussiness
                  </h3>
                  <p className="text-gray-600 flex-grow">Get Money</p>
                  <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold uppercase rounded shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                    Register As Bussiness
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* main div */}
        {/* ROLE SECTION */}
        {/* ------------------------------------------------------------------------------- */}
        {/* FOOTER SECTION */}
        {/* main div */}
        <div className="bg-sky-950 flex flex-row justify-center content-center  p-14 gap-12">
          {/* 1st div */}
          <div className="flex flex-col text-left pl-8">
            <h2 className="font-semibold text-lg text-blue-300">FuTion</h2>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              Home
            </p>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              Sitemap
            </p>
            <p className="transition-colors duration-300 text-white dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
              FAQ
            </p>
          </div>
          {/* 1st div */}
          {/* 2nd div */}
          <div className="flex flex-col text-left px-8 py-0 ">
            {/* 2.1 div */}
            <h2 className="font-semibold text-lg text-blue-300">CONTACT US</h2>
            <div className="gap-3">
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-6 w-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <p>021-3456789</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <p>6544334890</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <p>654567890</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-6 w-6 text-white"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <polyline points="3 9 12 15 21 9 12 3 3 9" />{" "}
                  <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />{" "}
                  <line x1="3" y1="19" x2="9" y2="13" />{" "}
                  <line x1="15" y1="13" x2="21" y2="19" />
                </svg>
                <p>cs@fution.co.id</p>
              </div>
              <div className="icons-text flex flex-row gap-3">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="telegram-1"
                    d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
                  />
                </svg>
                <p>csFuTion</p>
              </div>
            </div>
            {/* 2.1 div */}
          </div>
          {/* 2nd div */}
          {/* 3rd div */}
          <div className="flex flex-col text-left px-8s py-0">
            <h2 className="font-semibold text-lg text-blue-300">
              SOCIAL MEDIA
            </h2>

            <div className="social-media-icon">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                  width="30"
                  height="30"
                  alt="fb"
                />
                <img
                  src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                  width="30"
                  height="30"
                  alt="tw"
                />
                <img
                  src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                  width="30"
                  height="30"
                  alt="inst"
                />
                <img
                  src="https://www.svgrepo.com/show/28145/linkedin.svg"
                  width="30"
                  height="30"
                  alt="in"
                />
              </div>
            </div>
          </div>
          {/* 3rd div */}
          {/* 4th div */}
          <div className="flex flex-col text-left">
            <h2 className="font-semibold text-lg text-blue-300">SECURITY</h2>
            <img src="security.png" alt="" />
          </div>
          {/* 4th div */}
        </div>
      </div>
      {/* FOOTER SECTION */}
      {/* </section> */}
    </>
  );
}
