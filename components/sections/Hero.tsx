"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import NodeNetwork from "@/components/ui/NodeNetwork";

const rotatingWords = ["systems", "products", "pipelines", "ideas"];

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5 + i * 0.03,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* WebGL Node Network Background */}
      <NodeNetwork />
      
      {/* Registration marks */}
      <div className="registration-mark absolute top-8 left-8" />
      <div className="registration-mark absolute top-8 right-8" />
      <div className="registration-mark absolute bottom-8 left-8" />
      <div className="registration-mark absolute bottom-8 right-8" />

      {/* Background annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 01 — HERO
      </div>

      {/* Content */}
      <div className="container-grid relative z-10">
        <div className="col-span-12">
          {/* Main headline */}
          <h1 className="text-hero font-display font-bold leading-hero mb-8">
            {splitText("Karthik")}
            <br />
            <span className="text-text/80">
              I build{" "}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-serif-italic text-accent inline-block"
              >
                {rotatingWords[currentWord]}
              </motion.span>
            </span>
            <br />
            <span className="text-text/80">that scale.</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl md:text-2xl text-muted max-w-2xl mb-12"
          >
            Full-stack developer focused on DevOps, cloud infrastructure and backend.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton href="#projects" variant="primary">
              View work
            </MagneticButton>
            <MagneticButton href="/resume.pdf" variant="ghost">
              Download résumé
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-mono text-xs">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
