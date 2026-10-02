"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, Blocks, Code, Rocket } from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description: "Deep dive into requirements, user needs, and technical constraints.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architect",
    description: "Design scalable systems with proper abstractions and data flows.",
    icon: Blocks,
  },
  {
    number: "03",
    title: "Build",
    description: "Write clean, tested, and maintainable code following best practices.",
    icon: Code,
  },
  {
    number: "04",
    title: "Ship & Monitor",
    description: "Deploy with CI/CD, monitor performance, iterate based on metrics.",
    icon: Rocket,
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" ref={ref} className="section-padding relative">
      {/* Section annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 06 — PROCESS
      </div>

      <div className="container-grid">
        <div className="col-span-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-h2 font-display font-bold"
          >
            How I Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted text-lg mt-4 max-w-2xl"
          >
            My DevOps mindset ensures every project is built for production from day one.
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative p-8 bg-surface border border-line rounded-panel hover:border-accent transition-all duration-500"
              >
                {/* Step number */}
                <div className="text-mono text-6xl font-bold text-line group-hover:text-accent/20 transition-colors duration-500 mb-6">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 mb-6 text-accent"
                >
                  <Icon size={48} strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-panel pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Connecting arrows for desktop */}
        <div className="hidden lg:block col-span-12 relative -mt-24 mb-12">
          <svg
            className="w-full h-24"
            viewBox="0 0 1200 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {[0, 1, 2].map((i) => (
              <motion.path
                key={i}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 0.3 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1.5, delay: 0.8 + i * 0.2 }}
                d={`M ${150 + i * 300} 50 L ${250 + i * 300} 50`}
                stroke="var(--accent)"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
