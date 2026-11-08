"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Copy, Check, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const email = "chiranthanchiru077@gmail.com";
  const phone = "+91 9620978462";
  const linkedin = "https://linkedin.com/in/chiranthan-s07";
  const github = "https://github.com/chiranthans07";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Compose mailto link with encoded parameters
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setTimeout(() => setSentSuccess(false), 5000);
    }, 600);
  };

  return (
    <section id="contact" className="relative bg-white py-section section-padding">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label mb-4"
          >
            10 — Contact & Collaboration
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-display font-semibold text-primary mb-6"
          >
            Let&apos;s build something meaningful.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-body-lg text-secondary leading-relaxed"
          >
            Have an interesting opportunity, a challenging engineering problem or an idea worth building? I&apos;d love to connect.
          </motion.p>
        </div>

        {/* Contact Grid: Direct Channels + Interactive Inquiry */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 pb-24 border-b border-border">
          {/* Left Column: Direct Communication Cards */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-muted mb-4">
              Direct Channels
            </h3>

            {/* Email Card */}
            <div className="p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider font-mono text-muted">
                  Email
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-bold text-primary hover:text-secondary transition-colors break-all"
                data-cursor-text="Email"
              >
                {email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-xl border border-border bg-white hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-wider font-mono text-muted">
                  Direct Line
                </span>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${phone.replace(/\s+/g, "")}`}
                className="text-lg sm:text-xl font-bold text-primary hover:text-secondary transition-colors"
                data-cursor-text="Call"
              >
                {phone}
              </a>
            </div>

            {/* Social / Professional Networks */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="LinkedIn"
                className="p-5 rounded-xl border border-border hover:border-primary/50 bg-white group flex flex-col justify-between transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <LinkedinIcon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs text-muted block">Network</span>
                  <span className="text-sm font-bold text-primary">LinkedIn</span>
                </div>
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-text="GitHub"
                className="p-5 rounded-xl border border-border hover:border-primary/50 bg-white group flex flex-col justify-between transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <GithubIcon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs text-muted block">Codebase</span>
                  <span className="text-sm font-bold text-primary">GitHub</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Messaging Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl border border-border bg-surface/50">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-muted mb-2">
                Send an Inquiry
              </h3>
              <p className="text-sm text-secondary mb-8">
                Send a direct note. Clicking submit routes your message straight into your email client.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-primary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-primary focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                    Subject / Context
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Full-Time Opportunity / Engineering Project"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-primary focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the problem, vision, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-white text-sm text-primary focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    data-cursor-text="Send"
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white text-xs uppercase tracking-widest font-semibold hover:bg-secondary transition-colors rounded-sm"
                  >
                    <span>{isSending ? "Preparing Email..." : "Transmit Message"}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  {sentSuccess && (
                    <span className="text-xs text-emerald-700 font-medium">
                      Email client launched!
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* ── Editorial Footer ── */}
        <footer className="pt-16 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-sm font-bold tracking-wider uppercase text-primary block">
              CHIRANTHAN S.
            </span>
            <p className="text-xs text-muted mt-1">
              Designed with curiosity. Built with technology.
            </p>
          </div>

          <div className="flex flex-col md:items-end text-xs text-muted font-mono space-y-1">
            <span>Shivamogga, Karnataka, India</span>
            <span>© {currentYear} Chiranthan S. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
