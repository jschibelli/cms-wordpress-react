import React from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; // Ensure you have installed react-icons

function SocialMediaIcons() {
  return (
    <div className={style.social_links}>
      <a href="https://github.com/jschibelli" className={style.social_link}>
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
  );
}

export default SocialMediaIcons;


