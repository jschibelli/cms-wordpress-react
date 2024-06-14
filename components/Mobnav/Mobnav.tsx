"use client"; // This is a client component 👈🏽
import { useState } from "react";
import styles from "./Mobnav.module.scss";
import React from "react";
import Link from "next/link";

const MobNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log("Is open");
  };

  const Test = () => {
    console.log("Test");
  };

  return (

    <nav>
      {" "}
      <div className={styles.mainNav__Image_flex}>
        <div className={styles.mainNav__title}>
          <p>Jason D&apos;Amico</p>
          <p>Full Stack Web Engineer</p>
        </div>
      </div>
      <div className="menu-toggle" onClick={Test}>
        ☰
      </div>
      <ul style={{ display: isOpen ? "flex" : "none" }}>
        <li>TBD</li>
        <li>TBD</li>
        <li>TBD</li>
      </ul>
    </nav>
  );
};

export default MobNavigation;