import React from "react";
import Container from "../container";
import style from "./plans.module.scss";
import Maintanence from "./Maintanence/maintanence";
import Development from "./Development/development";


const Plans: React.FC = () => {
  return (
    <Container>
      <div className="max-w-7xl mx-auto">
        <h2 className="display-5 fw-normal text-center">Maintanence Plans</h2>
        <Maintanence />
        <h2 className="display-5 fw-normal text-center">Development</h2>
        <Development />
      </div>

    </Container>
  )
}

export default Plans;