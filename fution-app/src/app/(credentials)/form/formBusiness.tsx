import React from "react";
import Link from "next/link";
import ImagePanel from "@/app/(credentials)/ImagePanel";
import { createBusiness } from "@/app/(credentials)/form/actionBusiness";
import ClientInputError from "@/global-components/ClientInputError";

const FormBusiness = () => {
  return (
    <>
      <div
        className="flex justify-center"
        style={{
          // backgroundColor: "darkviolet",
          backgroundImage: 'url("/backgroundimageform.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Left Pane */}
        {/* <ImagePanel left={true} /> */}

        {/* Right Pane */}
        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center relative z-10">
          <div className="max-w-md w-full p-6">
            <div className="">
              <h1 className="text-3xl font-semibold mb-2 text-black text-center">
                Business Details
              </h1>
              <h1 className="text-sm font-semibold mb-10 text-gray-500 text-center">
                Enter details about your business
              </h1>
            </div>
            {/* Form */}
            <form className="space-y-4" action={createBusiness}>
              <ClientInputError />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="monthlyRevenue"
                  className="block text-sm font-medium text-gray-700"
                >
                  Monthly Revenue
                </label>
                <input
                  type="number"
                  id="monthlyRevenue"
                  name="monthlyRevenue"
                  min="0"
                  step="0.01"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="tagline"
                  className="block text-sm font-medium text-gray-700"
                >
                  Business Tagline
                </label>
                <input
                  type="text"
                  id="tagline"
                  name="tagline"
                  className="mt-1 p-2 w-full border rounded-lg focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 text-black"
                />
              </div>

              <div>
                <label
                  htmlFor="creditScore"
                  className="block text-sm font-medium text-gray-700"
                >
                  Credit Score
                </label>
                <input
                  type="number"
                  id="creditScore"
                  name="creditScore"
                  min="0"
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
            {/* End of Form */}
          </div>
        </div>
        {/* End of Right Pane */}
      </div>
    </>
  );
};

export default FormBusiness;
