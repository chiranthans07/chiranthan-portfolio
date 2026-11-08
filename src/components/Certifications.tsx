"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ExternalLink, Calendar, Building2 } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  focus: string[];
}

const certifications: Certification[] = [
  {
    title: "Fundamentals of Machine Learning and Artificial Intelligence",
    issuer: "AWS Training and Certification",
    date: "Jul 2026",
    category: "Cloud AI & Machine Learning",
    focus: ["Cloud Machine Learning Architectures", "AI Workload Foundations", "Predictive Modeling Basics"],
  },
  {
    title: "Data Analyst Skill Path: Zero to Hero in Excel, SQL and Python",
    issuer: "Udemy",
    date: "Oct 2026",
    category: "Data Analytics & Engineering",
    focus: ["Advanced SQL Queries & Joins", "Excel Pivot & Modeling", "Exploratory Python Pipelines"],
  },
  {
    title: "Career Essentials in Data Analysis",
    issuer: "Microsoft & LinkedIn",
    date: "Sep 2025",
    category: "Business Intelligence",
    focus: ["Data Literacy & Cleansing", "Visualization Best Practices", "Statistical Insight Communication"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "Aug 2025",
    category: "Virtual Work Simulation",
    focus: ["Enterprise Data Quality Assessment", "Forensic Data Investigation", "Executive Dashboard Storytelling"],
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-white py-section section-padding">
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
            06 — Continuous Learning
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary mb-6"
          >
            Continuous learning.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-secondary leading-relaxed"
          >
            Industry certifications and structured virtual job simulations validating data analytics, machine learning fundamentals, and enterprise problem-solving frameworks.
          </motion.p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-xl border border-border bg-white hover:border-primary/40 hover:bg-surface/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-surface border border-border">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
                      {cert.category}
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-black transition-colors leading-snug">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm font-medium text-secondary mb-6">
                  <Building2 className="w-4 h-4 text-muted" />
                  <span>{cert.issuer}</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-muted">
                    Competencies Verified:
                  </p>
                  <ul className="space-y-1.5">
                    {cert.focus.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-secondary">
                        <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

