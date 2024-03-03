
import HireMe from "../components/App-Pages/HireMe/hireMe";
import Container from "../components/container";
import Layout from "../components/Layout/layout";
import { Children } from "react";

const Hire = () => {
  return (
    <Layout preview={Children}>
      <Container>
        <HireMe />
      </Container>
    </Layout>
  );
};

export default Hire;
