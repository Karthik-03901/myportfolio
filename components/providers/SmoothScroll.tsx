"use client";

import { useEffect, useRef, ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/utils";

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    let lenisInstance: any;

    // Dynamically import Lenis to avoid SSR issues
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      
      lenisInstance = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
      });

      function raf(time: number) {
        lenisInstance.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Add class for styling
      document.documentElement.classList.add("lenis");
    };

    initLenis();

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        document.documentElement.classList.remove("lenis");
      }
    };
  }, []);

  return <>{children}</>;
}
