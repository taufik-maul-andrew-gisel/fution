import jwt, { JwtPayload } from "jsonwebtoken";
// import * as jose from "jose";

const SECRET_KEY = process.env.JWT_SECRET || "rahasianih";
// Di sini kita menerima payload berupa object (JwtPayload) yang berisi data yang akan disimpan di dalam token.
export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, SECRET_KEY);

// // Di sini kita menerima token berupa string yang berisi token yang akan dibaca.
export const readPayload = (token: string) => jwt.verify(token, SECRET_KEY);

// export const readPayloadJose = async <T>(token: string) => {
//   const secretKey = new TextEncoder().encode(SECRET_KEY);
//   // console.log(secretKey);

//   const payloadJose = await jose.jwtVerify<T>(token, secretKey);
//   // console.log(payloadJose, "<<<<<<<<<<");

//   return payloadJose.payload;
// };
