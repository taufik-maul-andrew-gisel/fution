// pages/register.tsx
"use client";
import React, { useState } from "react";

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [Role, setRole] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Further processing here, e.g., sending to server API
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div
        className="grid grid-cols-2 gap-4 h-full max-w-4xl w-full bg-white rounded p-6 shadow-md"
        style={{
          backgroundImage: 'url("your-background-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="flex flex-col justify-center items-center h-full"
          style={{
            backgroundImage: 'url("/bannerRegist.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3 className="text-4xl font-bold text-slate-50">Welcome!</h3>
          <p className="text-md text-white mt-2">
            Join us and explore the endless possibilities.
          </p>
          {/* Additional welcome text or images */}
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-center text-3xl font-extrabold">Register</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="role" className="sr-only">
                role
              </label>
              <select
                id="role"
                name="role"
                onChange={(e) => setRole(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="lender">Lender</option>
                <option value="business">Business</option>
              </select>
              {/* <input
                id="role"
                name="role"
                type="role"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="role"
                value={role}
                onChange={(e) => setPassword(e.target.value)}
              /> */}
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
