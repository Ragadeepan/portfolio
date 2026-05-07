"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Zap, CheckCircle2, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const experiencePoints = [
  "Developed AI-powered web and software applications as part of a software development team.",
  "Built and integrated intelligent features using AI tools and APIs (OpenAI, GPT integrations).",
  "Worked on chatbot systems and basic AI agent workflows for client-facing products.",
  "Contributed to development of web and application-based solutions from design to deployment.",
  "Handled real-time data and system workflows; participated in debugging and testing pipelines.",
  "Collaborated with team members in feature development and UI performance improvement.",
  "Gained exposure to Special Purpose Machines (SPM) and system integration workflows.",
];

const experienceTech = ["React", "Next.js", "TypeScript", "Node.js", "Firebase", "OpenAI API", "Python"];

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Dr. M.G.R Educational and Research Institute",
    duration: "2022 – 2025",
    detail: "CGPA: 6.95",
  },
];

const strengths = [
  { label: "AI App Dev",      icon: "🤖" },
  { label: "Problem Solving", icon: "🧩" },
  { label: "Prompt Eng.",     icon: "✨" },
  { label: "Quick Learner",   icon: "⚡" },
  { label: "Team Player",     icon: "🤝" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.18em]">Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Experience</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ── Left: Experience card ── */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="left">
              <div className="relative glass border border-white/8 rounded-2xl overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/55 to-transparent" />
                {/* Left side accent */}
                <div className="absolute left-0 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-cyan-500/35 to-transparent" />

                <div className="p-6 sm:p-7">
                  {/* Role header */}
                  <div className="flex items-start gap-4 mb-7">
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex-shrink-0 w-13 h-13 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/25 flex items-center justify-center"
                    >
                      <Briefcase size={20} className="text-cyan-400" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-black text-white leading-snug">AI-Powered Software Developer</h3>
                      <p className="text-cyan-400 font-bold text-sm mt-0.5">Southsmart Technologies Pvt. Ltd.</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2">
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <Calendar size={10} className="flex-shrink-0" /> Aug 2025 – Mar 2026
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500 text-xs">
                          <MapPin size={10} className="flex-shrink-0" /> Chennai, India
                        </span>
                        <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                          <Zap size={10} /> 7 months
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Timeline bullet points */}
                  <div className="relative pl-6 before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-cyan-500/40 before:via-cyan-500/20 before:to-transparent">
                    <ul className="space-y-4">
                      {experiencePoints.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.07, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                          className="flex items-start gap-3 text-slate-400 text-[13.5px] leading-relaxed relative"
                        >
                          <CheckCircle2
                            size={14}
                            className="flex-shrink-0 text-cyan-500/60 mt-[3px] absolute -left-6"
                          />
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech used */}
                  <div className="pt-5 mt-5 border-t border-white/6">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {experienceTech.map((t) => (
                        <motion.span
                          key={t}
                          whileHover={{ scale: 1.08, y: -1 }}
                          className="tech-badge"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Right: Education + Status + Strengths ── */}
          <div className="lg:col-span-2 space-y-4">
            {/* Education */}
            <AnimatedSection delay={0.12}>
              <div className="glass border border-indigo-500/15 rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap size={13} className="text-indigo-400" />
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Education</p>
                  </div>
                  {education.map((edu, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mt-0.5">
                        <GraduationCap size={16} className="text-indigo-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold leading-snug">{edu.degree}</p>
                        <p className="text-slate-500 text-xs mt-1 leading-relaxed">{edu.institution}</p>
                        <div className="flex items-center gap-3 mt-1.5">
                          <span className="text-slate-600 text-xs flex items-center gap-1">
                            <Calendar size={9} /> {edu.duration}
                          </span>
                          <span className="text-indigo-400 text-xs font-black">{edu.detail}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Status */}
            <AnimatedSection delay={0.22}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 }}
                className="relative glass border border-emerald-500/18 rounded-2xl p-5 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-[11px] font-black text-emerald-300 uppercase tracking-wider">Status · Available</span>
                  </div>
                  <p className="text-sm font-black text-white mb-1.5">Open to full-time roles</p>
                  <p className="text-slate-400 text-[13px] leading-relaxed">
                    Actively seeking AI / Full Stack developer positions. Available immediately.
                  </p>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Core Strengths */}
            <AnimatedSection delay={0.32}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38 }}
                className="glass border border-white/8 rounded-2xl p-5"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={12} className="text-cyan-400" />
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Core Strengths</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {strengths.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, scale: 0.88 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className="flex items-center gap-2 glass border border-white/6 rounded-xl px-3 py-2.5 cursor-default"
                    >
                      <span className="text-sm">{s.icon}</span>
                      <span className="text-slate-300 text-xs font-semibold">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
