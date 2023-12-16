import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div className="flex flex-row justify-between items-center fixed shadow-[0_1px_8px_#ddd] bg-white  top-0 z-50 h-20  px-10 py-4">
      <img
        src="/logo.png"
        alt=""
        style={{ width: "200px !important" }}
        className="object-cover"
      />
      <div className="flex">
        <h3 className="px-5 py-0 text-black">How it works</h3>
        <h3 className="px-5 py-0 text-black">About us</h3>
        <h3 className="px-5 py-0 text-black">FAQ</h3>
        <Link href="/login" className="px-5 py-0 text-black">
          Login
        </Link>
        <Link href="/register" className="px-5 py-0 text-black">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Nav;
