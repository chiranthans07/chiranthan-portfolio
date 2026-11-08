"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

// ─── Animation Variants ───────────────────────────────────────────────
const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeIn = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: EASE_PREMIUM,
    },
  },
});

const scaleIn = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay,
      ease: EASE_PREMIUM,
    },
  },
});

const wordContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

const wordReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_PREMIUM,
    },
  },
};

const bounceDown = {
  y: [0, 6, 0],
  transition: {
    duration: 1.8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

// ─── Component ─────────────────────────────────────────────────────────
export default function Hero() {
  const headline = "Engineering ideas into experiences.";
  const words = headline.split(" ");

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden"
    >
      {/* ── Availability Pill ── */}
      <motion.div
        className="absolute top-8 left-1/2 -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 z-10"
        variants={fadeIn(0.1)}
        initial="hidden"
        animate="visible"
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white/80 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-label uppercase tracking-[0.08em] text-muted font-medium">
            Open to Opportunities
          </span>
        </div>
      </motion.div>

      {/* ── Main Content ── */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24 w-full max-w-[1400px] mx-auto pt-24 lg:pt-0">
        {/* Left — Text Content (~60%) */}
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Section Label */}
          <motion.p
            className="text-label uppercase tracking-[0.15em] text-muted font-medium mb-6"
            variants={fadeIn(0.2)}
            initial="hidden"
            animate="visible"
          >
            01 — Introduction
          </motion.p>

          {/* Headline — word-by-word stagger */}
          <motion.h1
            className="text-display-xl font-semibold text-primary mb-8"
            variants={wordContainer}
            initial="hidden"
            animate="visible"
            aria-label={headline}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                variants={wordReveal}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            className="text-body-lg text-secondary max-w-xl mb-10"
            variants={fadeIn(0.8)}
            initial="hidden"
            animate="visible"
          >
            An Information Science engineer exploring the intersection of
            software, data and intelligent technology.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap items-center gap-4"
            variants={fadeIn(1.0)}
            initial="hidden"
            animate="visible"
          >
            <a
              href="/documents/Chiranthan_S_Resume.pdf"
              download
              data-cursor-text="Download"
              className="inline-flex items-center justify-center border border-primary px-8 py-3 text-sm uppercase tracking-wider font-medium text-primary hover:bg-primary hover:text-white transition-all duration-300 ease-premium"
            >
              Resume
            </a>
            <a
              href="#contact"
              data-cursor-text="Contact"
              className="inline-flex items-center justify-center bg-primary text-white px-8 py-3 text-sm uppercase tracking-wider font-medium hover:bg-secondary transition-all duration-300 ease-premium"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Right — Photo (~40%) */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center lg:justify-end"
          variants={scaleIn(0.6)}
          initial="hidden"
          animate="visible"
        >
          <div className="relative group">
            <Image
              src="/images/chiranthan-profile.jpg"
              alt="Chiranthan S — Portrait"
              width={450}
              height={550}
              priority
              className="object-cover rounded-lg w-[280px] h-[340px] sm:w-[350px] sm:h-[430px] lg:w-[450px] lg:h-[550px] transition-transform duration-500 ease-premium group-hover:scale-[1.02]"
            />
            {/* Subtle decorative border offset */}
            <div className="absolute -inset-3 border border-border rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        variants={fadeIn(1.4)}
        initial="hidden"
        animate="visible"
      >
        <span className="text-label uppercase tracking-[0.15em] text-muted font-medium">
          Scroll
        </span>
        <motion.div animate={bounceDown}>
          <ChevronDown className="w-4 h-4 text-muted" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
