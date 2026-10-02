"use client";

import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail, Copy, Check, MapPin, Clock } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "karthik@example.com"; // Replace with actual email

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormState({ name: "", email: "", message: "" });
    alert("Message sent! I'll get back to you soon.");
  };

  // Get current time in IST
  const currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -90 }}
        transition={{
          duration: 0.8,
          delay: i * 0.03,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section id="contact" ref={ref} className="section-padding relative bg-surface overflow-hidden">
      {/* Registration marks */}
      <div className="registration-mark absolute top-8 left-8" />
      <div className="registration-mark absolute top-8 right-8" />

      {/* Section annotation */}
      <div className="annotation absolute top-24 left-8 opacity-50">
        // 08 — CONTACT
      </div>

      <div className="container-grid">
        {/* Giant headline */}
        <div className="col-span-12 mb-16">
          <h2 className="text-display text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.9] perspective-1000">
            {splitText("Let's build")}
            <br />
            {splitText("something.")}
          </h2>
        </div>

        {/* Two columns */}
        <div className="col-span-12 lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            {/* Email with copy */}
            <div>
              <p className="text-mono text-muted text-xs mb-2">EMAIL</p>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="text-2xl font-medium hover:text-accent transition-colors"
                >
                  {email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-2 hover:bg-bg rounded-panel transition-colors"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check size={20} className="text-accent" />
                  ) : (
                    <Copy size={20} className="text-muted" />
                  )}
                </button>
              </div>
            </div>

            {/* Location & Time */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-mono text-muted text-xs mb-2">LOCATION</p>
                <div className="flex items-center gap-2 text-text">
                  <MapPin size={16} className="text-accent" />
                  <span>Tamil Nadu, India</span>
                </div>
              </div>
              <div>
                <p className="text-mono text-muted text-xs mb-2">LOCAL TIME</p>
                <div className="flex items-center gap-2 text-text">
                  <Clock size={16} className="text-accent" />
                  <span>{currentTime} IST</span>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-3 p-4 bg-accent/10 border border-accent/20 rounded-panel">
              <div className="status-dot" />
              <span className="text-accent font-medium">
                Available for internships & freelance projects
              </span>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-bg border border-line hover:border-accent rounded-panel transition-all duration-300 hover:scale-110"
                whileHover={{ y: -4 }}
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-bg border border-line hover:border-accent rounded-panel transition-all duration-300 hover:scale-110"
                whileHover={{ y: -4 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href={`mailto:${email}`}
                className="p-4 bg-bg border border-line hover:border-accent rounded-panel transition-all duration-300 hover:scale-110"
                whileHover={{ y: -4 }}
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Contact form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="col-span-12 lg:col-span-6"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="text-mono text-muted text-xs mb-2 block">
                NAME
              </label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 bg-bg border border-line rounded-panel focus:border-accent focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-mono text-muted text-xs mb-2 block">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 bg-bg border border-line rounded-panel focus:border-accent focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-mono text-muted text-xs mb-2 block">
                MESSAGE
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 bg-bg border border-line rounded-panel focus:border-accent focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <MagneticButton variant="primary" className="w-full" onClick={() => {}}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </MagneticButton>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="container-grid mt-24 pt-12 border-t border-line"
      >
        <div className="col-span-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            © 2026 Karthik. Built with Next.js, GSAP, and attention to detail.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-mono text-accent hover:underline"
          >
            Back to top ↑
          </button>
        </div>
      </motion.div>
    </section>
  );
}
