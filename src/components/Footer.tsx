"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/6 py-10 cursor-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
              <Code2 size={13} className="text-white" />
            </div>
            <span className="font-semibold text-white/70 text-sm">
              Ragadeepan<span className="text-cyan-400">.</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {year} Ragadeepan R. Built with{" "}
            <Heart size={10} className="text-rose-400 inline" /> using Next.js & Tailwind
          </p>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { href: "https://github.com/Ragadeepan", icon: GithubIcon },
              { href: "https://www.linkedin.com/in/ragadeepan-r-15144a2bb", icon: LinkedinIcon },
              { href: "mailto:ragadeepan1437@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <motion.a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 glass border border-white/8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:border-white/15 transition-colors"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
