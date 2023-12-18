import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USERNODEMAILER,
    pass: process.env.PASSNODEMAILER,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});
