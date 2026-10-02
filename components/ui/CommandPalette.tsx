"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, Briefcase, User, Mail, FileText, Github, Linkedin, Copy, Sun, Moon } from "lucide-react";

interface Command {
  id: string;
  title: string;
  subtitle?: string;
  icon: React.ElementType;
  action: () => void;
  keywords?: string[];
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Simple theme toggle without context
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

  const commands: Command[] = [
    {
      id: "home",
      title: "Go to Home",
      icon: Home,
      action: () => {
        document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      keywords: ["home", "top", "start"],
    },
    {
      id: "about",
      title: "Go to About",
      icon: User,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      keywords: ["about", "bio", "info"],
    },
    {
      id: "projects",
      title: "View Projects",
      icon: Briefcase,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      keywords: ["projects", "work", "portfolio"],
    },
    {
      id: "experience",
      title: "View Experience",
      icon: FileText,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      keywords: ["experience", "work", "timeline", "education"],
    },
    {
      id: "contact",
      title: "Go to Contact",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
      keywords: ["contact", "email", "reach"],
    },
    {
      id: "copy-email",
      title: "Copy Email",
      subtitle: "karthik@example.com",
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText("karthik@example.com");
        setIsOpen(false);
      },
      keywords: ["email", "copy", "contact"],
    },
    {
      id: "github",
      title: "Open GitHub",
      subtitle: "View source code",
      icon: Github,
      action: () => {
        window.open("https://github.com", "_blank");
        setIsOpen(false);
      },
      keywords: ["github", "code", "social"],
    },
    {
      id: "linkedin",
      title: "Open LinkedIn",
      subtitle: "Connect with me",
      icon: Linkedin,
      action: () => {
        window.open("https://linkedin.com", "_blank");
        setIsOpen(false);
      },
      keywords: ["linkedin", "social", "connect"],
    },
    {
      id: "theme",
      title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        toggleTheme();
        setIsOpen(false);
      },
      keywords: ["theme", "dark", "light", "mode"],
    },
  ];

  const filteredCommands = commands.filter((cmd) => {
    const searchLower = search.toLowerCase();
    return (
      cmd.title.toLowerCase().includes(searchLower) ||
      cmd.subtitle?.toLowerCase().includes(searchLower) ||
      cmd.keywords?.some((kw) => kw.includes(searchLower))
    );
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
      setSearch("");
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSearch("");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-bg/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />

          {/* Command Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] mx-4"
          >
            <div className="bg-surface border border-line rounded-panel shadow-2xl overflow-hidden">
              {/* Search input */}
              <div className="flex items-center gap-3 p-4 border-b border-line">
                <Search size={20} className="text-muted" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-text placeholder:text-muted"
                  autoFocus
                />
                <kbd className="text-mono text-xs px-2 py-1 bg-bg rounded border border-line">
                  ESC
                </kbd>
              </div>

              {/* Commands list */}
              <div className="max-h-96 overflow-y-auto p-2">
                {filteredCommands.length === 0 ? (
                  <div className="text-center py-12 text-muted">
                    No commands found
                  </div>
                ) : (
                  <div className="space-y-1">
                    {filteredCommands.map((cmd, index) => {
                      const Icon = cmd.icon;
                      return (
                        <motion.button
                          key={cmd.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.03 }}
                          onClick={cmd.action}
                          className="w-full flex items-center gap-3 p-3 rounded-panel hover:bg-surface-2 transition-colors text-left group"
                        >
                          <div className="w-10 h-10 flex items-center justify-center bg-bg rounded-panel group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                            <Icon size={20} />
                          </div>
                          <div className="flex-1">
                            <div className="text-text group-hover:text-accent transition-colors">
                              {cmd.title}
                            </div>
                            {cmd.subtitle && (
                              <div className="text-sm text-muted">{cmd.subtitle}</div>
                            )}
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="flex items-center justify-between p-3 border-t border-line bg-bg text-mono text-xs text-muted">
                <span>Navigate with arrow keys</span>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 bg-surface rounded border border-line">
                    {typeof window !== "undefined" && navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}
                  </kbd>
                  <span>+</span>
                  <kbd className="px-2 py-1 bg-surface rounded border border-line">K</kbd>
                  <span>to open</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
