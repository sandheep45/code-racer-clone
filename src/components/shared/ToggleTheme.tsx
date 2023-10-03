"use client";

import { useTheme } from "next-themes";
import { Toggle } from "../ui/toggle";
import DarkThemeIcon from "../assets/svg/DarkThemeIcon";
import LightThemeIcon from "../assets/svg/LightThemeIcon";
import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(!theme || theme !== "dark" ? "dark" : "light");
  };

  if (!isMounted) return null

  return (
    <Toggle className="p-0 dark:bg-transparent hover:bg-transparent" onClick={toggleTheme}>
      {theme === "dark" ? (
        <LightThemeIcon className="h-12 w-12" />
      ) : (
        <DarkThemeIcon className="h-12 w-12" />
      )}
    </Toggle>
  );
};

export default ToggleTheme;
