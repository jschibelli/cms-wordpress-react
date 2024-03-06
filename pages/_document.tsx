import { Html, Head, NextScript, Main } from "next/document";
import { NextUIProvider } from "@nextui-org/react";
import NavbarComponent from "../components/Navbar/Navbar";
import MobNavigation from "../components/Mobnav/Mobnav";

export default function Document() {

    const Test = () => {
      document.write("Test");
    };

  return (
    <Html lang="en">
      <Head />
      <body className="dark-mode">
        <NextUIProvider>
          <Main />
          <NextScript />
        </NextUIProvider>
      </body>
    </Html>
  );
}
