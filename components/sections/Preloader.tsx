"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

const bootMessages = [
  "> initializing system...",
  "> loading assets...",
  "> connecting to supabase...",
  "> compiling shaders...",
  "> calibrating cursor...",
  "> ready.",
];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = sessionStorage.getItem("hasVisited");
    const shouldSkip = prefersReducedMotion() || hasVisited === "true";

    if (shouldSkip) {
      setIsLoading(false);
      return;
    }

    // Counter animation
    const counterInterval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(counterInterval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    // Boot messages
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= bootMessages.length - 1) {
          clearInterval(messageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 300);

    // Complete loading
    const completeTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasVisited", "true");
      clearInterval(counterInterval);
      clearInterval(messageInterval);
    }, 2200);

    return () => {
      clearTimeout(completeTimer);
      clearInterval(counterInterval);
      clearInterval(messageInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            },
          }}
          className="fixed inset-0 z-[100] bg-bg flex items-center justify-center"
        >
          <div className="text-center space-y-6">
            {/* Counter */}
            <div className="text-display text-[8rem] md:text-[12rem] font-bold leading-none text-accent">
              {counter}
              <span className="text-muted text-[4rem] md:text-[6rem]">%</span>
            </div>

            {/* Boot messages */}
            <div className="h-24 overflow-hidden">
              <div className="space-y-1 font-mono text-sm text-muted">
                {bootMessages.slice(0, messageIndex + 1).map((message, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {message}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Loading bar */}
            <div className="w-64 h-1 bg-surface rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${counter}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-accent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
