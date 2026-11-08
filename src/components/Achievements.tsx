"use client";

import { motion } from "framer-motion";
import { Trophy, Coins, Zap } from "lucide-react";

interface Achievement {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: any;
  highlightTag?: string;
}

const achievements: Achievement[] = [
  {
    id: "hackathon-second",
    category: "Competitive Hackathon",
    title: "2nd Place — Insight 2026 Mini Hackathon",
    subtitle: "Rapid Prototyping & Execution Under Time Constraints",
    description:
      "Secured 2nd place in a competitive multi-team hackathon by architecting, testing, and shipping a functional software prototype within rigorous time parameters.",
    impact:
      "Demonstrated rapid architectural problem definition, efficient division of engineering tasks, and high-impact live prototype delivery to a jury of senior engineers.",
    icon: Trophy,
    highlightTag: "Podium Finish",
  },
  {
    id: "innovation-funding",
    category: "Research & Grant Funding",
    title: "INR 10,000 NewGen IEDC Innovation Funding",
    subtitle: "Sanctioned for HoloGuide AI Assistive Smart Cap Prototype",
    description:
      "Awarded competitive prototype development funding by the NewGen Innovation and Entrepreneurship Development Centre (IEDC) to advance hardware integration for the HoloGuide assistive system.",
    impact:
      "Recognized for tangible social impact, technical novelty in embedded computer vision, and clear market translation potential for visually impaired users.",
    icon: Coins,
    highlightTag: "Grant Award",
  },
  {
    id: "manthan-hackathon",
    category: "24-Hour National Hackathon",
    title: "Participant — MANTHAN 2026 Autonomous Trading Hackathon",
    subtitle: "24-Hour Real-Time Distributed Systems Challenge",
    description:
      "Engineered an autonomous stock trading bot under continuous live market streaming conditions, collaborating on streaming data ingestion and risk logic within a 24-hour sprint.",
    impact:
      "Built resilient distributed messaging pipelines via Apache Kafka and sub-4-second REST execution routines under uninterrupted time pressure.",
    icon: Zap,
    highlightTag: "24-Hour Build",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative bg-surface py-section section-padding">
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
            07 — Honors & Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary mb-6"
          >
            Beyond the code.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-secondary leading-relaxed"
          >
            Demonstrated leadership, innovation grants, and competitive hackathon execution reflecting initiative, community mentorship, and delivery under pressure.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-8 sm:p-10 bg-white rounded-xl border border-border hover:border-primary/50 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-lg bg-surface border border-border text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" strokeWidth={1.75} />
                      </div>
                      <span className="text-xs uppercase tracking-widest font-semibold text-muted">
                        {item.category}
                      </span>
                    </div>
                    {item.highlightTag && (
                      <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-surface border border-border text-secondary">
                        {item.highlightTag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-primary mb-2 tracking-tight group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-body text-secondary mb-6 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-border">
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1 font-semibold">
                    Measurable Contribution:
                  </p>
                  <p className="text-xs text-secondary leading-relaxed">
                    {item.impact}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

