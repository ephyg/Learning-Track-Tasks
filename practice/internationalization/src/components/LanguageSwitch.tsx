"use client";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

const LanguageSwitch = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isActive = useLocale();
  const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    startTransition(() => {
      router.push(`/${locale}` + pathname.slice(3));
    });
  };
  return (
    <div>
      <select name="" id="" onChange={handleOnchange} defaultValue={isActive} >
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
