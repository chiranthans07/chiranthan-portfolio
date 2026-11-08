"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Download, ExternalLink, Eye, X, CheckCircle, ShieldCheck } from "lucide-react";

export default function Resume() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const pdfPath = "/documents/Chiranthan_S_Resume.pdf";

  return (
    <section id="resume" className="relative bg-surface py-section section-padding">
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
            09 — Verified Credentials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary mb-6"
          >
            A closer look.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-secondary leading-relaxed"
          >
            Review my complete chronological curriculum vitae, academic credentials, and project history in official document format.
          </motion.p>
        </div>

        {/* Resume Preview Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl bg-white rounded-2xl border border-border p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-border">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-surface border border-border flex items-center justify-center flex-shrink-0">
                <FileText className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest font-mono text-muted">
                    Curriculum Vitae (PDF)
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Single Page
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary font-mono">
                  Chiranthan_S_Resume.pdf
                </h3>
                <p className="text-xs text-muted mt-1 font-mono">
                  Format: PDF document • Size: ~104 KB • Updated: Current Academic Session
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={() => setIsViewerOpen(true)}
                data-cursor-text="Preview"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-primary text-xs uppercase tracking-widest font-semibold text-primary hover:bg-surface transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>

              <a
                href={pdfPath}
                download="Chiranthan_S_Resume.pdf"
                data-cursor-text="Download"
                className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-secondary transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Quick Snapshot Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
            <div className="p-4 rounded-lg bg-surface/60 border border-border/80">
              <span className="text-xs uppercase tracking-wider text-muted font-medium block mb-1">
                Engineering CGPA
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-primary">
                8.15 / 10
              </span>
            </div>
            <div className="p-4 rounded-lg bg-surface/60 border border-border/80">
              <span className="text-xs uppercase tracking-wider text-muted font-medium block mb-1">
                Graduation
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-primary">
                Class of 2027
              </span>
            </div>
            <div className="p-4 rounded-lg bg-surface/60 border border-border/80">
              <span className="text-xs uppercase tracking-wider text-muted font-medium block mb-1">
                Core Stack
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-primary">
                Python & SQL
              </span>
            </div>
            <div className="p-4 rounded-lg bg-surface/60 border border-border/80">
              <span className="text-xs uppercase tracking-wider text-muted font-medium block mb-1">
                Domain Scope
              </span>
              <span className="text-xl sm:text-2xl font-mono font-bold text-primary">
                AI / Data / SE
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Interactive PDF Modal Viewer ── */}
      <AnimatePresence>
        {isViewerOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsViewerOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col border border-border z-10 overflow-hidden"
            >
              {/* Header */}
              <div className="px-6 py-4 border-b border-border bg-white flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="text-sm font-bold text-primary font-mono">
                      Chiranthan_S_Resume.pdf
                    </h3>
                    <p className="text-[11px] text-muted">
                      Original PDF Document
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border text-xs font-medium text-secondary hover:text-primary hover:border-primary transition-colors"
                  >
                    <span>Open in New Tab</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={pdfPath}
                    download="Chiranthan_S_Resume.pdf"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-primary text-white text-xs font-medium hover:bg-secondary transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setIsViewerOpen(false)}
                    className="p-1.5 rounded-full hover:bg-surface text-secondary hover:text-primary transition-colors"
                    aria-label="Close PDF Viewer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="flex-1 bg-surface relative">
                <iframe
                  src={`${pdfPath}#toolbar=1&navpanes=0`}
                  title="Chiranthan S — Resume"
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

