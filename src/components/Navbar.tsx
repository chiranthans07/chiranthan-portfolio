"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    // Small delay so mobile menu closes before scrolling
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E5E5E5]"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-sm font-bold tracking-wider uppercase text-[#111111]"
            data-cursor-text="Home"
          >
            CHIRANTHAN S
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  data-cursor-text="Navigate"
                  className={`relative text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-300 py-1 group ${
                    isActive ? "text-[#111111]" : "text-[#777777] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-[#111111] origin-left transition-transform duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-[6px] z-[60]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            data-cursor-text="Menu"
          >
            <span
              className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-center ${
                menuOpen
                  ? "rotate-45 translate-y-[3.75px]"
                  : "rotate-0 translate-y-0"
              }`}
            />
            <span
              className={`block w-6 h-[1.5px] bg-[#111111] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] origin-center ${
                menuOpen
                  ? "-rotate-45 -translate-y-[3.75px]"
                  : "rotate-0 translate-y-0"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-[55] bg-white flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + i * 0.06,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-2xl tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 ${
                    activeSection === link.id
                      ? "font-semibold text-[#111111]"
                      : "font-light text-[#777777] hover:text-[#111111]"
                  }`}
                  data-cursor-text="Navigate"
                >
                  {activeSection === link.id && (
                    <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  )}
                  <span>{link.label}</span>
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
