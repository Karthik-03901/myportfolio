"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Asrivo-Tech-Web",
    description: "Team-built company web platform with staging and production deployment",
    stack: ["Next.js", "Supabase", "Docker", "AWS"],
    year: "2026",
    status: "live",
    demo: "#",
    repo: "#",
  },
  {
    title: "RoadConnect",
    description: "Highway assistance and emergency services platform",
    stack: ["Next.js", "Supabase", "Real-time"],
    year: "2025",
    status: "live",
    demo: "#",
    repo: "#",
  },
  {
    title: "Pothole Detection",
    description: "Passive, crowdsourced pothole detection with CV and geotagging",
    stack: ["Computer Vision", "Geodata", "ML"],
    year: "2025",
    status: "archived",
    demo: "#",
    repo: "#",
  },
  {
    title: "MediQueue",
    description: "Hospital queue and management system",
    stack: ["Full-Stack", "Real-time", "Dashboard"],
    year: "2024",
    status: "archived",
    demo: "#",
    repo: "#",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="section-padding relative bg-surface">
      {/* Section annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 03 — SELECTED PROJECTS
      </div>

      <div className="container-grid">
        <div className="col-span-12 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-h2 font-display font-bold"
          >
            Selected Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-muted text-lg mt-4"
          >
            Case studies of systems I've built from concept to deployment.
          </motion.p>
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group relative p-8 bg-bg border border-line rounded-panel hover:border-accent transition-all duration-300"
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`text-mono text-xs px-2 py-1 rounded-pill ${
                    project.status === "live"
                      ? "bg-accent/10 text-accent"
                      : "bg-muted/10 text-muted"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Year */}
              <div className="text-mono text-muted text-xs mb-4">{project.year}</div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted mb-6">{project.description}</p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-mono text-xs px-2 py-1 bg-surface-2 rounded-panel"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  aria-label={`View ${project.title} demo`}
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                  aria-label={`View ${project.title} repository`}
                >
                  <Github size={16} />
                  Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
