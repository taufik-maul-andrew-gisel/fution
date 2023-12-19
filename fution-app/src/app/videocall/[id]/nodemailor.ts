"use server";
import BusinessModel from "@/models/business";
import nodemailer from "nodemailer";

export const sendLink = async ({
  roomId,
  link,
  id,
}: {
  roomId: string;
  link: string;
  id: string;
}) => {
  // console.log(link, 1111111111111111111);

  const foundEmailById = await BusinessModel.readById(id);
  const transporter = nodemailer.createTransport({
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

  try {
    let info = await transporter.sendMail({
      from: process.env.USERNODEMAILER,
      to: foundEmailById?.email,
      subject: "Link Meeting",
      text: `Here is your meeting link: ${link} and Room ID: ${roomId}`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email: ", err);
  }
};
