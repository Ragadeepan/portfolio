"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Code2, Home, FolderGit2, Briefcase, Wrench, Award, Mail } from "lucide-react";

const navLinks = [
  { label: "Home",       href: "#home",          icon: Home },
  { label: "Projects",   href: "#projects",       icon: FolderGit2 },
  { label: "Experience", href: "#experience",     icon: Briefcase },
  { label: "Skills",     href: "#skills",         icon: Wrench },
  { label: "Certs",      href: "#certifications", icon: Award },
  { label: "Contact",    href: "#contact",        icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  let lastY = 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
    if (latest > lastY + 60 && latest > 200) {
      setHidden(true);
    } else if (latest < lastY - 10) {
      setHidden(false);
    }
    lastY = latest;
  });

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "projects", "experience", "skills", "certifications", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass border-b border-white/8 shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
      >
        {/* Top gradient accent line when scrolled */}
        {scrolled && (
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
        )}

        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo("#home")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/25 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <Code2 size={14} className="text-white relative z-10" />
            </div>
            <span className="font-bold text-white/85 text-sm tracking-wide group-hover:text-white transition-colors">
              Ragadeepan<span className="text-cyan-400 font-black">.</span>
            </span>
          </motion.button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="relative px-4 py-2 text-sm font-medium group"
                  >
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        isActive ? "text-white" : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/6 border border-white/8"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              className="relative px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-lg shadow-lg shadow-cyan-500/22 hover:shadow-cyan-500/35 transition-shadow overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/12 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span className="relative">Hire Me</span>
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            onClick={() => setMobileOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={mobileOpen ? "x" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(300px,85vw)] glass border-l border-white/8 md:hidden flex flex-col"
              style={{ boxShadow: "-20px 0 60px rgba(0,0,0,0.5)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-white/8">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                    <Code2 size={13} className="text-white" />
                  </div>
                  <span className="font-bold text-white/90 text-sm">
                    Ragadeepan<span className="text-cyan-400">.</span>
                  </span>
                </div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 px-4 py-5 flex flex-col gap-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.055, ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                      onClick={() => scrollTo(link.href)}
                      className={`w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-3 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/12 to-indigo-500/8 text-white border border-cyan-500/20"
                          : "text-slate-400 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={isActive ? "text-cyan-400" : "text-slate-600"}
                      />
                      {link.label}
                      {isActive && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      )}
                    </motion.button>
                  );
                })}
              </nav>

              {/* Download CTA */}
              <div className="px-5 pb-8 pt-2">
                <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-5" />
                <a
                  href="#"
                  className="relative block w-full text-center px-4 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-active:translate-x-full transition-transform duration-500" />
                  Download Resume
                </a>
                <p className="text-center text-[10px] text-slate-600 mt-3">
                  Available immediately · Chennai, India
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
