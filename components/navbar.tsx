import { HiOutlineUserCircle } from "react-icons/hi";
import { Button, Navbar } from "flowbite-react";
import { NextRouter, useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Url } from "url";

type Props = {};
type NavlinkProps = {
  href: Url | string;
  children: string;
};

const Navlink = ({ href, children }: NavlinkProps) => {
  const router: NextRouter = useRouter();

  return (
    <>
      <Link
        className={`font-semibold hover:text-blue-400 duration-200 ${
          router.asPath == href ? "text-blue-400" : "text-blue-800"
        }`}
        href={href}
      >
        {children}
      </Link>
    </>
  );
};

export function Nav({}: Props) {
  return (
    <div className="w-full fixed top-0 overflow-x-hidden z-40">
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-black text-white bg-opacity-0"
      >
        <Navbar.Brand href="/">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-500">
            CarShop
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navlink href="/">Home</Navlink>
          <Navlink href="/marketplace">Marketplace</Navlink>
          <Navlink href="/contact">Contact Us</Navlink>
        </Navbar.Collapse>
        <Button gradientMonochrome="info" className="duration-200">
          <HiOutlineUserCircle className="h-5 w-5" />
          <span className="ml-2">Login</span>
        </Button>
      </Navbar>
    </div>
  );
}
