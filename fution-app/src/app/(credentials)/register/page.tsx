import ClientInputError from "@/global-components/ClientInputError";
import { createAccount } from "./action";
import Link from "next/link";
import ImagePanel from "../ImagePanel";

const Register = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Panel */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <div className="">
              <h1 className="text-3xl font-semibold mb-2 text-black text-center">
                Sign Up
              </h1>
              <h1 className="text-sm font-semibold mb-10 text-gray-500 text-center">
                Create your FuTion account{" "}
              </h1>
            </div>
            {/* Form */}
            <form action={createAccount} className="space-y-4">
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
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                >
                  <option className="hidden disabled">Select Your Role</option>
                  <option value="LENDER">Lender</option>
                  <option value="BUSINESS">Business</option>
                </select>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Sign Up
                </button>
              </div>
            </form>
            {/* Form */}
            <div className="mt-4 text-sm text-gray-600 text-center ">
              <p className="mb-2">or </p>
              <Link href="/login" className="text-black hover:underline">
                Already have a FuTion account?
              </Link>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <ImagePanel left={false} />
      </div>
    </>
  );
};

export default Register;
