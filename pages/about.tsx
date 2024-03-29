import { Children } from "react";
import AboutPage from "../components/App-Pages/About/about";
import Container from "../components/container";
import Layout from "../components/Layout/layout";
import Marquee from "react-fast-marquee";
import JasonDAmico from "../components/Testimonials/JasonDAmico";

const About = () => {
  return (
    <Layout preview={Children}>
      <Container>
        <AboutPage />
      </Container>
    </Layout>
  );
};

export default About;