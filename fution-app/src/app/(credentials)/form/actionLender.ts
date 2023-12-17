import { APIResponse } from "@/app/api/typedef";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createLender = async (formData: FormData) => {
  "use server";
  try {
    const minBudget = parseFloat(formData.get("minBudget") as string);
    const maxBudget = parseFloat(formData.get("maxBudget") as string);
    const minInterest = parseFloat(formData.get("minInterest") as string);
    const maxInterest = parseFloat(formData.get("maxInterest") as string);

    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const response = await fetch(`${baseUrl}/api/lender`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        minBudget,
        maxBudget,
        minInterest,
        maxInterest,
      }),
      headers: {
        "Content-Type": "application/json",
        Cookie: cookies().toString(),
      },
    });
    const responseJson: APIResponse<unknown> = await response.json();
    if (!response.ok) {
      let message = responseJson.error ?? "Something went wrong!";
      // Harapannya di sini adalah ketika ada error, maka kita akan redirect ke halaman register dengan URLSearchParams dengan key "error" yang berisi pesan errornya, dengan asumsi bahwa error SELALU string
      return redirect(`/form?error=${message}`);
    }
    return redirect(`/home`);
  } catch (error) {
    throw error;
  }
};
