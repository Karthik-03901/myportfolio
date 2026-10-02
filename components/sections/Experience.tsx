"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    title: "Full-Stack Developer",
    company: "Asrivo Technologies",
    description: "Building scalable web platforms with Next.js, Supabase, and AWS. Implemented CI/CD pipelines and Docker containerization.",
    achievements: [
      "Deployed staging and production environments",
      "Reduced deployment time by 60%",
      "Implemented automated testing pipeline",
    ],
  },
  {
    year: "2023 - 2024",
    title: "Backend Developer",
    company: "Freelance Projects",
    description: "Developed REST APIs and real-time systems for various clients.",
    achievements: [
      "Built 5+ production systems",
      "Handled 10k+ concurrent users",
      "99.9% uptime across projects",
    ],
  },
  {
    year: "2023",
    title: "B.E. Computer Science",
    company: "Engineering College",
    description: "Currently in third year, focusing on cloud computing and distributed systems.",
    achievements: [
      "Multiple hackathon wins",
      "Open source contributions",
      "Technical club leadership",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" ref={ref} className="section-padding relative bg-surface">
      {/* Section annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 05 — EXPERIENCE
      </div>

      <div className="container-grid">
        <div className="col-span-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-h2 font-display font-bold"
          >
            Experience & Education
          </motion.h2>
        </div>

        <div className="col-span-12 lg:col-span-10 lg:col-start-2 relative">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-line overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-accent origin-top"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-16 pl-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="absolute -left-[49px] top-2 w-4 h-4 rounded-full bg-accent border-4 border-surface"
                />

                {/* Year badge */}
                <div className="inline-block text-mono text-xs px-3 py-1 bg-accent/10 text-accent rounded-pill mb-4">
                  {exp.year}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold mb-2">
                  {exp.title}
                </h3>
                <p className="text-accent text-lg mb-4">{exp.company}</p>
                <p className="text-muted mb-6">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted"
                    >
                      <span className="text-accent mt-1">→</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
