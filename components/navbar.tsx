import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { useDataConstants } from "@/hooks/useDataConstants";
import { ASSETS } from "@/constants/assets";
import { SosmedSection } from "@/components/SosmedSection";

export function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const data = useDataConstants();

  return (
    <Navbar
      className={"border-b fixed"}
      isMenuOpen={isMenuOpen}
      maxWidth={"xl"}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <Link className="flex items-center gap-2" href="/">
            <img
              alt={"raron sinar cemerlang"}
              className={"h-8"}
              src={ASSETS.LOGO}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {data.menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item}-${index}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <Link
              className="w-full uppercase "
              color={"foreground"}
              href={item.path}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent className={"hidden md:flex"} justify="end">
        <SosmedSection className="flex gap-2" />
      </NavbarContent>
      <NavbarMenu>
        {data.menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full capitalize bg-primary-50/10 p-3 rounded-md font-semibold"
              color={"foreground"}
              href={item.path}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <div className="py-4">
            <SosmedSection className="flex gap-3 flex-col" />
          </div>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
