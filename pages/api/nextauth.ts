// pages/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // Configure one or more authentication providers
    Providers.Email({
      server: {
        host: "smtp.example.com",
        port: 587,
        auth: {
          user: "your-email@example.com",
          pass: "email-password",
        },
      },
      from: "your-email@example.com",
    }),
    // add other providers as needed
  ],
});
