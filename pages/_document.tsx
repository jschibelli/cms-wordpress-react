import { Html, Head, NextScript, Main } from "next/document";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "../components/Navbar/Navbar";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer/footer";
import Example from "../components/Navbar/Navbar-test";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body className="dark-mode">
        <NextUIProvider>
          <NavbarComponent />
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  );
}
