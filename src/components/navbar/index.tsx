"use client";

import { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Image,
  Link,
} from "@nextui-org/react";

import { useMediaQuery } from "@hooks/useMediaQuery";
const ButtonComponent = dynamic(() => import("@components/button"));

import { MenuItems } from "./constants";

function NavbarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSm = useMediaQuery("(max-width: 640px)");
  const router = useRouter();

  const handleContact = useCallback(() => router.push("/contact"), [router]);
  const goToHome = useCallback(() => router.push("/#main"), [router]);

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
        <NavbarItem key="contact-button" className="px-5 w-full">
          <ButtonComponent label="Contacto" onClick={handleContact} />
        </NavbarItem>
      );

    const ariaLAbel = isMenuOpen ? "Close menu" : "Open menu";

    return { ariaLAbel, items };
  }, [isMenuOpen, isSm, handleContact]);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand className="font-extrabold text-lg" onClick={goToHome}>
        <Image src="/logo-black.png" height={50} width={50} alt="Logo" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {items}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <div className="max-sm:hidden flex group min-w-[120px] items-center font-semibold text-foreground shadow-sm gap-1.5 relative overflow-hidden rounded-full p-[2px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F54180_0%,#4776E6_50%,#F54180_100%)]"></span>
            <ButtonComponent
              label="Contacto"
              onClick={handleContact}
              isSecondary
            />
          </div>
          <NavbarMenuToggle aria-label={ariaLAbel} className="sm:hidden" />
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
