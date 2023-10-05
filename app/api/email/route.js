import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, phone, subject, message } =
    await request.json();
  console.log(firstname, lastname, email, phone, subject, message);
  const mailAuth = process.env.EMAIL_USER;
  const passwordAuth = process.env.EMAIL_PASSWORD;

  let transporter = nodemailer.createTransport({
    host: "mail.vexinweb.fr",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: mailAuth,
      pass: passwordAuth,
    },
  });

  const messageContent =
    "Nouvelle soumission de formulaire de contact depuis le site web de l'Acam :\n\n" +
    "Détails du contact :\n" +
    "Nom : " +
    firstname +
    " " +
    lastname +
    "\n" +
    "Numéro de téléphone : " +
    phone +
    "\n" +
    "Adresse mail : " +
    email +
    "\n\n" +
    "Message :\n" +
    message +
    "\n\n";

  const mailOptions = {
    from: "a.c.a.montagny60240@gmail.com",
    to: "contact@vexinweb.fr",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message depuis le site de l'ACAM de ${firstname} ${lastname} (${email})`,
    text: messageContent,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
