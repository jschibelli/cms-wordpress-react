import React from "react";
import Container from "../container";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa"; // Ensure you have installed react-icons
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.site_footer}>
      <Container>
        <div
          className={`flex flex-col lg:flex-row items-center ${style.footer_container}`}
        >
          <div
            className={`${style.footer_left} text-xl lg:text-5xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2`}
          >
            <p></p>
            {/* Social links and icons */}
            <div className={style.social_links}>
              <a
                href="https://github.com/yourusername"
                className={style.social_link}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                className={style.social_link}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://upwork.com/freelancers/yourusername"
                className={style.social_link}
              >
                <FaBriefcase />
              </a>
            </div>
          </div>
          <div
            className={`${style.footer_right} flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2`}
          >
            {/* Other links or content */}
          </div>
        </div>
        {/* Copyright notice */}
        <div className={style.copywrite}>
          <p>© 2024 schibelli.com</p>
        </div>
      </Container>
    </footer>
  );
}
