"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { prefersReducedMotion } from "@/lib/utils";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Docker",
  "AWS",
  "CI/CD",
  "GitHub Actions",
  "Vercel",
  "GSAP",
  "Framer Motion",
  "Three.js",
];

export default function TechMarquee() {
  const baseVelocity = useRef(-1);
  const scrollVelocity = useMotionValue(0);
  const velocity = useTransform(scrollVelocity, [0, 0], [0, 0]);
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) {
      baseVelocity.current = 0;
    }
  }, []);

  useAnimationFrame((t, delta) => {
    if (isPaused) return;

    let moveBy = baseVelocity.current * (delta / 1000) * 100;
    
    // Add scroll velocity influence
    moveBy += velocity.get() * (delta / 1000);

    const newX = x.get() + moveBy;
    
    // Reset position for infinite loop
    if (newX <= -100) {
      x.set(newX + 100);
    } else if (newX >= 0) {
      x.set(newX - 100);
    } else {
      x.set(newX);
    }
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const updateScrollVelocity = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      
      scrollVelocity.set(diff * 0.1);
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollVelocity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollVelocity]);

  // Double the items for seamless loop
  const items = [...techStack, ...techStack];

  return (
    <div 
      className="overflow-hidden py-8 border-y border-line bg-surface/50 backdrop-blur-sm"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        style={{ x: useTransform(x, (v) => `${v}%`) }}
      >
        {items.map((tech, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-3 text-2xl font-display font-bold text-muted hover:text-accent transition-colors"
          >
            <span>{tech}</span>
            <span className="text-accent">●</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
