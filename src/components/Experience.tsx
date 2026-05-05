"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin, Zap } from "lucide-react";
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

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.15em]">Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Experience</h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Experience - left */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <div className="relative glass border border-white/8 rounded-2xl overflow-hidden">
                {/* Top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                {/* Side accent */}
                <div className="absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" />

                <div className="p-7">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/25 flex items-center justify-center">
                      <Briefcase size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white">AI-Powered Software Developer</h3>
                      <p className="text-cyan-400 font-semibold text-sm mt-0.5">Southsmart Technologies Pvt. Ltd.</p>
                      <div className="flex flex-wrap items-center gap-3 mt-1.5">
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <Calendar size={10} /> Aug 2025 – Mar 2026
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs">
                          <MapPin size={10} /> Chennai, India
                        </span>
                        <span className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                          <Zap size={10} /> 7 months
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Points */}
                  <ul className="space-y-3 mb-6">
                    {experiencePoints.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07, duration: 0.4 }}
                        className="flex items-start gap-3 text-slate-400 text-[13.5px] leading-relaxed"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-[7px]" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="pt-5 border-t border-white/6">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {experienceTech.map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Education + status - right */}
          <div className="lg:col-span-2 space-y-5">
            <AnimatedSection delay={0.15}>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                <GraduationCap size={12} className="text-indigo-400" />
                Education
              </p>

              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass border border-indigo-500/15 rounded-xl p-5 group hover:border-indigo-500/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mt-0.5">
                      <GraduationCap size={15} className="text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-bold leading-snug">{edu.degree}</p>
                      <p className="text-slate-400 text-xs mt-1">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <span className="text-slate-600 text-xs flex items-center gap-1">
                          <Calendar size={9} /> {edu.duration}
                        </span>
                        <span className="text-indigo-400 text-xs font-bold">{edu.detail}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatedSection>

            {/* Currently section */}
            <AnimatedSection delay={0.3}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="glass border border-emerald-500/15 rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider">Status</span>
                </div>
                <p className="text-sm font-bold text-white mb-1.5">Open to full-time roles</p>
                <p className="text-slate-400 text-[13px] leading-relaxed">
                  Actively seeking AI / Full Stack developer positions. Available immediately.
                </p>
              </motion.div>
            </AnimatedSection>

            {/* Core strengths */}
            <AnimatedSection delay={0.4}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="glass border border-white/8 rounded-xl p-5"
              >
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">Core Strengths</p>
                <div className="flex flex-wrap gap-2">
                  {["AI App Dev", "Problem Solving", "Prompt Eng.", "Quick Learner", "Team Player"].map((s) => (
                    <span key={s} className="tech-badge text-[11px]">{s}</span>
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
