"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, MouseEvent } from "react";
import AnimatedSection from "./AnimatedSection";
import { GrowlanzerImage, AIExpenseTrackerImage, GymAppImage } from "./ProjectImages";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    slug: "growlanzer",
    title: "Growlanzer",
    liveUrl: "https://growlanzer.com",
    tagline: "Freelancer marketplace with live URL, real users, and admin workflows.",
    description:
      "Full-stack freelancer platform with Firebase authentication, real-time chat, admin approval system, and complete deployment pipeline. Currently live at growlanzer.com.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: GrowlanzerImage,
    accent: "indigo",
    gradient: "from-indigo-500/20 to-purple-500/10",
    border: "border-indigo-500/20",
    shadowColor: "rgba(129,140,248,0.15)",
    badge: "🚀 Live · Deployed",
    badgeColor: "text-indigo-400 border-indigo-400/30 bg-indigo-400/8",
    featured: true,
  },
  {
    slug: "ai-expense-tracker",
    title: "AI Expense Tracker",
    liveUrl: "#",
    tagline: "Chatbot-powered expense system with auto-categorization via OpenAI.",
    description:
      "Natural language expense tracking — type 'spent ₹450 on lunch' and the AI auto-categorizes, tracks, and generates spending insights. Built with Python and OpenAI API.",
    tech: ["Python", "OpenAI API", "Prompt Engineering"],
    image: AIExpenseTrackerImage,
    accent: "cyan",
    gradient: "from-cyan-500/20 to-teal-500/10",
    border: "border-cyan-500/20",
    shadowColor: "rgba(6,182,212,0.15)",
    badge: "🤖 AI · Python",
    badgeColor: "text-cyan-400 border-cyan-400/30 bg-cyan-400/8",
    featured: false,
  },
  {
    slug: "gym-app",
    title: "Gym Management App",
    liveUrl: "#",
    tagline: "Full-stack gym system with member management and real-time tracking.",
    description:
      "Complete gym management solution with member directory, attendance tracking, subscription renewals, workout scheduling, and payment integration — all powered by Firebase real-time DB.",
    tech: ["Next.js", "React", "TypeScript", "Firebase"],
    image: GymAppImage,
    accent: "purple",
    gradient: "from-purple-500/20 to-indigo-500/10",
    border: "border-purple-500/20",
    shadowColor: "rgba(168,139,250,0.15)",
    badge: "💪 SaaS · Dashboard",
    badgeColor: "text-purple-400 border-purple-400/30 bg-purple-400/8",
    featured: false,
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const glareX = useTransform(springX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(springY, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(
    [springX, springY],
    ([lx, ly]: number[]) => Math.sqrt(lx * lx + ly * ly) * 0.15
  );

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      {children}
      {/* Glare overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{ opacity: glareOpacity }}
      >
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-white/20 blur-xl"
          style={{
            left: glareX,
            top: glareY,
            transform: "translate(-50%,-50%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <AnimatedSection delay={index * 0.13}>
      <TiltCard className="h-full">
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          className={`group relative glass rounded-2xl overflow-hidden border ${project.border} h-full flex flex-col`}
          style={{ boxShadow: `0 8px 40px ${project.shadowColor}, 0 0 0 1px ${project.border.replace("border-", "").replace("/20", "/10")}` }}
        >
          {/* Project image */}
          <div className="relative overflow-hidden bg-[#040d1a] h-[200px] flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full h-full"
            >
              <project.image />
            </motion.div>

            {/* Image overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
            />

            {/* Badge */}
            <div className="absolute top-3 left-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold border ${project.badgeColor}`}>
                {project.badge}
              </span>
            </div>

            {/* Featured dot */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50">
                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-[1.15rem] font-bold text-white mb-1.5 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <p className={`text-sm font-semibold mb-3 ${
              project.accent === "cyan" ? "text-cyan-400" :
              project.accent === "indigo" ? "text-indigo-400" : "text-purple-400"
            }`}>
              {project.tagline}
            </p>
            <p className="text-slate-400 text-[13px] leading-relaxed mb-5 flex-1">{project.description}</p>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge text-[11px]">{t}</span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <motion.a
                href={project.liveUrl}
                target={project.liveUrl !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-xs font-medium transition-all"
              >
                <ExternalLink size={11} />
                Live
              </motion.a>
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-lg text-white text-xs font-medium transition-all"
              >
                <GithubIcon size={11} />
                GitHub
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }} className="ml-auto">
                <Link
                  href={`/projects/${project.slug}`}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all border ${
                    project.accent === "cyan" ? "text-cyan-400 border-cyan-400/20 hover:bg-cyan-400/8" :
                    project.accent === "indigo" ? "text-indigo-400 border-indigo-400/20 hover:bg-indigo-400/8" :
                    "text-purple-400 border-purple-400/20 hover:bg-purple-400/8"
                  }`}
                >
                  <BookOpen size={11} />
                  Case Study
                  <ArrowRight size={10} />
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ perspective: "1200px" }}>
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
