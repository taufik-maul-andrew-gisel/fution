import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <nav className="sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center shadow-md bg-white h-20 px-10 py-4">
        <Link href="/">
          <h3>
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "200px" }} // Removed !important
              className="object-cover"
            />
          </h3>
        </Link>
        <div className="flex">
          <Link href="/how-it-works">
            <h3 className="px-5 py-2 text-black">How it works</h3>
          </Link>
          <Link href="/about-us">
            <h3 className="px-5 py-2 text-black">About us</h3>
          </Link>
          <Link href="/faq">
            <h3 className="px-5 py-2 text-black">FAQ</h3>
          </Link>
          <Link href="/login">
            <h3 className="px-5 py-2 text-black">Login</h3>
          </Link>
          <Link href="/register">
            <h3 className="px-5 py-2 text-black">Register</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
