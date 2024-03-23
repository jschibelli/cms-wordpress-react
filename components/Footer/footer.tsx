import React from "react";
import Container from "../container";
import { FaGithub, FaLinkedin, FaBriefcase, FaFacebook } from "react-icons/fa"; // Ensure you have installed react-icons
import style from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.site_footer}>
      <Container>
        <div
          className={`flex flex-col flex-row items-center justify-center ${style.footer_container}`}
        >
          <div
            className={`${style.footer_left} text-xl lg:text-4xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 justify-center`}
          >
            <p>
              Stay Connected - Follow me on social media to get the latest
              updates and insights.
            </p>
            {/* Social links and icons */}
            <div className={style.social_links}>
              <a
                href="https://github.com/jschibelli"
                className={style.social_link}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/johnschibelli/"
                className={style.social_link}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100073449098025"
                className={style.social_link}
              >
                <FaFacebook />
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
