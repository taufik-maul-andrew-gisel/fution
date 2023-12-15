import Banner from "@/components/bannerHome";
import Card from "@/components/card";
import Navbar from "@/components/navbarHome";
import React from "react";
const fetchData = async () => {
  const response = await fetch("http://localhost:3000/api/business");
  const responseJson = await response.json();
  console.log(responseJson);
};
const Page = async () => {
  // await fetchData();
  return (
    <>
      <div>
        <Navbar />
        <Banner />
        {/* <div className="my-8 mx-8"> /}
      {/ Updated the styling here /}
      {/ <h1 className="flex justify-center items-center text-5xl">business</h1> /}
      {/ <Card /> /}
      {/ </div> /}
      <div className="my-8 mx-8">
        {/ Updated the styling here */}
        <h1 className="flex justify-center items-center text-5xl">
          Your Request
        </h1>
        <Card />
        <h1 className="flex justify-center items-center text-5xl">Lenders</h1>
        <Card />
        <h1 className="flex justify-center items-center text-3xl hover:text-blue-800">
          <button>See all..</button>
        </h1>
      </div>
    </>
  );
};

export default Page;
