import React from "react";
import Container from "../container";
import style from "./portfolio.module.scss";
import Layout from "../layout";
import Maintanence from "./Maintanence";
import Cmscustomization from "./CMSCustomization";
import ChatWithGPT from "../chatBot";

const PortfolioPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className="max-w-7xl mx-auto">
          <h2 className="display-5 fw-normal text-center">Maintanence Plans</h2>
          <Maintanence />
          <h2 className="display-5 fw-normal text-center">Development</h2>
          <Cmscustomization />
        </div>
      </Container>
    </Layout>
  );
};

export default PortfolioPage;
