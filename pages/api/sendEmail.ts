// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Ensure that the environment variables are correctly loaded
    const { EMAIL_USER, EMAIL_PASS, RECEIVING_EMAIL } = process.env;

    if (!EMAIL_USER || !EMAIL_PASS || !RECEIVING_EMAIL) {
      res
        .status(500)
        .json({ status: "error", message: "Email credentials are not set" });
      return;
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL_USER, // Your email address
        pass: EMAIL_PASS, // Your email password
      },
    });

    const mailOptions = {
      from: email,
      to: RECEIVING_EMAIL, // Your email address to receive messages
      subject: `Contact form submission from ${name}`,
      text: message,
      html: `<p>You have a new contact form submission</p>
             <p><strong>Name: </strong> ${name}</p>
             <p><strong>Email: </strong> ${email}</p>
             <p><strong>Message: </strong> ${message}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ status: "success" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ status: "error", message: "Could not send email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
