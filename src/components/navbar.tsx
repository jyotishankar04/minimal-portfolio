"use client";

import React from "react";
import NavTimer from "./navTimer";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky  top-0 z-50 flex flex-row items-center justify-between  py-5 bg-base-100  px-6 border-b border-base-300 bg-muted">
      <div className="flex items-center space-x-4">
        <Link href="/" className="text-xl font-semibold">
          <span className="text-accent text-2xl">D</span>
          EV <span className="text-accent text-2xl">S</span>
          UVAM
        </Link>
        <div className="text-lg hidden md:block  text-muted-foreground text-accent ">
          {pathname === "/" ? "" : pathname}
        </div>
      </div>
      <div>
        <NavTimer />
      </div>
    </div>
  );
};

export default Navbar;
