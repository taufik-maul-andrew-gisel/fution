import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 text-gray-800 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-xl font-bold">
          {/* Pastikan logo.png ada di direktori public */}
          <Image src="/logo.png" alt="logo" width={150} height={60} />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded text-2xl">
            Home
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded text-2xl">
            Services
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded text-2xl">
            About
          </a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded text-2xl">
            Contact
          </a>
        </div>

        {/* Action Button */}
        <button className="bg-red-500 hover:bg-red-700 px-4 py-2 rounded text-2xl">
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
