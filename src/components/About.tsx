"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const stats = [
  { value: "8.15", label: "CGPA" },
  { value: "6+", label: "Projects Built" },
  { value: "2nd", label: "Insight Hackathon" },
  { value: "₹10K", label: "Innovation Fund" },
];

const paragraphs = [
  "I'm Chiranthan — a final-year Information Science and Engineering student at JNNCE, Shivamogga. My journey into technology started with curiosity about how systems work, and has since grown into a genuine passion for building things that solve real problems.",
  "Over the past few years, I've explored a range of disciplines — from data analytics and business intelligence to machine learning, computer vision, and full-stack development. I've built banking analytics platforms, AI-powered assistive devices, autonomous trading systems, and more — each project deepening my understanding of what technology can achieve.",
  "What sets me apart isn't specialization in a single domain — it's my ability to connect ideas across disciplines. I approach problems with an engineering mindset: understand, design, build, iterate.",
  "Currently maintaining a CGPA of 8.15, I'm actively seeking opportunities where I can contribute, learn, and grow — whether that's in software engineering, data science, AI/ML, or product development.",
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white py-section section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="uppercase tracking-widest text-label text-muted mb-16"
        >
          02 — About
        </motion.p>

        {/* Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-display font-semibold mb-12"
        >
          A little about me.
        </motion.h2>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Column — Photo */}
          <div className="col-span-1 lg:col-span-2" ref={imageRef}>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-lg"
            >
              <motion.div style={{ y: imageY }}>
                <Image
                  src="/images/chiranthan-profile.jpg"
                  alt="Chiranthan S"
                  width={500}
                  height={600}
                  className="w-full object-cover rounded-lg"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column — Text + Stats */}
          <div className="col-span-1 lg:col-span-3">
            {/* Paragraphs with staggered animation */}
            <div className="space-y-6">
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.25 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-body-lg text-secondary leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Divider */}
            <motion.hr
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="my-12 border-border origin-left"
            />

            {/* Stats Grid */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-left"
                >
                  <p className="text-display font-semibold leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-caption text-muted uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
