import React from "react";
import Container from "../container";

import Maintanence from "./Maintanence";
import Cmscustomization from "./CMSCustomization";


const ServicesPage: React.FC = () => {
  return (
      <Container>
        <div className="max-w-7xl mx-auto">
          <h2 className="display-5 fw-normal text-center">Maintanence Plans</h2>
          <Maintanence />
          <h2 className="display-5 fw-normal text-center">Development</h2>
          <Cmscustomization />
        </div>
      </Container>
  );
};

export default ServicesPage;
