"use client";

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) return <></>; // Empty fragment

  if (currentTheme === "dark") {
    return (
      <div className="cursor-pointer" onClick={() => setTheme("light")}>
        <SunIcon className="h-6 w-6 text-lg text-gray-50 hover:text-slate-400" />
      </div>
    );
  }

  if (currentTheme === "light") {
    return (
      <div className="cursor-pointer" onClick={() => setTheme("dark")}>
        <MoonIcon className="h-6 w-6 text-gray-900 text-lg hover:text-slate-400" />
      </div>
    );
  }

  return null;
}


