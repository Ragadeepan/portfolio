"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { ResumeIQImage, GrowlanzerImage, MeetingAppImage, AIExpenseTrackerImage } from "./ProjectImages";
import { GithubIcon } from "./SocialIcons";

type AccentKey = "violet" | "indigo" | "blue" | "cyan";

const accentMap: Record<AccentKey, { text: string; border: string; hover: string; badgeBg: string; badgeBorder: string }> = {
  violet: { text: "text-violet-400", border: "border-violet-400/20", hover: "hover:bg-violet-400/8", badgeBg: "bg-violet-400/8", badgeBorder: "border-violet-400/30" },
  indigo: { text: "text-indigo-400", border: "border-indigo-400/20", hover: "hover:bg-indigo-400/8", badgeBg: "bg-indigo-400/8", badgeBorder: "border-indigo-400/30" },
  blue:   { text: "text-blue-400",   border: "border-blue-400/20",   hover: "hover:bg-blue-400/8",   badgeBg: "bg-blue-400/8",   badgeBorder: "border-blue-400/30"   },
  cyan:   { text: "text-cyan-400",   border: "border-cyan-400/20",   hover: "hover:bg-cyan-400/8",   badgeBg: "bg-cyan-400/8",   badgeBorder: "border-cyan-400/30"   },
};

const projects = [
  {
    slug: "resume-iq",
    title: "Resume IQ",
    liveUrl: "#",
    tagline: "AI-powered ATS resume analyzer with skill gap detection.",
    description:
      "Analyzes resumes for ATS compatibility, detects skill gaps against job requirements, scores keyword density, and generates structured AI improvement suggestions — all in seconds.",
    tech: ["Next.js", "Node.js", "OpenAI API", "PostgreSQL"],
    image: ResumeIQImage,
    accent: "violet" as AccentKey,
    gradient: "from-violet-500/20 to-purple-500/10",
    cardBorder: "border-violet-500/20",
    shadowColor: "rgba(167,139,250,0.15)",
    badge: "🤖 AI · ATS Analyzer",
    featured: false,
  },
  {
    slug: "growlanzer",
    title: "Growlanzer",
    liveUrl: "https://growlanzer.com",
    tagline: "Freelancer marketplace with live URL, real users, and admin workflows.",
    description:
      "Full-stack freelancer platform with role-based auth, real-time chat, project posting & bidding, admin approval system, and complete CI/CD deployment pipeline. Live at growlanzer.com.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: GrowlanzerImage,
    accent: "indigo" as AccentKey,
    gradient: "from-indigo-500/20 to-purple-500/10",
    cardBorder: "border-indigo-500/20",
    shadowColor: "rgba(129,140,248,0.15)",
    badge: "🚀 Live · Deployed",
    featured: true,
  },
  {
    slug: "meeting-app",
    title: "Real-Time Meeting App",
    liveUrl: "#",
    tagline: "Lightweight WebRTC video platform with real-time session management.",
    description:
      "Fast, browser-based video conferencing built on WebRTC — no plugins needed. Features real-time multi-participant video/audio, session controls, interactive UI, and Firebase-backed room management.",
    tech: ["React", "WebRTC", "Firebase"],
    image: MeetingAppImage,
    accent: "blue" as AccentKey,
    gradient: "from-blue-500/20 to-cyan-500/10",
    cardBorder: "border-blue-500/20",
    shadowColor: "rgba(96,165,250,0.15)",
    badge: "📹 WebRTC · Real-Time",
    featured: false,
  },
  {
    slug: "ai-expense-tracker",
    title: "AI Expense Tracker",
    liveUrl: "#",
    tagline: "Chatbot-powered expense system with auto-categorization via OpenAI.",
    description:
      "Natural language expense tracking — type 'spent ₹450 on lunch' and the AI auto-categorizes, tracks, and generates spending insights with visual breakdowns by category.",
    tech: ["Python", "OpenAI API", "Prompt Engineering"],
    image: AIExpenseTrackerImage,
    accent: "cyan" as AccentKey,
    gradient: "from-cyan-500/20 to-teal-500/10",
    cardBorder: "border-cyan-500/20",
    shadowColor: "rgba(6,182,212,0.15)",
    badge: "💰 AI · Python",
    featured: false,
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(
    [springX, springY],
    ([lx, ly]: number[]) => Math.sqrt(lx * lx + ly * ly) * 0.12
  );

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{ opacity: glareOpacity }}
      >
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-white/20 blur-xl"
          style={{ left: glareX, top: glareY, transform: "translate(-50%,-50%)" }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ac = accentMap[project.accent];

  return (
    <AnimatedSection delay={index * 0.1}>
      <TiltCard className="h-full">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`group relative glass rounded-2xl overflow-hidden border ${project.cardBorder} h-full flex flex-col`}
          style={{ boxShadow: `0 8px 40px ${project.shadowColor}` }}
        >
          {/* Image */}
          <div className="relative overflow-hidden bg-[#040d1a] h-[200px] flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="w-full h-full"
            >
              <project.image />
            </motion.div>

            {/* Gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Hover overlay with quick-action buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              {project.liveUrl !== "#" && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium"
                >
                  <ExternalLink size={11} /> Live
                </motion.a>
              )}
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium"
              >
                <GithubIcon size={11} /> GitHub
              </motion.a>
            </div>

            {/* Badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold border ${ac.badgeBg} ${ac.badgeBorder} ${ac.text}`}>
                {project.badge}
              </span>
            </div>

            {/* Live dot */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <div className="relative w-2.5 h-2.5">
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-[1.05rem] font-bold text-white mb-1 tracking-tight">
              {project.title}
            </h3>
            <p className={`text-xs font-semibold mb-3 ${ac.text}`}>
              {project.tagline}
            </p>
            <p className="text-slate-400 text-[12.5px] leading-relaxed mb-4 flex-1">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge text-[10.5px]">{t}</span>
              ))}
            </div>

            {/* Action row */}
            <div className="flex items-center gap-2 flex-wrap pt-1 border-t border-white/5">
              <motion.a
                href={project.liveUrl}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-[11px] font-medium transition-all ${project.liveUrl === "#" ? "opacity-40 pointer-events-none" : ""}`}
              >
                <ExternalLink size={10} />
                Live
              </motion.a>
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-[11px] font-medium transition-all"
              >
                <GithubIcon size={10} />
                GitHub
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="ml-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all border ${ac.text} ${ac.border} ${ac.hover}`}
                >
                  <BookOpen size={10} />
                  Case Study
                  <ArrowRight size={9} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </TiltCard>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.15em]">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Projects</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px]">
            Production-grade applications built with real architecture, shipped code, and live users.
          </p>
        </AnimatedSection>

        {/* 4-card responsive grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
          style={{ perspective: "1200px" }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="mt-12 text-center" delay={0.3}>
          <motion.a
            href="https://github.com/Ragadeepan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/10 hover:border-white/20 text-white font-semibold rounded-xl text-sm"
          >
            <GithubIcon size={15} />
            More on GitHub
            <ArrowRight size={14} className="text-cyan-400" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
