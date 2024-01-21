import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Button, Navbar } from "flowbite-react";
import { NextRouter, useRouter } from "next/router";
import React from "react";

type Props = {};
type NavlinkProps = {
  href?: string;
//   active?: boolean;
  children: string;
};

const Navlink = ({ href, children }: NavlinkProps) => {
  const router: NextRouter = useRouter();

  return (
    <Navbar.Link href={href} active={router.asPath == href}>
      {children}
    </Navbar.Link>
  );
};

export function Nav({}: Props) {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-black text-white bg-opacity-0 sticky"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
            CarShop
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navlink href="/">
            Home
          </Navlink>
          <Navlink href="/marketplace">Marketplace</Navlink>
          <Navlink href="/contact">Contact</Navlink>
        </Navbar.Collapse>
        <Button className="flex flex-row gap-2">
          <UserCircleIcon />
          <span>Login</span>
        </Button>
      </Navbar>
    </>
  );
}
