import { login } from "./action";

const Login = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Left Pane */}
        <div className="w-full bg-blue-700 lg:w-1/2 flex items-center justify-center">
          <img
            src="https://media.istockphoto.com/id/1429991322/photo/carefree-young-woman-playing-music-using-a-smartphone-and-earbuds.jpg?s=612x612&w=0&k=20&c=oI58A61Q7ndCtR53oVod_gQN7MsetK8Srn2PYUnh0rw="
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        {/* Left Pane */}

        {/* Right Pane */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <div className="">
              <h1 className="text-3xl font-semibold mb-2 text-black text-center">
                Log In
              </h1>
              <h1 className="text-sm font-semibold mb-10 text-gray-500 text-center">
                Please log in using your FuTion account{" "}
              </h1>
            </div>
            {/* Form */}
            <form action={login} method="POST" className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>
              <div className="mt-4 text-sm text-gray-600 text-center">
                <p>Forgot Password?</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Log In
                </button>
              </div>
            </form>
            {/* Form */}
            <div className="mt-2 mb-14 text-sm text-gray-600 text-center ">
              <p>or </p>
              <a href="#" className="text-black hover:underline">
                No FuTion Account?
              </a>
            </div>
            <div className="my-12 flex flex-col lg:flex-row items-center justify-between h-10 gap-y-5">
              {/*  */}
              <div className="mx-3 break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white">
                <div className="flex flex-row items-center space-x-3">
                  <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
                      <line x1={3} y1={22} x2={21} y2={22} />
                    </svg>
                  </div>
                  <span className="text-base font-medium">
                    Register as a Lender
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* */}

              {/*  */}
              <div className="break-inside relative overflow-hidden flex flex-col justify-between space-y-3 text-sm rounded-xl max-w-[23rem] p-4 mb-4 bg-white text-black dark:bg-slate-800 dark:text-white">
                <div className="flex flex-row items-center space-x-3">
                  <div className="flex flex-none items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
                      <line x1={3} y1={22} x2={21} y2={22} />
                    </svg>
                  </div>
                  <span className="text-base font-medium">
                    Register as a Borrower
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="flex items-center justify-center text-xs font-medium rounded-full px-4 py-1 space-x-1 border-2 border-black bg-white hover:bg-black hover:text-white text-black dark:bg-slate-800 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* */}
            </div>
          </div>
        </div>
        {/* Right Pane */}
      </div>
    </>
  );
};

export default Login;
