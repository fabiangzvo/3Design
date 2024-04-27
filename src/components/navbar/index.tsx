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

import { useMediaQuery } from "@hooks/useMediaQuery";

import { MenuItems } from "./constants";

function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSm = useMediaQuery("(max-width: 640px)");

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

    isSm &&
      items.push(
        <NavbarItem key="contact-button">
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
      );

    const ariaLAbel = isMenuOpen ? "Close menu" : "Open menu";

    return { ariaLAbel, items };
  }, [isMenuOpen, isSm]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle aria-label={ariaLAbel} className="sm:hidden" />
      <NavbarBrand className="font-extrabold text-lg hidden sm:block">
        <Image src="/logo-black.png" height={50} width={50} alt="Logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            href="/contact"
            variant="flat"
            className="text-lg max-sm:hidden"
          >
            Contacto
          </Button>
          <NavbarBrand className="font-extrabold text-lg block sm:hidden">
            <Image src="/logo-black.png" height={50} width={50} alt="Logo" />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarContent className="flex flex-col justify-center">
          {items}
        </NavbarContent>
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarPage;
