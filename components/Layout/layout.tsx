import { Nav, Navbar } from "react-bootstrap";
import Alert from "../Alert/alert";
import Footer from "../Footer/footer";
import Meta from "../Meta/meta";
import NavbarComponant from "../Navbar/Navbar";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <NavbarComponant />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
