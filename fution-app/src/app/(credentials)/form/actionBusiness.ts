import { APIResponse } from "@/app/api/typedef";
import { cookies } from "next/headers";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const createBusiness = async (formData: FormData) => {
  "use server";
  try {
    const monthlyRevenue = parseFloat(formData.get("monthlyRevenue") as string);
    const creditScore = parseFloat(formData.get("creditScore") as string);
    const fundsNeeded = parseFloat(formData.get("fundsNeeded") as string);
    const credential = parseFloat(formData.get("credential") as string);

    const baseUrl = process.env.NEXT_PUBLIC_URL;
    const response = await fetch(`${baseUrl}/api/business`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        monthlyRevenue,
        creditScore,
        fundsNeeded,
        credential,
        description: formData.get("description"),
        tagline: formData.get("tagline"),
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
