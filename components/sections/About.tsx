"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="section-padding relative">
      {/* Registration marks */}
      <div className="registration-mark absolute top-8 left-8" />
      <div className="registration-mark absolute top-8 right-8" />

      {/* Section annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 02 — ABOUT
      </div>

      <div className="container-grid">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-6"
        >
          <blockquote className="text-h2 font-display font-bold leading-tight mb-8">
            "Building <span className="text-serif-italic text-accent">reliable</span> systems
            <br />
            is what I do best."
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 lg:col-span-5 lg:col-start-8"
        >
          <div className="space-y-6 text-lg text-muted">
            <p>
              I'm a third-year Computer Science Engineering student with a passion for creating
              scalable, production-ready systems. My work spans across full-stack development,
              DevOps, and cloud infrastructure.
            </p>
            <p>
              From designing CI/CD pipelines to building real-time web applications, I focus on
              solutions that are maintainable, performant, and built to last.
            </p>
          </div>

          {/* Fact sheet */}
          <div className="mt-12 space-y-3 text-mono text-sm">
            <div className="flex gap-4">
              <span className="text-muted w-24">role:</span>
              <span className="text-text">Full-Stack Developer</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-24">focus:</span>
              <span className="text-text">DevOps · Cloud · Backend</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-24">education:</span>
              <span className="text-text">B.E. CSE (III year)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-24">location:</span>
              <span className="text-text">Tamil Nadu, India</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted w-24">stack:</span>
              <span className="text-text">Next.js · Supabase · Docker · AWS</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
