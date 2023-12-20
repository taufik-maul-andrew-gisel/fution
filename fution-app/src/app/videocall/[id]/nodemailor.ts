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

  const htmlToSend = `
  <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                color: #333333;
                background-color: #f4f4f4;
                padding: 20px;
            }
            .logo {
                display: block;
                margin: 0 auto;
                max-width: px; /* Sesuaikan dengan ukuran logo Anda */
            }
            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .header {
                font-size: 18px;
                margin-bottom: 10px;
            }
            .content {
                font-size: 16px;
                color: #555555;
                line-height: 1.5;
            }
            .footer {
                font-size: 14px;
                color: #999999;
                margin-top: 20px;
                text-align: center;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                background-color: #007bff;
                color: #ffffff;
                text-decoration: none;
                border-radius: 5px;
            }
        </style>
    </head>
    <body>
        <div class="email-container">
            <img src="https://ik.imagekit.io/Taufiksatria/logo.png?updatedAt=1702957081983" alt="Logo" class="logo">
            <div class="header">Formal Invitation to a Meeting Concerning Business Negotiations</div>
            <div class="content">
                Dear. <strong>${foundEmailById?.email}</strong>,<br>
                <strong>${foundEmailById?.name}</strong><br><br>
    
                Hereby I would like to invite you to discuss applying for a capital loan with us.<br><br>
    
                You can join the meeting via the following video call link: ${link}
                <br>
                Room ID: <strong>${roomId}</strong><br><br>
    
                We look forward to your valuable participation.<br><br>
            </div>
            <div class="footer">
                © 2023 Fution. All rights reserved.
            </div>
        </div>
    </body>
    </html>`;
  try {
    let info = await transporter.sendMail({
      from: process.env.USERNODEMAILER,
      to: foundEmailById?.email,
      subject: "Link Meeting",
      html: htmlToSend,
    });
    console.log("Message sent: %s", info.envelope.to[0]);
  } catch (err) {
    console.error("Error sending email: ", err);
  }
};
