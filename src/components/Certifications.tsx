"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    title: "Full Stack Web Development Course",
    issuer: "Intellia Sofpro Limited",
    date: "Aug 2025",
    description: "HTML5, CSS3, JavaScript, and modern web development practices. Frontend, backend, and database fundamentals.",
    icon: "🌐",
    color: "cyan",
    badge: "Web Dev",
  },
  {
    title: "TCS iON Career Edge – Young Professional",
    issuer: "Tata Consultancy Services (TCS)",
    date: "May 2024 – Jul 2024",
    description: "Professional communication, interview skills, IT fundamentals, and overview of AI concepts.",
    icon: "🏆",
    color: "indigo",
    badge: "TCS Certified",
  },
  {
    title: "Workshop: UI/UX Design with ReactJS",
    issuer: "Industry Workshop",
    date: "Apr 28–30, 2025",
    description: "UI/UX principles, React-based UI development, responsive and accessible design techniques.",
    icon: "🎨",
    color: "purple",
    badge: "UI/UX",
  },
];

const colorMap: Record<string, { text: string; bg: string; border: string; iconBg: string }> = {
  cyan:   { text: "text-cyan-400",   bg: "bg-cyan-500/8",   border: "border-cyan-500/20",   iconBg: "bg-cyan-500/12" },
  indigo: { text: "text-indigo-400", bg: "bg-indigo-500/8", border: "border-indigo-500/20", iconBg: "bg-indigo-500/12" },
  purple: { text: "text-purple-400", bg: "bg-purple-500/8", border: "border-purple-500/20", iconBg: "bg-purple-500/12" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <AnimatedSection className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.15em]">Achievements</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white section-heading">Certifications</h2>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <AnimatedSection key={cert.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass border ${c.border} rounded-2xl p-5 h-full group cursor-default`}
                >
                  {/* Top row */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl ${c.iconBg} border ${c.border} flex items-center justify-center text-xl flex-shrink-0`}>
                      {cert.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${c.border} ${c.text} ${c.bg} mb-1`}>
                        <Award size={9} className="mr-1" />
                        {cert.badge}
                      </div>
                      <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-white">
                        {cert.title}
                      </h3>
                    </div>
                  </div>

                  {/* Issuer & date */}
                  <div className="flex items-center justify-between mb-3">
                    <p className={`text-xs font-semibold ${c.text}`}>{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-slate-600 text-[10px]">
                      <Calendar size={9} />
                      {cert.date}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-[12.5px] leading-relaxed">{cert.description}</p>

                  {/* Bottom accent line */}
                  <div className={`mt-4 h-px bg-gradient-to-r from-transparent ${c.border.replace("border-", "via-")} to-transparent`} />
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
