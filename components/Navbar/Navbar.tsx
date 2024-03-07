"use client";
import React, { useState, useEffect } from "react";
import styles from "./navbar.module.scss";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { SchibelliLogo } from "../AcmeLogo/AcmeLogo";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About",
    "Resume",
    "Hire Me",
    "Blog",
    "Contact",
  ];

  return (
    <div className={styles.navbar_nav}>
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
        <NavbarContent className="sm:hidden pr-3" justify="center">
          <NavbarBrand>
            <SchibelliLogo />
            <p className="font-bold text-inherit">SCHIBELLI</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-4 text-white"
          justify="center"
        >
          <NavbarBrand>
            <SchibelliLogo />
            <p className="font-bold text-inherit">
              <Link href="/" aria-current="page">
                SCHIBELLI.com
              </Link>
            </p>
          </NavbarBrand>
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/resume">
              Resume
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="/hire" color="warning">
              Hire Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarItem>
            <Link className="text-white" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="/resume">
              Resume
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="/hire" aria-current="page">
              Hire Me
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="/">
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" href="/contact">
              Contact
            </Link>
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
