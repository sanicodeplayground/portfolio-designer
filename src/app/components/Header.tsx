"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiSun, FiMonitor, FiMoon } from "react-icons/fi";

type Theme = "light" | "dark" | "system";

export default function Header() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "system";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="my-grid flex justify-between items-center">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Rosina Pissaco Logo"
          width={60}
          height={60}
          priority
        />
      </Link>
      <div
        className="flex bg-[rgb(var(--background-secondary))] rounded-full p-1"
        role="radiogroup"
      >
        {[
          { name: "light" as const, icon: FiSun },
          { name: "system" as const, icon: FiMonitor },
          { name: "dark" as const, icon: FiMoon },
        ].map(({ name, icon: Icon }) => (
          <button
            key={name}
            aria-checked={theme === name}
            aria-label={`Switch to ${name} theme`}
            className={`p-2 rounded-full transition-colors duration-300 text-[rgb(var(--foreground-rgb))] ${
              theme === name ? "bg-[rgb(var(--background))]" : ""
            }`}
            onClick={() => handleThemeChange(name)}
            role="radio"
            type="button"
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </header>
  );
}
