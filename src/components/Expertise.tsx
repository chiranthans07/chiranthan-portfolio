"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

interface Category {
  name: string;
  skills: string[];
}

const categories: Category[] = [
  {
    name: "Programming & Core CS",
    skills: [
      "Python",
      "C",
      "SQL",
      "HTML",
      "Data Structures & Algorithms",
      "OOP",
      "Operating Systems",
      "DBMS",
      "Computer Networks",
      "REST APIs",
    ],
  },
  {
    name: "Data & Analytics",
    skills: [
      "Microsoft Excel",
      "Tableau",
      "SQL Queries & Joins",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Dashboard Development",
      "Business Intelligence",
    ],
  },
  {
    name: "AI & Machine Learning",
    skills: [
      "Machine Learning Fundamentals",
      "Supervised & Unsupervised Learning",
      "Scikit-learn",
      "Computer Vision",
      "YOLOv3",
      "NLP (basics)",
    ],
  },
  {
    name: "Python Ecosystem",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
  },
  {
    name: "Databases",
    skills: [
      "MySQL",
      "Oracle SQL",
      "Database Design",
      "Normalization",
      "Joins & Subqueries",
      "Aggregate Functions",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Anaconda",
      "MySQL Workbench",
      "Tableau",
      "Power BI",
      "AWS (foundational)",
    ],
  },
];

export default function Expertise() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="bg-surface py-section section-padding"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-label uppercase tracking-widest text-muted mb-6">
            03 — EXPERTISE
          </p>
          <h2 className="text-display font-semibold mb-4">
            Tools, technologies &amp; thinking.
          </h2>
          <p className="text-body-lg text-muted mb-16 max-w-xl">
            A broad foundation across multiple technical domains.
          </p>
        </motion.div>

        {/* Tabbed interface */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
          {/* Mobile: horizontal scrollable tabs */}
          <motion.div
            className="lg:hidden mb-8 -mx-6 px-6 overflow-x-auto scrollbar-hide"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex gap-3 min-w-max pb-2">
              {categories.map((cat, idx) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-caption font-medium transition-all duration-300 ${
                    activeIndex === idx
                      ? "bg-primary text-white"
                      : "bg-white text-secondary hover:text-primary border border-border"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Desktop: left sidebar tabs */}
          <motion.nav
            className="hidden lg:flex flex-col shrink-0 w-64"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.name}
                onClick={() => setActiveIndex(idx)}
                className={`relative text-left py-4 pl-6 text-caption font-medium transition-colors duration-300 ${
                  activeIndex === idx
                    ? "text-primary"
                    : "text-muted hover:text-secondary"
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + idx * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Left border indicator */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-[3px] rounded-full transition-all duration-500 ease-premium ${
                    activeIndex === idx
                      ? "bg-primary opacity-100 scale-y-100"
                      : "bg-transparent opacity-0 scale-y-0"
                  }`}
                />
                {cat.name}
              </motion.button>
            ))}
          </motion.nav>

          {/* Right content: skill chips */}
          <div className="flex-1 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap gap-3"
              >
                {categories[activeIndex].skills.map((skill, idx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.92, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: idx * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border border-border rounded-full px-5 py-2.5 text-caption text-secondary hover:border-primary hover:text-primary transition-colors duration-300 cursor-default select-none"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
