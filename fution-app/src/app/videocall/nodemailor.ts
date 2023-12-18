"use server";
import nodemailer from "nodemailer";

export const sendLink = async ({
  roomId,
  link,
}: {
  roomId: string;
  link: string;
}) => {
  console.log(link, 1111111111111111111);

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
      to: "maulpintar@gmail.com",
      subject: "Link Meeting",
      text: `Here is your meeting link: ${link} and Room ID: ${roomId}`,
      // Anda juga dapat menggunakan `html` untuk konten yang diformat HTML
    });

    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email: ", err);
  }
};
