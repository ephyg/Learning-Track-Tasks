"use client";
import React from "react";
import LanguageSwitch from "./LanguageSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between px-10 py-3 items-center w-full">
      <ul className="text-base font-semibold flex gap-5">
        <Link href={`/${pathname.split("/")[1]}/`}>Home</Link>
        <Link href={`/${pathname.split("/")[1]}/about`}>About</Link>
      </ul>
      <LanguageSwitch />
    </div>
  );
};

export default NavigationBar;
