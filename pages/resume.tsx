
import React, {  } from "react";
import Container from "../components/container";
import ResumePage from "../components/App-Pages/Resume/resume";
import Layout from "../components/Layout/layout";


const Resume = () => {
  return (
    <Layout preview={preview}>
      <Container>
        <ResumePage />
      </Container>
    </Layout>
  );
};

export default Resume;