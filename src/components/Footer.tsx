"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const footerLinks = [
  { label: "Home",       href: "#home" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills" },
  { label: "Contact",    href: "#contact" },
];

const socialLinks = [
  { href: "https://github.com/Ragadeepan",                     icon: GithubIcon,  label: "GitHub" },
  { href: "https://www.linkedin.com/in/ragadeepan-r-15144a2bb", icon: LinkedinIcon, label: "LinkedIn" },
  { href: "mailto:ragadeepan1437@gmail.com",                    icon: Mail,        label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/6 cursor-auto overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-cyan-500/35 to-transparent" />
      {/* Background glow */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-cyan-500/3 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-8">
          {/* Brand */}
          <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/22">
              <Code2 size={14} className="text-white" />
            </div>
            <div>
              <span className="font-black text-white/85 text-sm block">
                Ragadeepan<span className="text-cyan-400">.</span>
              </span>
              <span className="text-[10px] text-slate-600 font-medium">AI Full Stack Developer</span>
            </div>
          </motion.div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-1 gap-y-1">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-all neon-underline"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
                className="w-9 h-9 glass border border-white/8 hover:border-cyan-500/30 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-all"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/6 to-transparent mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600 flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            © {year} Ragadeepan R.
            <span className="flex items-center gap-1">
              Built with <Heart size={10} className="text-rose-400" /> using Next.js & Tailwind
            </span>
          </p>

          <motion.a
            href="https://github.com/Ragadeepan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-cyan-400 font-medium transition-colors"
          >
            <GithubIcon size={12} />
            View Source
            <ArrowUpRight size={11} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
