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
      { name: "Python", level: 78 },
    ],
  },
  {
    label: "Frontend",
    icon: "⚡",
    color: "indigo",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 93 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    label: "Backend & DB",
    icon: "🛠",
    color: "purple",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Firebase Firestore", level: 85 },
      { name: "PostgreSQL", level: 72 },
    ],
  },
  {
    label: "AI & Tools",
    icon: "🤖",
    color: "teal",
    skills: [
      { name: "OpenAI API", level: 80 },
      { name: "Prompt Engineering", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 76 },
    ],
  },
];

const colorMap: Record<string, { bar: string; text: string; bg: string; border: string; dot: string }> = {
  cyan:   { bar: "from-cyan-500 to-cyan-400",     text: "text-cyan-400",   bg: "bg-cyan-500/8",   border: "border-cyan-500/20",   dot: "bg-cyan-400" },
  indigo: { bar: "from-indigo-500 to-indigo-400", text: "text-indigo-400", bg: "bg-indigo-500/8", border: "border-indigo-500/20", dot: "bg-indigo-400" },
  purple: { bar: "from-purple-500 to-purple-400", text: "text-purple-400", bg: "bg-purple-500/8", border: "border-purple-500/20", dot: "bg-purple-400" },
  teal:   { bar: "from-teal-500 to-teal-400",     text: "text-teal-400",   bg: "bg-teal-500/8",   border: "border-teal-500/20",   dot: "bg-teal-400" },
};

const aiTools = [
  { name: "ChatGPT", icon: "🧠" },
  { name: "Claude AI", icon: "⚡" },
  { name: "Google Gemini", icon: "✨" },
];

const allTech = [
  "TypeScript", "JavaScript", "Python", "React.js", "Next.js",
  "Node.js", "Tailwind CSS", "Firebase", "PostgreSQL", "OpenAI API",
  "Prompt Engineering", "Git", "GitHub", "Figma", "VS Code",
  "Postman", "HTML5", "CSS3", "Framer Motion", "REST API",
];

function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const c = colorMap[color];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
          <span className="text-[13px] text-slate-300 font-medium group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className={`text-[11px] font-bold tabular-nums ${c.text}`}>{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.05 + index * 0.08, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} relative`}
        >
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/20 rounded-full blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.15em]">Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Skills</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px]">
            Technologies I use daily to build AI-powered, production-grade applications.
          </p>
        </AnimatedSection>

        {/* Skill category grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
          {skillCategories.map((cat, ci) => {
            const c = colorMap[cat.color];
            return (
              <AnimatedSection key={cat.label} delay={ci * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass border ${c.border} rounded-2xl p-5 h-full transition-colors hover:border-opacity-50`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-lg font-mono font-bold leading-none`}>
                      <span className={`${c.text} text-sm`}>{cat.icon}</span>
                    </div>
                    <span className={`font-bold text-sm ${c.text}`}>{cat.label}</span>
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
        <AnimatedSection delay={0.25}>
          <div className="glass border border-white/8 rounded-2xl p-5 mb-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="text-base">🤖</span> AI Tools I Use Daily
            </p>
            <div className="flex flex-wrap gap-3">
              {aiTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex items-center gap-2 glass border border-cyan-500/15 hover:border-cyan-500/30 rounded-xl px-4 py-2.5 transition-colors cursor-default"
                >
                  <span className="text-lg">{tool.icon}</span>
                  <span className="text-sm font-semibold text-slate-300">{tool.name}</span>
                </motion.div>
              ))}
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-white/10 text-slate-600 text-sm">
                + Prompt Engineering
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech tag cloud */}
        <AnimatedSection delay={0.3}>
          <div className="glass border border-white/8 rounded-2xl p-6">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
              Full Technology Radar
            </p>
            <div className="flex flex-wrap gap-2">
              {allTech.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.025 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="tech-badge cursor-default select-none"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
