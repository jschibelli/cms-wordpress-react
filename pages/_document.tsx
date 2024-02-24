import { Html, Head, NextScript, Main } from "next/document";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "../components/Navbar/Navbar";
import { useRouter } from "next/navigation";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <NextUIProvider>
          <NavbarComponent />
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  );
}
