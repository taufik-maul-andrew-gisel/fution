import ImagePanel from "@/app/(credentials)/ImagePanel";
import { createLender } from "@/app/(credentials)/form/actionLender";
import ClientInputError from "@/global-components/ClientInputError";
import Link from "next/link";

import React from "react";

const FormLender = () => {
  return (
    <>
      <div
        className="flex justify-center  min-h-screen p-0"
        style={{
          // backgroundColor: "darkviolet",
          backgroundImage: 'url("/backgroundimageformlender.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Left Pane */}
        {/* <ImagePanel left={true} /> */}

        {/* Right Pane */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
          <div className="max-w-md w-full p-6">
            <div className="">
              <h1 className="text-3xl font-semibold mb-2 text-black text-center">
                Lender Details
              </h1>
              <h1 className="text-sm font-semibold mb-10 text-gray-500 text-center">
                Enter your budget and interest range
              </h1>
            </div>
            {/* Form */}
            <form className="space-y-4" action={createLender}>
              <ClientInputError />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Lender Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  min="0"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="minBudget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Minimum Budget
                </label>
                <input
                  type="number"
                  id="minBudget"
                  name="minBudget"
                  min="0"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="maxBudget"
                  className="block text-sm font-medium text-gray-700"
                >
                  Maximum Budget
                </label>
                <input
                  type="number"
                  id="maxBudget"
                  name="maxBudget"
                  min="0"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="minInterest"
                  className="block text-sm font-medium text-gray-700"
                >
                  Minimum Interest
                </label>
                <input
                  type="number"
                  id="minInterest"
                  name="minInterest"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="maxInterest"
                  className="block text-sm font-medium text-gray-700"
                >
                  Maximum Interest
                </label>
                <input
                  type="number"
                  id="maxInterest"
                  name="maxInterest"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-black text-white p-2 rounded-lg hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* Form */}
            <div className="mt-4 mb-14 text-sm text-gray-600 text-center ">
              <Link href="/register" className="text-black hover:underline">
                Go back
              </Link>
            </div>
          </div>
        </div>
        {/* Right Pane */}
      </div>
      
    </>
  );
};

export default FormLender;
