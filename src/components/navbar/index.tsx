"use client";

import { useMemo, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  Link,
  Button,
} from "@nextui-org/react";

import { MenuItems } from "./constants";

function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { items, ariaLAbel } = useMemo(() => {
    const items = MenuItems.map((item) => (
      <NavbarItem key={item.label} className="mr-10">
        <Link
          color="foreground"
          href={item.href}
          className="text-lg font-medium"
        >
          {item.label}
        </Link>
      </NavbarItem>
    ));
    const ariaLAbel = isMenuOpen ? "Close menu" : "Open menu";

    return { ariaLAbel, items };
  }, [isMenuOpen]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle aria-label={ariaLAbel} className="sm:hidden" />
      <NavbarBrand className="font-extrabold text-lg">
        <Image src="/logo-black.png" height={50} width={50} alt="Logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/contact"
            variant="flat"
            className="text-lg"
          >
            Contacto
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>{items}</NavbarMenu>
    </Navbar>
  );
}

export default NavbarPage;
