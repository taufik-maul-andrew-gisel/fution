"use server";
import { redirect } from "next/navigation";
import { APIResponse } from "../../api/typedef";

export const createAccount = async (formData: FormData) => {
  try {
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
    });
    const responseJson: APIResponse<unknown> = await response.json();
    if (!response.ok) {
      let message = responseJson.error ?? "Something went wrong!";
      // Harapannya di sini adalah ketika ada error, maka kita akan redirect ke halaman register dengan URLSearchParams dengan key "error" yang berisi pesan errornya, dengan asumsi bahwa error SELALU string
      return redirect(`/register?error=${message}`);
    }

    // console.log("berhasil register ni");

    // Setelah berhasil melakukan register, maka kita redirect ke halaman login
    return redirect("/login");
  } catch (error) {
    throw error;
  }
};
