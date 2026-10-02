"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-surface/80 backdrop-blur-md border-b border-line" : "bg-transparent"
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="container-grid py-4">
        <div className="col-span-12 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-display text-2xl font-bold tracking-tight hover:text-accent transition-colors">
            K.
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-mono text-muted hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-mono text-muted hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="text-mono text-muted hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-mono text-muted hover:text-accent transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Status pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-pill bg-surface-2 border border-line">
              <span className="status-dot" />
              <span className="text-mono text-xs">Open to internships</span>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-panel hover:bg-surface-2 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-accent" />
              ) : (
                <Moon size={18} className="text-accent" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
