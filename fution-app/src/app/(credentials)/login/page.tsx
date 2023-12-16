import ClientInputError from "@/components/ClientInputError";
import { login } from "./action";
import Link from "next/link";
import ImagePanel from "../ImagePanel";

const Login = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Pane */}
        <ImagePanel left={true} />

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
              <ClientInputError />
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
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
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
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Log In
                </button>
              </div>
            </form>
            {/* Form */}
            <div className="mt-4 mb-14 text-sm text-gray-600 text-center ">
              <p className="mb-2">or </p>
              <Link href="/register" className="text-black hover:underline">
                No FuTion Account?
              </Link>
            </div>
            
          </div>
        </div>
        {/* Right Pane */}
      </div>
    </>
  );
};

export default Login;
