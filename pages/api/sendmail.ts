// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, industry, description } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "your-email@example.com", // your SMTP username
      pass: "your-SMTP-password", // your SMTP password
    },
  });

  const mailData = {
    from: "your-email@example.com",
    to: email,
    subject: `New contact from ${name}`,
    text: `${name} from the industry ${industry.label} has sent the following message: ${description}`,
    html: `<div><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Industry:</strong> ${industry.label}</p><p><strong>Description:</strong> ${description}</p></div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.status(200).send("Email successfully sent");
    }
  });
};
