import { Children } from "react";
import AboutPage from "../components/App-Pages/About/about";
import Container from "../components/container";
import Layout from "../components/Layout/layout";
import Marquee from "react-fast-marquee";
import Testimonials from "../components/Carousels/Testimonials/Testimonials";

const About = () => {
  return (
    <Layout preview={Children}>
      <Container>
        <AboutPage />
        <Testimonials />
      </Container>
    </Layout>
  );
};

export default About;