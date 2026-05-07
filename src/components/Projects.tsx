"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, BookOpen, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { ResumeIQImage, GrowlanzerImage, MeetingAppImage, AIExpenseTrackerImage } from "./ProjectImages";
import { GithubIcon } from "./SocialIcons";

type AccentKey = "violet" | "indigo" | "blue" | "cyan";

const accentMap: Record<AccentKey, {
  text: string; border: string; hover: string;
  badgeBg: string; badgeBorder: string;
  glow: string; gradient: string;
}> = {
  violet: {
    text: "text-violet-400", border: "border-violet-400/22", hover: "hover:bg-violet-400/8",
    badgeBg: "bg-violet-400/8", badgeBorder: "border-violet-400/30",
    glow: "rgba(167,139,250,0.18)", gradient: "from-violet-500/25 via-purple-500/10 to-transparent",
  },
  indigo: {
    text: "text-indigo-400", border: "border-indigo-400/22", hover: "hover:bg-indigo-400/8",
    badgeBg: "bg-indigo-400/8", badgeBorder: "border-indigo-400/30",
    glow: "rgba(129,140,248,0.18)", gradient: "from-indigo-500/25 via-purple-500/10 to-transparent",
  },
  blue: {
    text: "text-blue-400", border: "border-blue-400/22", hover: "hover:bg-blue-400/8",
    badgeBg: "bg-blue-400/8", badgeBorder: "border-blue-400/30",
    glow: "rgba(96,165,250,0.18)", gradient: "from-blue-500/25 via-cyan-500/10 to-transparent",
  },
  cyan: {
    text: "text-cyan-400", border: "border-cyan-400/22", hover: "hover:bg-cyan-400/8",
    badgeBg: "bg-cyan-400/8", badgeBorder: "border-cyan-400/30",
    glow: "rgba(6,182,212,0.18)", gradient: "from-cyan-500/25 via-teal-500/10 to-transparent",
  },
};

const projects = [
  {
    slug: "resume-iq",
    num: "01",
    title: "Resume IQ",
    liveUrl: "https://resume-iq-client-seven.vercel.app",
    tagline: "AI-powered ATS resume analyzer with skill gap detection.",
    description:
      "Analyzes resumes for ATS compatibility, detects skill gaps against job requirements, scores keyword density, and generates structured AI improvement suggestions — all in seconds.",
    tech: ["Next.js", "Node.js", "OpenAI API", "PostgreSQL"],
    image: ResumeIQImage,
    accent: "violet" as AccentKey,
    cardBorder: "border-violet-500/18",
    badge: "🤖 AI · ATS Analyzer",
    featured: false,
  },
  {
    slug: "growlanzer",
    num: "02",
    title: "Growlanzer",
    liveUrl: "https://freelancer-99659.web.app",
    tagline: "Freelancer marketplace with live URL, real users, and admin workflows.",
    description:
      "Full-stack freelancer platform with role-based auth, real-time chat, project posting & bidding, admin approval system, and complete CI/CD deployment pipeline.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: GrowlanzerImage,
    accent: "indigo" as AccentKey,
    cardBorder: "border-indigo-500/18",
    badge: "🚀 Live · Deployed",
    featured: true,
  },
  {
    slug: "meeting-app",
    num: "03",
    title: "Real-Time Meeting App",
    liveUrl: "https://visionmeet-75722.web.app",
    tagline: "Lightweight WebRTC video platform with real-time session management.",
    description:
      "Browser-based video conferencing built on WebRTC — no plugins needed. Features real-time multi-participant video/audio, session controls, and Firebase-backed room management.",
    tech: ["React", "WebRTC", "Firebase"],
    image: MeetingAppImage,
    accent: "blue" as AccentKey,
    cardBorder: "border-blue-500/18",
    badge: "📹 WebRTC · Real-Time",
    featured: false,
  },
  {
    slug: "ai-expense-tracker",
    num: "04",
    title: "AI Expense Tracker",
    liveUrl: "https://www.getharvest.com/",
    tagline: "Chatbot-powered expense system with auto-categorization via OpenAI.",
    description:
      "Natural language expense tracking — type 'spent ₹450 on lunch' and the AI auto-categorizes, tracks, and generates spending insights with visual breakdowns by category.",
    tech: ["Python", "OpenAI API", "Prompt Engineering"],
    image: AIExpenseTrackerImage,
    accent: "cyan" as AccentKey,
    cardBorder: "border-cyan-500/18",
    badge: "💰 AI · Python",
    featured: false,
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 130, damping: 22 });
  const springY = useSpring(y, { stiffness: 130, damping: 22 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["15%", "85%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["15%", "85%"]);
  const glareOpacity = useTransform(
    [springX, springY],
    ([lx, ly]: number[]) => Math.sqrt((lx as number) * (lx as number) + (ly as number) * (ly as number)) * 0.14
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
          className="absolute w-40 h-40 rounded-full bg-white/25 blur-2xl"
          style={{ left: glareX, top: glareY, transform: "translate(-50%,-50%)" }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ac = accentMap[project.accent];

  return (
    <AnimatedSection delay={index * 0.08}>
      <TiltCard className="h-full">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={`group relative glass card-shine rounded-2xl overflow-hidden border ${project.cardBorder} h-full flex flex-col`}
          style={{ boxShadow: `0 8px 40px ${ac.glow}` }}
        >
          {/* Top gradient line */}
          <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${ac.text}`} />

          {/* Image */}
          <div className="relative overflow-hidden bg-[#040d1a] h-[195px] flex-shrink-0">
            {/* Project number */}
            <div className="absolute top-3.5 left-3.5 z-20">
              <span className={`num-badge ${ac.text}`} style={{ background: `${ac.badgeBg}`, borderColor: `${ac.badgeBorder}`.replace("border-", "") }}>
                {project.num}
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <project.image />
            </motion.div>

            {/* Gradient overlay */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${ac.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Hover action buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              {project.liveUrl !== "#" && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3.5 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl text-white text-[11px] font-semibold shadow-lg"
                >
                  <ExternalLink size={11} /> Live
                </motion.a>
              )}
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-3.5 py-2 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl text-white text-[11px] font-semibold shadow-lg"
              >
                <GithubIcon size={11} /> Code
              </motion.a>
            </div>

            {/* Badge */}
            <div className="absolute top-3.5 right-3.5 z-20">
              <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold border ${ac.badgeBg} ${ac.badgeBorder} ${ac.text}`}>
                {project.badge}
              </span>
            </div>

            {/* Live dot */}
            {project.featured && (
              <div className="absolute bottom-3.5 right-3.5 z-20 flex items-center gap-1.5 glass border border-emerald-500/25 rounded-full px-2.5 py-1">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[10px] font-semibold text-emerald-300">Live</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col flex-1 gap-2.5">
            <div>
              <h3 className="text-[1rem] font-black text-white tracking-tight leading-snug">{project.title}</h3>
              <p className={`text-xs font-bold mt-0.5 ${ac.text}`}>{project.tagline}</p>
            </div>

            <p className="text-slate-400 text-[12.5px] leading-relaxed flex-1 line-clamp-3">
              {project.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge text-[10px]">{t}</span>
              ))}
            </div>

            {/* Action row */}
            <div className="flex items-center gap-2 flex-wrap pt-2.5 border-t border-white/5">
              <motion.a
                href={project.liveUrl}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-[11px] font-semibold transition-all ${project.liveUrl === "#" ? "opacity-30 pointer-events-none" : ""}`}
              >
                <ArrowUpRight size={10} />
                Live
              </motion.a>
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-[11px] font-semibold transition-all"
              >
                <GithubIcon size={10} />
                Code
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} className="ml-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all border ${ac.text} ${ac.border} ${ac.hover}`}
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
    <section id="projects" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/3 to-transparent pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.18em]">Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Projects</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px] leading-relaxed">
            Production-grade applications built with real architecture, shipped code, and live users.
          </p>
        </AnimatedSection>

        {/* Grid — 1 col mobile, 2 col md+ */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          style={{ perspective: "1400px" }}
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
            className="inline-flex items-center gap-2.5 px-6 py-3 glass border border-white/10 hover:border-white/20 hover:bg-white/5 text-white font-bold rounded-xl text-sm transition-all"
          >
            <GithubIcon size={15} />
            More on GitHub
            <ArrowRight size={13} className="text-cyan-400" />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
