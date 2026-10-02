"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { hasFinePointer, prefersReducedMotion } from "@/lib/utils";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only show cursor on devices with fine pointers and if user doesn't prefer reduced motion
    if (!hasFinePointer() || prefersReducedMotion()) return;

    setIsVisible(true);
    
    // Add class to body to hide default cursor
    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
        
        // Check for custom cursor label
        const labelElement = target.closest("[data-cursor-label]");
        if (labelElement) {
          const label = labelElement.getAttribute("data-cursor-label");
          setCursorLabel(label || "");
        } else if (target.tagName === "A") {
          setCursorLabel("VIEW");
        } else {
          setCursorLabel("");
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(false);
        setCursorLabel("");
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.8,
        }}
      />

      {/* Label */}
      {cursorLabel && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] text-mono text-xs text-accent bg-bg px-2 py-1 rounded-panel"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            x: mousePosition.x + 20,
            y: mousePosition.y - 30,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {cursorLabel}
        </motion.div>
      )}
    </>
  );
}
