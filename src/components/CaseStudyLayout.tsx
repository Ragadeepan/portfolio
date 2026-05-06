"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";

interface Section {
  title: string;
  content: string | string[];
}

interface CaseStudyProps {
  title: string;
  tagline: string;
  badge: string;
  tech: string[];
  sections: Section[];
  accentColor: string;
  imageSlot: React.ReactNode;
  liveUrl?: string;
}

export default function CaseStudyLayout({
  title,
  tagline,
  badge,
  tech,
  sections,
  accentColor,
  imageSlot,
  liveUrl = "#",
}: CaseStudyProps) {
  const accentClass =
    accentColor === "cyan"
      ? "text-cyan-400"
      : accentColor === "indigo"
      ? "text-indigo-400"
      : "text-teal-400";

  const borderClass =
    accentColor === "cyan"
      ? "border-cyan-500/20"
      : accentColor === "indigo"
      ? "border-indigo-500/20"
      : "border-teal-500/20";

  return (
    <div className="min-h-screen bg-[#030712]">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030712] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pt-24 pb-14 relative">
          {/* Back */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to projects
            </Link>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className={`tech-badge ${accentClass}`}>{badge}</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-lg font-medium mb-6 ${accentClass}`}
          >
            {tagline}
          </motion.p>

          {/* Tech */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {tech.map((t) => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex gap-3 flex-wrap"
          >
            <a
              href={liveUrl}
              target={liveUrl !== "#" ? "_blank" : undefined}
              rel={liveUrl !== "#" ? "noopener noreferrer" : undefined}
              className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-medium rounded-xl text-sm shadow-lg shadow-cyan-500/20 ${liveUrl === "#" ? "opacity-40 pointer-events-none" : ""}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
            <a
              href="https://github.com/Ragadeepan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 glass border border-white/10 text-white font-medium rounded-xl text-sm"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Project image */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className={`max-w-4xl mx-auto px-5 sm:px-8 pb-16 relative`}
        >
          <div className={`rounded-2xl overflow-hidden border ${borderClass} shadow-2xl bg-[#050d1f]`}>
            {imageSlot}
          </div>
        </motion.div>
      </div>

      {/* Case study content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
        <div className="space-y-12">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className={`glass border border-white/8 rounded-2xl p-7`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-bold uppercase tracking-widest ${accentClass}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-white/6" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-2.5">
                  {section.content.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${accentColor === "cyan" ? "bg-cyan-400/60" : accentColor === "indigo" ? "bg-indigo-400/60" : "bg-teal-400/60"}`} />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 text-sm leading-relaxed">{section.content}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/8 hover:border-white/15 text-white rounded-xl text-sm font-medium transition-colors"
          >
            <ArrowLeft size={14} />
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
