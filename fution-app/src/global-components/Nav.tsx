import Link from "next/link";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { useState } from "react";
import { UserRole } from "@prisma/client";
import Image from "next/image";

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
<div className="flex flex-row justify-between items-center shadow-lg bg-white z-10 h-12 px-10 py-4">
  <Link href="/">
    <Image
        src="/logo.png"
        alt=""
        width="200"
        height="200"
        className="object-cover"
    />
  </Link>

  <div className="flex">
      <h3 className="px-5 py-2 text-black">How it works</h3>
      <h3 className="px-5 py-2 text-black">About us</h3>
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
    </>
  );
}

export default Nav;
