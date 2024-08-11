"use client";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Moon02Icon from "./icons/Moon02Icon";
import Sun03Icon from "./icons/Sun03Icon";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  if (!mounted) return null;

  return (
    <Button variant="bordered" color="default" onClick={toggleTheme} size="lg" isIconOnly>
      {theme === " light" ? (
        <Moon02Icon className="w-6 h-6" />
      ) : (
        <Sun03Icon className="w-6 h-6" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
