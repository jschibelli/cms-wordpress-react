import React from "react";
import styles from "./about.module.scss";
import Container from "../container";
import Layout from "../layout";
import Employers from "../Employer/employer";
import Button from "../Button/button";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <div className={styles.resume}>
          <div className="max-w-7xl mx-auto">
            <div className="px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold  h1">John Schibelli</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Full-Stack Engineer / Ai Specialist</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <Button
                    radius="full"
                    variant="outline-secondary"
                    className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
                    size="lg"
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Employers />

      </Container>
    </Layout>
  );
};

export default AboutPage;
