import React, { useState }from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  // Button,
} from "@nextui-org/react";

export default function NavbarComponents() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
      { label: "About", href: "/about" },
      { label: "Resume", href: "/resume" },
      { label: "Hire Me", href: "/hire" },
      { label: "Blog", href: "/" },
      { label: "Contact", href: "/contact" },
      // Add other menu items here as needed
    ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          onClick={() => {
            console.log("Current state:", isMenuOpen); // This line logs the state to the console.
            setIsMenuOpen(!isMenuOpen);
          }}
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

      <NavbarMenu isOpen={isMenuOpen}>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
