import Footer from "../Footer/footer";
import Meta from "../Meta/meta";
import NavbarComponant from "../Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <NavbarComponant />
        <main>{children}</main>
      </div>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}
