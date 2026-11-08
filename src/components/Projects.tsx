"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, ShieldAlert, Cpu, Bot, FileText, Activity, Sparkles } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  icon: any;
  featuredAward?: string;
  details: {
    overview: string;
    problem: string;
    objective: string;
    role: string;
    techStack: { category: string; tools: string }[];
    approach: string[];
    keyFeatures: string[];
    challenges: string[];
    outcomes: string[];
    plannedFeatures?: string[];
    githubUrl?: string;
    statusBadge: string;
  };
}

const projects: Project[] = [
  {
    id: "finsight-360",
    number: "01",
    title: "FinSight 360",
    subtitle: "Banking Operations & Risk Intelligence Platform",
    category: "Data Analytics & Enterprise Intelligence",
    description:
      "An integrated banking analytics system engineered to process complex transaction streams, detect systemic fraud signatures, and replace static reports with executive intelligence dashboards.",
    tech: ["Python", "MySQL", "Tableau", "Power BI", "Microsoft Excel"],
    icon: ShieldAlert,
    details: {
      overview:
        "FinSight 360 is an enterprise-oriented banking analytics architecture engineered to synthesize raw transactional telemetry into actionable executive intelligence across branch networks, risk monitoring, and customer intelligence.",
      problem:
        "Conventional financial reporting pipelines in mid-tier retail banking rely on fragmented batch reconciliations, leading to delayed anomaly detection, opaque branch efficiency metrics, and missed fraud exposure windows.",
      objective:
        "Architect an end-to-end analytical pipeline capable of cleansing, joining, and analyzing multifaceted banking datasets, feeding high-fidelity interactive visualization dashboards for risk and operations leadership.",
      role: "Lead Developer & Data Analyst — Structured data pipelines, automated ETL logic in Python/SQL, and synthesized multi-dimensional Tableau dashboards.",
      techStack: [
        { category: "Core Pipeline", tools: "Python (Pandas, NumPy), SQL Data Pipelines" },
        { category: "Relational Store", tools: "MySQL (Optimized Indexing, Joins, Aggregations)" },
        { category: "Business Intelligence", tools: "Tableau Desktop, Microsoft Power BI, Excel Pivot Engines" },
      ],
      approach: [
        "Constructed automated ingestion and sanitization routines for synthetic multi-branch banking records containing hundreds of thousands of ledger entries.",
        "Engineered relational schemas in MySQL normalized to 3NF with tailored indexing to optimize aggregate risk metric queries.",
        "Deployed interactive Tableau visual cockpits enabling drill-downs from regional aggregates to individual account alert patterns.",
      ],
      keyFeatures: [
        "Real-time fraud threshold monitoring and pattern recognition",
        "Branch transaction velocity & liquidity distribution heatmaps",
        "Customer lifetime activity and churn risk profiling",
        "Automated reporting replacement for daily banking reconciliation",
      ],
      challenges: [
        "Managing multi-table relational integrity with synthetic high-cardinality financial records.",
        "Balancing dashboard interactive query latency with complex analytical aggregations.",
      ],
      outcomes: [
        "Eliminated manual reporting latency by translating raw relational records into real-time BI dashboards.",
        "Established structured analytical paradigms for branch liquidity analysis and fraud alert auditing.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Verified Project",
    },
  },
  {
    id: "hologuide",
    number: "02",
    title: "HoloGuide",
    subtitle: "AI-Driven Assistive Wearable for the Visually Impaired",
    category: "Edge AI & Computer Vision",
    description:
      "An intelligent wearable smart cap integrating embedded computer vision, real-time spatial obstacle detection, and environmental telemetry to empower independent navigation for visually impaired individuals.",
    tech: ["Python", "Raspberry Pi 4", "YOLOv3-tiny", "OpenCV", "NEO-6M GPS", "Sensors"],
    icon: Cpu,
    featuredAward: "₹10,000 NewGen IEDC Innovation Funding",
    details: {
      overview:
        "HoloGuide (also conceptualized as HoloCap) is an assistive IoT wearable designed to bridge the gap between visual impairment and autonomous environmental awareness through low-latency edge AI and sensory feedback.",
      problem:
        "Over 250 million visually impaired people worldwide face severe navigation hazards, spatial disorientation, and physical obstacles that traditional tactile canes cannot adequately anticipate in dynamic urban settings.",
      objective:
        "Engineer a self-contained, head-mounted assistive system running optimized object detection models on edge hardware paired with acoustic spatial guidance and environmental monitoring.",
      role: "Team Leader & Core Embedded AI Developer — Built the edge computer vision pipeline, integrated peripheral sensor busses, and managed hardware-software synchronization.",
      techStack: [
        { category: "Compute Unit", tools: "Raspberry Pi 4 Model B (4GB)" },
        { category: "Computer Vision", tools: "Python, OpenCV, YOLOv3-tiny" },
        { category: "Hardware & Telemetry", tools: "USB Webcam Module, NEO-6M GPS, Ambient Light & Temp Sensors" },
        { category: "Feedback Subsystem", tools: "Text-to-Speech (eSpeak/pyttsx3) Voice Assistance" },
      ],
      approach: [
        "Optimized YOLOv3-tiny weights and inference graph for execution on ARM Cortex-A72 architecture without thermal throttling.",
        "Interfaced analog/digital ambient sensors to establish context-aware situational cues (such as sudden dark corridors or excessive heat).",
        "Designed structured audio cue logic providing directional prompt priority (e.g., immediate forward obstacles preempting generic landscape descriptors).",
      ],
      keyFeatures: [
        "Sub-second edge inference for pedestrian obstacles, vehicles, and pathways",
        "Acoustic synthesized guidance delivering directional distance cues",
        "Ambient temperature and illuminance sensory monitoring",
        "GPS coordinate logging for geo-assistive positioning protocols",
      ],
      challenges: [
        "Constrained frame rates when executing deep learning inference on resource-limited embedded hardware.",
        "Mitigating battery drain and managing thermal dissipation within a wearable headgear form factor.",
      ],
      outcomes: [
        "Awarded ₹10,000 NewGen IEDC Innovation Funding for tangible prototype viability.",
        "Delivered a functional hardware-software prototype with real-time detection and voice feedback.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Funded Prototype — ₹10,000 Award",
    },
  },
  {
    id: "autonomous-stock-bot",
    number: "03",
    title: "Autonomous Stock Trading Bot",
    subtitle: "High-Frequency Event Stream Trading Engine",
    category: "Distributed Systems & Fintech",
    description:
      "A distributed trading engine engineered under high pressure during MANTHAN 2026, streaming real-time Kafka market feeds and executing automated order routing within strict sub-4-second decision windows.",
    tech: ["Python", "Apache Kafka", "REST API", "Market Telemetry", "Async IO"],
    icon: Activity,
    featuredAward: "MANTHAN 2026 24-Hour Hackathon Build",
    details: {
      overview:
        "Developed during the high-intensity MANTHAN 2026 24-Hour Autonomous Trading Hackathon, this system consumes continuous market tick streams, evaluates risk boundaries, and dispatches automated execution orders via broker APIs.",
      problem:
        "Algorithmic execution under time-constrained hackathon constraints requires robust fault-tolerant message digestion, deterministic execution latencies, and rigorous risk containment to prevent catastrophic drawdown.",
      objective:
        "Construct an autonomous, event-driven trading pipeline capable of parsing real-time streaming market events via Kafka, calculating algorithmic buy/sell triggers, and routing authenticated orders via REST API under a 3–4 second SLA.",
      role: "Core Developer (System Architecture, Risk Logic & Kafka Ingestion) — Collaborated in a 24-hour sprint to implement asynchronous event consumption and order routing.",
      techStack: [
        { category: "Streaming Core", tools: "Apache Kafka, Event Producers/Consumers" },
        { category: "Execution Layer", tools: "Python 3, Asynchronous REST APIs, Requests, HTTPx" },
        { category: "Analytical Engine", tools: "Mathematical moving window computations, Risk filters" },
      ],
      approach: [
        "Architected an event consumer loop subscribed to continuous Kafka market topics.",
        "Constructed strict risk checks: maximum drawdown limits, position sizing limits, and stale-tick cancellation.",
        "Implemented retry-safe REST API endpoints to push signed execution orders within the mandatory 3-4 second execution deadline.",
      ],
      keyFeatures: [
        "Real-time event stream consumption via Apache Kafka",
        "Sub-4-second tick-to-execution latency budget",
        "Dynamic risk guardrails and stop-loss enforcement",
        "Full audit logging of order execution states and slippage metrics",
      ],
      challenges: [
        "Maintaining message ordering and preventing consumer lag under bursts of synthetic market events.",
        "Tight 24-hour sprint deadline requiring zero-defect concurrency handling.",
      ],
      outcomes: [
        "Successfully deployed and demonstrated the autonomous bot during the 24-hour MANTHAN 2026 hackathon.",
        "Validated asynchronous event-driven design principles for algorithmic finance.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Hackathon Production Build",
    },
  },
  {
    id: "smart-robo-nurse",
    number: "04",
    title: "Smart Robo Nurse",
    subtitle: "Autonomous Patient Telemetry & Care Assistance Concept",
    category: "Healthcare IoT & Telemetry",
    description:
      "A collaborative healthcare engineering concept designed to streamline post-operative clinical workflows through non-invasive telemetry acquisition and intelligent caregiver alert prioritization.",
    tech: ["IoT", "Python", "Sensors Integration", "Telemetry Dashboards", "Embedded Systems"],
    icon: Bot,
    details: {
      overview:
        "Conceptualized and developed with a 4-person engineering team, Smart Robo Nurse explores the convergence of medical sensor integration and automated caregiver assistance for post-surgery inpatient environments.",
      problem:
        "Clinical nursing staff face acute cognitive overload and physical fatigue from repetitive manual vital-sign recordings, creating risks of delayed detection in deteriorating patient conditions.",
      objective:
        "Design an autonomous robotic and telemetry assistance architecture that continuously monitors core biological indicators and alerts clinical staff to anomalous physiological trends.",
      role: "Co-Developer (Team of 4) — Contributed to sensor interfacing paradigms, vital signal acquisition protocols, and architectural documentation.",
      techStack: [
        { category: "Sensor Interface", tools: "Pulse Oximetry (SpO₂), Temperature Probes, Heart Rate Sensors" },
        { category: "Compute & Control", tools: "Python Microcontroller Integration, Serial Communication" },
        { category: "Analytics & UI", tools: "Patient Monitoring Dashboard Concept, Data Logger" },
      ],
      approach: [
        "Engineered sensor integration routines to read analog bio-signals and normalize calibration curves.",
        "Delineated a phased implementation matrix: Phase 1 (hardware vital telemetry) vs Phase 2 (autonomous mobility and dispensing).",
        "Drafted real-time visualization UI mockups for bedside nurse station telemetry tracking.",
      ],
      keyFeatures: [
        "Heart-rate (BPM) continuous acquisition (Implemented in prototype)",
        "Body temperature monitoring (Implemented in prototype)",
        "SpO₂ peripheral capillary oxygen saturation capture (Implemented in prototype)",
        "Caregiver notification and vital threshold alarm logic (Implemented)",
        "Automated scheduled medication dispensing mechanism (Planned / Concept)",
        "Long-term vital trend regression analysis (Planned / Concept)",
      ],
      challenges: [
        "Motion artifacts in continuous optical heart-rate sensor readings.",
        "Clear demarcation between prototype demonstration capabilities and regulatory medical device requirements.",
      ],
      outcomes: [
        "Presented comprehensive multi-sensor patient monitoring prototype.",
        "Demonstrated working real-time sensor ingestion and alert triggers.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Academic Team Concept & Prototype",
    },
  },
  {
    id: "oral-cancer-detection",
    number: "05",
    title: "Oral Cancer Detection via Deep Learning",
    subtitle: "Convolutional Neural Network Medical Vision Exploration",
    category: "Deep Learning & Medical Vision",
    description:
      "An exploratory deep learning computer vision model utilizing transfer-learned ResNet-50 architecture to classify visual mucosal indicators associated with chronic tobacco and gutka usage.",
    tech: ["Python", "Deep Learning", "ResNet-50", "PyTorch / TensorFlow", "Computer Vision"],
    icon: Sparkles,
    details: {
      overview:
        "An academic exploration into deep convolutional neural networks for identifying oral epithelial abnormalities, trained on image datasets reflecting lesion variations associated with chronic tobacco consumption.",
      problem:
        "Early-stage oral malignant transformations are frequently overlooked during routine oral examinations, particularly in high-consumption regions with limited access to specialized oncological screeners.",
      objective:
        "Investigate how pre-trained deep residual networks (ResNet-50) can be fine-tuned to classify preliminary tissue abnormalities without claiming clinically certified diagnostic authority.",
      role: "Solo Researcher & Developer — Data pre-processing, augmentation pipelines, model fine-tuning, and confusion matrix evaluation.",
      techStack: [
        { category: "Framework", tools: "Python, PyTorch / TensorFlow, torchvision" },
        { category: "Architecture", tools: "ResNet-50 (Residual Deep Convolutional Network)" },
        { category: "Image Processing", tools: "OpenCV, Albumentations, Matplotlib" },
      ],
      approach: [
        "Curated and normalized photographic datasets of oral mucosal lesions.",
        "Applied data augmentation (rotations, color jittering, zooms) to combat sample scarcity and class imbalance.",
        "Leveraged ImageNet pre-trained weights for transfer learning, retraining top classification heads.",
      ],
      keyFeatures: [
        "Pre-trained ResNet-50 backbone fine-tuning",
        "Class activation mapping for feature localization",
        "Rigorous cross-validation training regime",
        "Explicit academic framing omitting unverified clinical claims",
      ],
      challenges: [
        "Dataset heterogeneity and lighting variability in mucosal photography.",
        "Ensuring objective evaluation metrics without overstating clinical deployment readiness.",
      ],
      outcomes: [
        "Gained deep technical fluency in residual network backpropagation and transfer learning dynamics.",
        "Documented reproducible image classification workflow with validation benchmarks.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Exploratory Deep Learning Project",
    },
  },
  {
    id: "ai-resume-analyzer",
    number: "06",
    title: "AI Resume Analyzer",
    subtitle: "NLP-Driven Talent & Job Description Matching",
    category: "Natural Language Processing",
    description:
      "An automated NLP application that parses candidate CVs, extracts verified technical competencies, and computes bidirectional semantic match scores against job description specifications.",
    tech: ["Python", "NLP", "Text Extraction", "Scikit-learn", "Cosine Similarity"],
    icon: FileText,
    details: {
      overview:
        "A focused software tool designed to demystify automated recruitment screening by decomposing resume text into structured taxonomy entities and scoring contextual alignment against target job requisitions.",
      problem:
        "Job applicants often struggle to gauge how closely their resumes match algorithmic screening systems, while hiring teams face high volumes of non-structured applicant text.",
      objective:
        "Build a deterministic Python pipeline for text tokenization, keyword extraction, and vector-space similarity ranking between candidate resumes and job criteria.",
      role: "Developer — Implemented PDF parsing, NLP tokenization, skill dictionaries, and scoring modules.",
      techStack: [
        { category: "Core NLP", tools: "Python, Regular Expressions, Tokenizers, NLTK/spaCy" },
        { category: "Vector Modeling", tools: "TF-IDF Vectorization, Scikit-learn, Cosine Similarity" },
        { category: "Document Parsing", tools: "PyPDF2 / pdfplumber, Text extraction utilities" },
      ],
      approach: [
        "Engineered document ingestion filters to extract plain text from diverse PDF layouts.",
        "Created an entity extraction lookup map for programming languages, frameworks, and engineering foundations.",
        "Calculated vector distance scores between extracted resume vectors and parsed job requisitions.",
      ],
      keyFeatures: [
        "Automated PDF document parsing and text sanitization",
        "Domain-specific skill extraction algorithms",
        "Deterministic cosine match score computation",
        "Identified skill gap recommendations for applicants",
      ],
      challenges: [
        "Handling non-standard resume column formatting and stylistic typographic variations.",
        "Minimizing false positives in multi-word technical terminology matching.",
      ],
      outcomes: [
        "Functional parsing tool delivering accurate skill breakdowns and compatibility percentages.",
        "Demonstrated practical utility in streamlining recruitment self-assessments.",
      ],
      githubUrl: "https://github.com/chiranthans07",
      statusBadge: "Completed Software Tool",
    },
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative bg-white py-section section-padding">
      {/* ── Section Header ── */}
      <div className="max-w-[1400px] mx-auto mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-label mb-4"
        >
          04 — Selected Work
        </motion.p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary max-w-2xl"
          >
            Engineering rigor meets purposeful design.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body text-muted max-w-md"
          >
            A curated portfolio of software architectures, computer vision wearables, data intelligence platforms, and event-driven systems.
          </motion.p>
        </div>
      </div>

      {/* ── Projects List ── */}
      <div className="max-w-[1400px] mx-auto space-y-0 divide-y divide-border border-t border-b border-border">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="group relative py-12 md:py-16 transition-colors duration-500 hover:bg-surface/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 md:gap-12">
                {/* Left Meta: Number & Category */}
                <div className="flex lg:flex-col justify-between items-start lg:w-44 flex-shrink-0">
                  <span className="font-mono text-3xl md:text-5xl font-light text-border group-hover:text-primary transition-colors duration-300">
                    {project.number}
                  </span>
                  <div className="mt-2 lg:mt-6">
                    <span className="inline-block text-[11px] uppercase tracking-widest text-muted font-medium">
                      {project.category}
                    </span>
                    {project.featuredAward && (
                      <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#111111]/5 text-[11px] font-medium text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {project.featuredAward}
                      </div>
                    )}
                  </div>
                </div>

                {/* Center Content: Title, Description, Tech */}
                <div className="flex-1 max-w-3xl">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-secondary" strokeWidth={1.5} />
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary tracking-tight group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-muted uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-body text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-surface text-secondary border border-border/80 group-hover:border-primary/20 transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Action: Case Study Trigger */}
                <div className="flex lg:flex-col items-end justify-between self-stretch lg:self-auto pt-4 lg:pt-0">
                  <button
                    onClick={() => setSelectedProject(project)}
                    data-cursor-text="Explore"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-xs uppercase tracking-widest font-semibold text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 ease-premium shadow-sm hover:shadow"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                  <span className="text-[11px] font-mono text-muted hidden lg:block">
                    {project.details.statusBadge}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── Case Study Modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-y-auto border border-border z-10"
            >
              {/* Sticky Modal Top Bar */}
              <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-border px-8 py-5 flex items-center justify-between z-20">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted font-semibold tracking-wider">
                    CASE STUDY // {selectedProject.number}
                  </span>
                  <span className="text-border">|</span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                    {selectedProject.title}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  data-cursor-text="Close"
                  className="p-2 rounded-full hover:bg-surface text-secondary hover:text-primary transition-colors"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Inner Content */}
              <div className="p-8 md:p-12 space-y-12">
                {/* Title & Headline */}
                <div>
                  <div className="inline-block px-3 py-1 rounded bg-surface border border-border text-xs uppercase tracking-widest font-medium text-muted mb-4">
                    {selectedProject.category}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                    {selectedProject.title}
                  </h2>
                  <p className="text-lg text-muted font-medium">
                    {selectedProject.subtitle}
                  </p>
                  {selectedProject.featuredAward && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      {selectedProject.featuredAward}
                    </div>
                  )}
                </div>

                {/* High-level Overview & Problem Statement */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted">
                      01. Context & Overview
                    </h4>
                    <p className="text-body text-secondary leading-relaxed">
                      {selectedProject.details.overview}
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted">
                      02. Problem Statement
                    </h4>
                    <p className="text-body text-secondary leading-relaxed">
                      {selectedProject.details.problem}
                    </p>
                  </div>
                </div>

                {/* Role & Objective */}
                <div className="p-6 bg-surface rounded-lg border border-border space-y-4">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-1">
                      Objective
                    </h4>
                    <p className="text-body text-primary font-medium">
                      {selectedProject.details.objective}
                    </p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-1">
                      Role & Technical Contribution
                    </h4>
                    <p className="text-body text-secondary">
                      {selectedProject.details.role}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Breakdown */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-4">
                    03. Architecture & Tech Stack
                  </h4>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {selectedProject.details.techStack.map((stack) => (
                      <div
                        key={stack.category}
                        className="p-4 rounded-lg border border-border bg-white"
                      >
                        <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                          {stack.category}
                        </p>
                        <p className="text-caption text-secondary">
                          {stack.tools}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Approach */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-4">
                    04. Implementation Methodology
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.details.approach.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-body text-secondary">
                        <span className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-4">
                    05. Key Engineering Capabilities
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.details.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3.5 rounded border border-border bg-surface/40"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-secondary font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Planned vs Implemented features (if any, like Smart Robo Nurse) */}
                {selectedProject.details.plannedFeatures && (
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-4">
                      Roadmap & Planned Features
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {selectedProject.details.plannedFeatures.map((pf, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3.5 rounded border border-dashed border-border bg-white"
                        >
                          <span className="text-xs font-mono text-muted uppercase">Planned:</span>
                          <span className="text-sm text-muted">{pf}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges & Outcomes */}
                <div className="grid md:grid-cols-2 gap-8 border-t border-border pt-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-3">
                      Technical Challenges Faced
                    </h4>
                    <ul className="space-y-2 text-sm text-secondary list-disc pl-4">
                      {selectedProject.details.challenges.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-semibold text-muted mb-3">
                      Measurable Outcomes & Learnings
                    </h4>
                    <ul className="space-y-2 text-sm text-secondary list-disc pl-4">
                      {selectedProject.details.outcomes.map((o, i) => (
                        <li key={i}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    {selectedProject.details.githubUrl && (
                      <a
                        href={selectedProject.details.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-white text-xs uppercase tracking-wider font-semibold hover:bg-secondary transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub Profile / Repositories</span>
                      </a>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-6 py-2.5 border border-border text-xs uppercase tracking-wider font-semibold text-secondary hover:text-primary hover:border-primary transition-colors"
                  >
                    Close Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
