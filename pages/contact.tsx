
import Contact from "../components/App-Pages/Contact/contact";
import Footer from "../components/Footer/footer";
import Container from "../components/container";
import Layout from "../components/Layout/layout";
import { Children } from "react";
import Testimonials from "../components/Testimonials/JasonDAmico";

const ContactPage = () => {
  return (
    <Layout preview={Children}>
      <Container>
        <Contact />
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default ContactPage;
