"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

const skillCategories = [
  {
    label: "Languages",
    icon: "{ }",
    color: "cyan",
    skills: [
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 92 },
      { name: "Python",     level: 78 },
    ],
  },
  {
    label: "Frontend",
    icon: "⚡",
    color: "indigo",
    skills: [
      { name: "React.js",     level: 90 },
      { name: "Next.js",      level: 88 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    label: "Backend & DB",
    icon: "🛠",
    color: "purple",
    skills: [
      { name: "Node.js",           level: 82 },
      { name: "Firebase Firestore", level: 85 },
      { name: "PostgreSQL",         level: 72 },
    ],
  },
  {
    label: "AI & Tools",
    icon: "🤖",
    color: "teal",
    skills: [
      { name: "OpenAI API",         level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Git & GitHub",       level: 90 },
      { name: "Figma",              level: 76 },
    ],
  },
];

const colorMap: Record<string, {
  bar: string; text: string; bg: string; border: string; dot: string; glow: string;
}> = {
  cyan:   { bar: "from-cyan-500 to-cyan-300",     text: "text-cyan-400",   bg: "bg-cyan-500/8",   border: "border-cyan-500/20",   dot: "bg-cyan-400",   glow: "rgba(6,182,212,0.25)" },
  indigo: { bar: "from-indigo-500 to-indigo-300", text: "text-indigo-400", bg: "bg-indigo-500/8", border: "border-indigo-500/20", dot: "bg-indigo-400", glow: "rgba(99,102,241,0.25)" },
  purple: { bar: "from-purple-500 to-purple-300", text: "text-purple-400", bg: "bg-purple-500/8", border: "border-purple-500/20", dot: "bg-purple-400", glow: "rgba(168,85,247,0.25)" },
  teal:   { bar: "from-teal-500 to-teal-300",     text: "text-teal-400",   bg: "bg-teal-500/8",   border: "border-teal-500/20",   dot: "bg-teal-400",   glow: "rgba(20,184,166,0.25)" },
};

const aiTools = [
  { name: "ChatGPT",        icon: "🧠", sub: "GPT-4o" },
  { name: "Claude AI",      icon: "⚡", sub: "Anthropic" },
  { name: "Google Gemini",  icon: "✨", sub: "Gemini 1.5" },
];

const marqueeRow1 = [
  "TypeScript", "JavaScript", "Python", "React.js", "Next.js", "Node.js",
  "Tailwind CSS", "Firebase", "PostgreSQL", "OpenAI API",
];
const marqueeRow2 = [
  "Prompt Engineering", "Git", "GitHub", "Figma", "VS Code",
  "Postman", "HTML5", "CSS3", "Framer Motion", "REST API",
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const c = colorMap[color];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 group-hover:scale-125 transition-transform`} />
          <span className="text-[13px] text-slate-300 font-semibold group-hover:text-white transition-colors">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 + index * 0.08 }}
          className={`text-[11px] font-black tabular-nums ${c.text}`}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: 0.08 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} relative`}
          style={{ boxShadow: `0 0 10px ${c.glow}` }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/25 rounded-full blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.18em]">Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Skills</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px] leading-relaxed">
            Technologies I use daily to build AI-powered, production-grade applications.
          </p>
        </AnimatedSection>

        {/* Skill category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <AnimatedSection key={cat.label} delay={ci * 0.09}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className={`relative glass border ${c.border} hover:border-opacity-60 rounded-2xl p-5 h-full card-shine transition-all`}
                  style={{ boxShadow: `0 4px 30px ${c.glow}` }}
                >
                  {/* Subtle top accent */}
                  <div className={`absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${c.text}`} />

                  {/* Category header */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-10 h-10 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center font-mono font-black leading-none`}>
                      <span className={`${c.text} text-[13px]`}>{cat.icon}</span>
                    </div>
                    <span className={`font-black text-sm ${c.text}`}>{cat.label}</span>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, si) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} color={cat.color} index={si} />
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* AI Tools row */}
        <AnimatedSection delay={0.2}>
          <div className="glass border border-white/8 rounded-2xl p-5 sm:p-6 mb-5">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-base">🤖</span> AI Tools I Use Daily
            </p>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="flex items-center gap-2.5 glass border border-cyan-500/15 hover:border-cyan-500/35 rounded-xl px-4 py-3 transition-all cursor-default"
                >
                  <span className="text-lg">{tool.icon}</span>
                  <div>
                    <p className="text-sm font-bold text-white leading-none">{tool.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{tool.sub}</p>
                  </div>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-dashed border-white/10 text-slate-600 text-sm font-medium">
                + Prompt Engineering
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Marquee tech strips */}
        <AnimatedSection delay={0.28}>
          <div className="glass border border-white/8 rounded-2xl p-5 sm:p-6 overflow-hidden">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-5">
              Full Technology Radar
            </p>

            {/* Row 1 — left to right */}
            <div className="relative overflow-hidden mb-3">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#040d1a] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#040d1a] to-transparent z-10 pointer-events-none" />
              <div className="marquee-track gap-2.5">
                {[...marqueeRow1, ...marqueeRow1].map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="tech-badge cursor-default select-none whitespace-nowrap mx-1"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Row 2 — right to left */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#040d1a] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#040d1a] to-transparent z-10 pointer-events-none" />
              <div className="marquee-track marquee-reverse gap-2.5">
                {[...marqueeRow2, ...marqueeRow2].map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.12, y: -2 }}
                    className="tech-badge cursor-default select-none whitespace-nowrap mx-1"
                    style={{ borderColor: "rgba(129,140,248,0.22)", color: "#a5b4fc", background: "rgba(99,102,241,0.07)" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
