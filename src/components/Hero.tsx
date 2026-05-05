"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Download, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import TypewriterText from "./TypewriterText";
import ConstellationBg from "./ConstellationBg";
import { useState } from "react";

const roles = [
  "AI Full Stack Developer",
  "React & Next.js Engineer",
  "UI/UX Craftsman",
  "AI Integration Specialist",
  "Frontend Architect",
];

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "7mo", label: "Industry Exp." },
  { value: "10+", label: "Tech Stack" },
  { value: "AI", label: "Specialization" },
];

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Outer atmospheric glow */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/25 to-indigo-500/15 blur-3xl scale-125" />

      {/* Spinning orbit ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[260px] h-[260px] rounded-full"
        style={{
          border: "1px dashed rgba(6,182,212,0.22)",
        }}
      />
      {/* Orbit dot on ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute w-[260px] h-[260px]"
      >
        <div
          className="absolute w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
          style={{ top: "-5px", left: "50%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Spinning orbit ring 2 */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute w-[310px] h-[310px] rounded-full"
        style={{
          border: "1px dashed rgba(129,140,248,0.16)",
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute w-[310px] h-[310px]"
      >
        <div
          className="absolute w-2 h-2 rounded-full bg-indigo-400 shadow-lg shadow-indigo-400/40"
          style={{ bottom: "-4px", left: "50%", transform: "translateX(-50%)" }}
        />
      </motion.div>

      {/* Profile image container */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-52 h-52 sm:w-60 sm:h-60"
      >
        {/* Gradient border ring */}
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
              /* Fallback SVG avatar */
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <radialGradient id="fb-bg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0d1b3e" />
                    <stop offset="100%" stopColor="#060d1f" />
                  </radialGradient>
                  <radialGradient id="fb-skin" cx="50%" cy="30%">
                    <stop offset="0%" stopColor="#d4956a" />
                    <stop offset="100%" stopColor="#b87850" />
                  </radialGradient>
                  <linearGradient id="fb-shirt" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0891b2" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#fb-bg)" />
                <ellipse cx="100" cy="170" rx="70" ry="22" fill="rgba(6,182,212,0.08)" />
                <path d="M42 200 L42 142 Q58 128 100 128 Q142 128 158 142 L158 200 Z" fill="url(#fb-shirt)" opacity="0.9" />
                <rect x="87" y="113" width="26" height="18" rx="7" fill="url(#fb-skin)" />
                <ellipse cx="100" cy="93" rx="30" ry="32" fill="url(#fb-skin)" />
                <path d="M70 81 Q72 57 100 55 Q128 57 130 81 Q120 61 100 61 Q80 61 70 81Z" fill="#1a0800" opacity="0.92" />
                <ellipse cx="88" cy="91" rx="5" ry="5.5" fill="#16213e" />
                <ellipse cx="112" cy="91" rx="5" ry="5.5" fill="#16213e" />
                <ellipse cx="89.5" cy="89.5" rx="1.8" ry="1.8" fill="white" opacity="0.9" />
                <ellipse cx="113.5" cy="89.5" rx="1.8" ry="1.8" fill="white" opacity="0.9" />
                <path d="M83 84 Q88 81 93 84" stroke="#5a2a08" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M107 84 Q112 81 117 84" stroke="#5a2a08" strokeWidth="2" fill="none" strokeLinecap="round" />
                <path d="M97 96 Q100 101 103 96" stroke="#a06040" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <path d="M91 106 Q100 113 109 106" stroke="#a06040" strokeWidth="2" fill="none" strokeLinecap="round" />
                <text x="100" y="160" textAnchor="middle" fill="white" fontSize="9" fontFamily="Inter,sans-serif" opacity="0.6">R</text>
              </svg>
            )}
          </div>
        </div>

        {/* Glow behind photo */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 blur-xl -z-10" />

        {/* Status badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 260 }}
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass border border-emerald-500/25 rounded-full px-3.5 py-1.5 flex items-center gap-1.5 shadow-xl whitespace-nowrap"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-xs font-semibold text-emerald-300">Open to work</span>
        </motion.div>
      </motion.div>

      {/* Floating tech badges */}
      {[
        { label: "React", angle: -35, dist: 148, delay: 1.4 },
        { label: "AI/ML", angle: 30, dist: 148, delay: 1.55 },
        { label: "Next.js", angle: 215, dist: 148, delay: 1.7 },
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
            className="tech-badge text-[10px] font-semibold whitespace-nowrap shadow-lg"
          >
            {badge.label}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.11, delayChildren: 0.25 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6,182,212,0.1), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(129,140,248,0.07), transparent), #030712" }}
    >
      {/* Interactive constellation */}
      <ConstellationBg className="pointer-events-auto" />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-radial-[ellipse_60%_50%_at_50%_50%] from-transparent to-[#030712]/60 pointer-events-none" />

      {/* Orbs */}
      <div className="absolute top-1/3 -left-40 w-[480px] h-[480px] bg-cyan-500/4 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[480px] h-[480px] bg-indigo-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* ── Text column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Eyebrow chip */}
            <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
              <div className="relative glass border border-cyan-500/25 rounded-full px-4 py-2 flex items-center gap-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-indigo-500/5" />
                <Sparkles size={12} className="text-cyan-400" />
                <span className="relative text-[11px] font-semibold text-cyan-400 tracking-[0.12em] uppercase">
                  AI Full Stack Developer
                </span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black text-white leading-[1.08] tracking-tight mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Ragadeepan</span>
              <span className="text-cyan-400">.</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div variants={item} className="text-lg sm:text-xl text-slate-300 font-medium mb-5 h-8">
              <TypewriterText texts={roles} className="text-cyan-300 font-semibold" />
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={item}
              className="text-slate-400 text-base sm:text-[15px] leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              AI-focused full stack developer with hands-on industry experience building
              intelligent web apps, chatbot systems, and production-grade platforms.
              BCA graduate · Kanchipuram, Tamil Nadu.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass border border-white/8 rounded-xl px-4 py-2.5 text-center min-w-[72px]"
                >
                  <div className="text-lg font-black text-white leading-none">{s.value}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-medium">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-shadow text-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                <Download size={15} />
                Download Resume
              </motion.a>

              <motion.button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 glass border border-white/12 hover:border-cyan-500/30 text-white font-semibold rounded-xl text-sm transition-all"
              >
                View Projects
                <ArrowRight size={15} className="text-cyan-400" />
              </motion.button>
            </motion.div>

            {/* Social + location row */}
            <motion.div
              variants={item}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://github.com/Ragadeepan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/35 transition-all"
              >
                <GithubIcon size={17} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/ragadeepan-r-15144a2bb"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 glass border border-white/10 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/35 transition-all"
              >
                <LinkedinIcon size={17} />
              </motion.a>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin size={11} className="text-cyan-500" />
                Kanchipuram, Tamil Nadu
              </span>
            </motion.div>
          </motion.div>

          {/* ── Photo column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
          <span className="text-[10px] text-slate-600 uppercase tracking-widest">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
