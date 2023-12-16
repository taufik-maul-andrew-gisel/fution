"use server";
import { redirect } from "next/navigation";
import { z } from "zod";
import { cookies } from "next/headers";
import { compareTextWithHash } from "@/utils/bcryptjs";
import User from "@/models/user";
import { createToken } from "@/utils/jwt";

export const login = async (formData: FormData) => {
  const loginInputSchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  // Mengambil data dari form
  //   console.log(loginInputSchema, "inii");

  const username = formData.get("username");
  const password = formData.get("password");

  const parsedData = loginInputSchema.safeParse({
    username,
    password,
  });
  //   console.log(parsedData, "inii");

  if (!parsedData.success) {
    // !! Ingat, jangan di-throw kecuali ingin menghandle error di sisi client via error.tsx !
    const errPath = parsedData.error.issues[0].path[0];
    const errMessage = parsedData.error.issues[0].message;
    const errFinalMessage = `${errPath} - ${errMessage}`;

    // Mengembalikan error via redirect
    return redirect(`/login?error=${errFinalMessage}`);
  }
  // Memvalidasi data terhadap database
  const foundUser = await User.getByUsername(parsedData.data.username);

  // validasi user ketemu atau tidak
  if (!foundUser) {
    return redirect(`/login?error=Invalid username or password`);
  }
  // compare password user
  const comparepassword = compareTextWithHash(
    parsedData.data.password,
    foundUser.password
  );
  // validasi user dan compare password
  if (!foundUser || !comparepassword) {
    return redirect(`/login?error=Invalid username or password`);
  }

  const payload = {
    id: foundUser.id,
    username: foundUser.username,
    role: foundUser.role,
  };
  // set token
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
  redirect("/home");
};
