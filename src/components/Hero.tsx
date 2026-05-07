"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight, Sparkles, MapPin, Code2, Cpu, Globe, Layers } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import TypewriterText from "./TypewriterText";
import ConstellationBg from "./ConstellationBg";
import { useState, useRef } from "react";

const roles = [
  "AI Full Stack Developer",
  "React & Next.js Engineer",
  "UI/UX Craftsman",
  "AI Integration Specialist",
  "Frontend Architect",
];

const stats = [
  { value: "4+", label: "Projects", icon: Layers },
  { value: "7mo", label: "Experience", icon: Cpu },
  { value: "10+", label: "Technologies", icon: Code2 },
  { value: "AI", label: "Specialization", icon: Globe },
];

const marqueeItems = [
  "TypeScript", "React.js", "Next.js", "Node.js", "Python",
  "OpenAI API", "Firebase", "PostgreSQL", "Tailwind CSS",
  "Framer Motion", "REST API", "Git & GitHub", "Figma",
];

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Atmospheric glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-500/20 blur-3xl scale-[1.4]" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-purple-500/15 to-transparent blur-2xl scale-[1.2]" />

      {/* Orbit ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(200px, 50vw, 270px)",
          height: "clamp(200px, 50vw, 270px)",
          border: "1px dashed rgba(6,182,212,0.25)",
        }}
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: "clamp(200px, 50vw, 270px)",
          height: "clamp(200px, 50vw, 270px)",
        }}
      >
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
          style={{ top: "-5px", left: "50%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Orbit ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "clamp(240px, 60vw, 320px)",
          height: "clamp(240px, 60vw, 320px)",
          border: "1px dashed rgba(129,140,248,0.18)",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: "clamp(240px, 60vw, 320px)",
          height: "clamp(240px, 60vw, 320px)",
        }}
      >
        <div
          className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.7)]"
          style={{ bottom: "-4px", left: "50%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Profile image */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        className="relative"
        style={{ width: "clamp(160px, 38vw, 224px)", height: "clamp(160px, 38vw, 224px)" }}
      >
        <div className="absolute inset-0 rounded-full p-[2.5px] bg-gradient-to-br from-cyan-400 via-indigo-500 to-purple-500">
          <div className="w-full h-full rounded-full bg-[#0a0f1e] overflow-hidden">
            {!imgError ? (
              <Image
                src="/profile.jpg"
                alt="Ragadeepan R"
                fill
                className="object-cover object-top rounded-full"
                priority
                onError={() => setImgError(true)}
              />
            ) : (
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="fb-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0d1b3e" /><stop offset="100%" stopColor="#060d1f" />
                  </radialGradient>
                  <radialGradient id="fb-skin" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="#d4956a" /><stop offset="100%" stopColor="#b87850" />
                  </radialGradient>
                  <linearGradient id="fb-shirt" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0891b2" /><stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#fb-bg)" />
                <path d="M42 200 L42 142 Q58 128 100 128 Q142 128 158 142 L158 200 Z" fill="url(#fb-shirt)" opacity="0.9" />
                <rect x="87" y="113" width="26" height="18" rx="7" fill="url(#fb-skin)" />
                <ellipse cx="100" cy="93" rx="30" ry="32" fill="url(#fb-skin)" />
                <path d="M70 81 Q72 57 100 55 Q128 57 130 81 Q120 61 100 61 Q80 61 70 81Z" fill="#1a0800" opacity="0.92" />
                <ellipse cx="88" cy="91" rx="5" ry="5.5" fill="#16213e" />
                <ellipse cx="112" cy="91" rx="5" ry="5.5" fill="#16213e" />
                <ellipse cx="89.5" cy="89.5" rx="1.8" ry="1.8" fill="white" opacity="0.9" />
                <ellipse cx="113.5" cy="89.5" rx="1.8" ry="1.8" fill="white" opacity="0.9" />
                <path d="M91 106 Q100 113 109 106" stroke="#a06040" strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>

        {/* Glow behind photo */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 blur-xl -z-10" />

        {/* Status badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass border border-emerald-500/30 rounded-full px-3.5 py-1.5 flex items-center gap-1.5 shadow-xl whitespace-nowrap z-10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-semibold text-emerald-300">Open to work</span>
        </motion.div>
      </motion.div>

      {/* Floating tech badges — hidden on very small screens */}
      {[
        { label: "React", angle: -40, dist: 145, delay: 1.4 },
        { label: "AI/ML", angle: 32, dist: 145, delay: 1.55 },
        { label: "Next.js", angle: 218, dist: 145, delay: 1.7 },
      ].map((badge) => {
        const rad = (badge.angle * Math.PI) / 180;
        return (
          <motion.div
            key={badge.label}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: badge.delay, type: "spring", stiffness: 200 }}
            style={{
              position: "absolute",
              left: `calc(50% + ${Math.cos(rad) * badge.dist}px)`,
              top: `calc(50% + ${Math.sin(rad) * badge.dist}px)`,
              transform: "translate(-50%, -50%)",
            }}
            className="tech-badge text-[10px] font-semibold whitespace-nowrap shadow-lg hidden sm:inline-flex"
          >
            {badge.label}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.7 } },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.12), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(129,140,248,0.08), transparent), #030712",
      }}
    >
      <ConstellationBg className="pointer-events-auto" />
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 grid-bg opacity-25 pointer-events-none"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="aurora absolute top-[-15%] left-[-10%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)" }}
        />
        <div
          className="aurora absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px]"
          style={{
            background: "radial-gradient(circle, rgba(129,140,248,0.06) 0%, transparent 70%)",
            animationDelay: "-9s",
          }}
        />
      </div>

      <motion.div
        style={{ y: textY }}
        className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
          {/* ── Text ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-5">
              <div className="relative glass border border-cyan-500/25 rounded-full px-4 py-2 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/6 to-indigo-500/6" />
                <Sparkles size={11} className="text-cyan-400" />
                <span className="relative text-[10.5px] font-bold text-cyan-400 tracking-[0.14em] uppercase">
                  AI Full Stack Developer
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-fluid-2xl font-black text-white tracking-tight mb-3"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text-animate">Ragadeepan</span>
              <span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={item} className="text-lg sm:text-xl text-slate-400 font-medium mb-5 h-8 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-1.5 h-5 bg-cyan-400 rounded-full cursor-blink opacity-80 hidden sm:block" />
              <TypewriterText texts={roles} className="text-cyan-300 font-semibold" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-slate-400 text-[15px] sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7"
            >
              AI-focused full stack developer with hands-on industry experience building
              intelligent web apps, chatbot systems, and production-grade platforms.
              <span className="text-slate-500"> BCA graduate · Kanchipuram, Tamil Nadu.</span>
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:gap-3 justify-center lg:justify-start mb-7"
            >
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="glass border border-white/8 hover:border-cyan-500/25 rounded-2xl px-2 sm:px-4 py-3 text-center flex flex-col items-center gap-1 cursor-default transition-colors"
                  >
                    <Icon size={13} className="text-cyan-400/70" />
                    <div className="text-base sm:text-lg font-black text-white leading-none">{s.value}</div>
                    <div className="text-[9px] sm:text-[10px] text-slate-500 font-semibold tracking-wide">{s.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-7"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow text-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/12 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 ease-in-out" />
                <Download size={14} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/12 hover:border-cyan-500/35 text-white font-semibold rounded-xl text-sm transition-all"
              >
                View Projects
                <ArrowRight size={14} className="text-cyan-400" />
              </motion.button>
            </motion.div>

            {/* Social + location */}
            <motion.div
              variants={item}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  href: "https://github.com/Ragadeepan",
                  icon: GithubIcon,
                  label: "GitHub",
                  hoverBorder: "hover:border-cyan-500/35",
                },
                {
                  href: "https://www.linkedin.com/in/ragadeepan-r-15144a2bb",
                  icon: LinkedinIcon,
                  label: "LinkedIn",
                  hoverBorder: "hover:border-indigo-500/35",
                },
              ].map(({ href, icon: Icon, label, hoverBorder }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 glass border border-white/10 ${hoverBorder} rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all`}
                  aria-label={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-slate-500 flex items-center gap-1.5">
                <MapPin size={11} className="text-cyan-500 flex-shrink-0" />
                Kanchipuram, Tamil Nadu
              </span>
            </motion.div>
          </motion.div>

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* ── Tech marquee strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.7 }}
          className="mt-16 sm:mt-20 relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="marquee-track gap-3">
              {[...marqueeItems, ...marqueeItems].map((tech, i) => (
                <span
                  key={i}
                  className="tech-badge mx-1.5 whitespace-nowrap text-[11px] select-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-gradient-to-b from-cyan-400 to-indigo-400 rounded-full" />
          </motion.div>
          <span className="text-[9px] text-slate-600 uppercase tracking-[0.2em]">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
