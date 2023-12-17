import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { useState } from "react";
import { UserRole } from "@prisma/client";

async function Nav() {
  let auth = false;
  if (cookies().get("token")?.value) {
    const res: Response = await fetch(
      process.env.NEXT_PUBLIC_URL + "/api/lender",
      {
        headers: { Cookie: cookies().toString() },
      }
    );
    // console.log(res.status);
    auth = res.status === 401 ? false : true;
  }
  // console.log(auth);

  // const resJson: UserRole | undefined = auth
  //   ? (await res.json()).data
  //   : undefined;
  // console.log(resJson, "ini");

  return (
    <>
      <nav className="sticky top-0 z-50 shadow-md bg-white">
        <div className="flex flex-row justify-between items-center h-20 px-10 py-4">
          <Link href="/">
            <h3>
              <img
                src="/logo.png"
                alt="Logo"
                style={{ width: "200px" }}
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
            {auth ? (
              <>
                <form
                  action={async () => {
                    "use server";
                    cookies().get("token") && cookies().delete("token");
                    redirect("/");
                  }}
                >
                  <button className="px-5 py-2 text-black">Logout</button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login">
                  <h3 className="px-5 py-2 text-black">Login</h3>
                </Link>
                <Link href="/register">
                  <h3 className="px-5 py-2 text-black">Register</h3>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
