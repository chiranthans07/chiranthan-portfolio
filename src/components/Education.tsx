"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, CheckCircle2 } from "lucide-react";

interface EducationEntry {
  degree: string;
  major?: string;
  institution: string;
  location: string;
  period: string;
  gradeLabel: string;
  gradeValue: string;
  description: string;
  coursework: string[];
}

const educationList: EducationEntry[] = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    major: "Information Science and Engineering",
    institution: "Jawaharlal Nehru New College of Engineering (JNNCE)",
    location: "Shivamogga, Karnataka, India",
    period: "2023 — 2027",
    gradeLabel: "Cumulative GPA",
    gradeValue: "8.15 / 10",
    description:
      "Four-year undergraduate engineering curriculum emphasizing foundational computing theory, data structures, algorithm design, relational databases, operating systems, and intelligent machine learning systems.",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (Java/Python/C++)",
      "Database Management Systems (DBMS)",
      "Operating Systems & Architecture",
      "Computer Networks & Protocols",
      "Machine Learning & AI Foundations",
      "Software Engineering & SQA",
    ],
  },
  {
    degree: "Pre-University — Science",
    major: "Physics, Chemistry, Mathematics, Computer Science (PCMCS)",
    institution: "Pace Ultra Modern PU College",
    location: "Shivamogga, Karnataka, India",
    period: "2021 — 2023",
    gradeLabel: "Board Percentage",
    gradeValue: "90.5%",
    description:
      "Rigorous higher secondary foundation in mathematical analysis, physical sciences, and introductory computer science fundamentals with distinction standing.",
    coursework: [
      "Advanced Mathematics & Calculus",
      "Computer Science Fundamentals",
      "Physics & Computational Logic",
      "Analytical Chemistry",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-white py-section section-padding">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            08 — Academic Background
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary mb-6"
          >
            The foundation.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-secondary leading-relaxed"
          >
            Formal engineering grounding combining algorithmic discipline, mathematical foundations, and system architecture.
          </motion.p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-8 max-w-4xl">
          {educationList.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 sm:p-10 rounded-xl border border-border bg-white hover:border-primary/40 transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-border">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-muted mb-2">
                    <GraduationCap className="w-4 h-4 text-primary" />
                    <span>{item.period}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
                    {item.degree}
                  </h3>
                  {item.major && (
                    <p className="text-base sm:text-lg font-medium text-secondary">
                      {item.major}
                    </p>
                  )}
                  <p className="text-sm text-muted font-medium pt-1">
                    {item.institution}
                  </p>
                </div>

                {/* Score Pill */}
                <div className="flex-shrink-0 self-start md:self-auto p-4 rounded-lg bg-surface border border-border text-left md:text-right">
                  <span className="block text-[11px] uppercase tracking-wider font-semibold text-muted">
                    {item.gradeLabel}
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-bold text-primary">
                    {item.gradeValue}
                  </span>
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <p className="text-body text-secondary leading-relaxed">
                  {item.description}
                </p>

                {/* Core Coursework */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-muted mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Relevant Curricular Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-surface text-secondary border border-border"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

