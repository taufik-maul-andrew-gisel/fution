"use server";
import { redirect } from "next/navigation";
import { APIResponse } from "../../api/typedef";
import User from "@/models/user";
import { z } from "zod";
import { createToken } from "@/utils/jwt";
import { cookies } from "next/headers";
import { login } from "../login/action";

export const createAccount = async (formData: FormData) => {
  try {
    const loginInputSchema = z.object({
      username: z.string(),
      password: z.string(),
    });
    const username = formData.get("username");
    const password = formData.get("password");

    const parsedData = loginInputSchema.safeParse({
      username,
      password,
    });
    if (!parsedData.success) {
      // !! Ingat, jangan di-throw kecuali ingin menghandle error di sisi client via error.tsx !
      const errPath = parsedData.error.issues[0].path[0];
      const errMessage = parsedData.error.issues[0].message;
      const errFinalMessage = `${errPath} - ${errMessage}`;

      // Mengembalikan error via redirect
      return redirect(`/register?error=${errFinalMessage}`);
    }
    const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      // Karena backendnya menerima tipe data "json" (lihat function POST pada /src/routes/users/route.ts), maka kita harus menerima bodynya dalam bentuk json juga.
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
        role: formData.get("role"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store"
    });
    const responseJson: APIResponse<unknown> = await response.json();
    if (!response.ok) {
      let message = responseJson.error ?? "Something went wrong!";
      // Harapannya di sini adalah ketika ada error, maka kita akan redirect ke halaman register dengan URLSearchParams dengan key "error" yang berisi pesan errornya, dengan asumsi bahwa error SELALU string
      return redirect(`/register?error=${message}`);
    }
    
    // console.log("berhasil register ni");

    const foundUser = await User.getByUsername(parsedData.data.username);
    if (!foundUser) {
      return redirect(`/register?error=failed to register`);
    }

    const payload = {
      id: foundUser.id,
      username: foundUser.username,
      role: foundUser.role,
    };
    const token = createToken(payload);
    // Menyimpan token dengan menggunakan cookies
    cookies().set("token", token, {
      // Meng-set cookie agar hanya bisa diakses melalui HTTP(S)
      httpOnly: true,
      // Meng-set cookie agar hanya bisa diakses melalui HTTPS, karena ini hanya untuk development, maka kita akan set false
      secure: false,
      // Meng-set expiration time dari cookies
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
      // Meng-set cookie agar hanya bisa diakses melalui domain yang sama
      sameSite: "strict",
    });

    
    return redirect(`/form`);
  } catch (error) {
    throw error;
  }
};
