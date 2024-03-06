"use client";
import React, { useState, useEffect } from "react";
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
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">SCHIBELLI</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
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
        <NavbarItem isActive>
          <Link href="/hire" aria-current="page" color="warning">
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
      <div >
      <NavbarMenu>
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
        <NavbarItem isActive>
          <Link href="/hire" aria-current="page" color="warning">
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
        </NavbarMenu>
        </div>
    </Navbar>
  );
}
