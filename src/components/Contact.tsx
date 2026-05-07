"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, MapPin, ArrowRight, Phone, CheckCircle, Clock } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ragadeepan1437@gmail.com",
    href: "mailto:ragadeepan1437@gmail.com",
    color: "cyan",
    sub: "Preferred contact method",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8015130707",
    href: "tel:+918015130707",
    color: "teal",
    sub: "Available 9am – 8pm IST",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Ragadeepan",
    href: "https://github.com/Ragadeepan",
    color: "slate",
    sub: "Open source & projects",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ragadeepan-r",
    href: "https://www.linkedin.com/in/ragadeepan-r-15144a2bb",
    color: "indigo",
    sub: "Professional profile",
  },
];

const colorVariants: Record<string, { icon: string; border: string; bg: string; glow: string }> = {
  cyan:   { icon: "text-cyan-400",   border: "hover:border-cyan-500/35",   bg: "bg-cyan-500/8",   glow: "rgba(6,182,212,0.1)" },
  teal:   { icon: "text-teal-400",   border: "hover:border-teal-500/35",   bg: "bg-teal-500/8",   glow: "rgba(20,184,166,0.1)" },
  slate:  { icon: "text-slate-300",  border: "hover:border-slate-400/35",  bg: "bg-slate-500/8",  glow: "rgba(148,163,184,0.1)" },
  indigo: { icon: "text-indigo-400", border: "hover:border-indigo-500/35", bg: "bg-indigo-500/8", glow: "rgba(99,102,241,0.1)" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const inputClass = (name: string) =>
    `w-full bg-white/3 border rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 ${
      focused === name
        ? "border-cyan-500/55 bg-white/6 shadow-[0_0_0_3px_rgba(6,182,212,0.1)]"
        : "border-white/8 hover:border-white/14"
    }`;

  return (
    <section id="contact" className="py-24 sm:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-indigo-500/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/60" />
            <span className="text-[11px] font-black text-cyan-400 uppercase tracking-[0.18em]">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Contact</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px] leading-relaxed">
            Open to full-time AI / full stack roles. Let&apos;s build something great together.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {/* ── Left — Info ── */}
          <AnimatedSection direction="left">
            <div className="space-y-2.5 mb-7">
              {contactLinks.map((link, i) => {
                const Icon = link.icon;
                const c = colorVariants[link.color];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 6 }}
                    className={`flex items-center gap-4 glass border border-white/8 ${c.border} rounded-xl p-4 group transition-all`}
                    style={{ boxShadow: `0 4px 20px ${c.glow}` }}
                  >
                    <div className={`w-11 h-11 rounded-xl ${c.bg} border border-white/8 flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className={c.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider">{link.label}</p>
                      <p className="text-slate-200 text-sm font-semibold truncate group-hover:text-white transition-colors">{link.value}</p>
                      <p className="text-slate-600 text-[11px] mt-0.5">{link.sub}</p>
                    </div>
                    <ArrowRight size={13} className="ml-auto text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0 group-hover:translate-x-0.5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Location + timezone */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 text-sm mb-7"
            >
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-cyan-400" />
                Kanchipuram, Tamil Nadu, India
              </span>
              <span className="w-px h-4 bg-white/10 hidden sm:block" />
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-slate-600" />
                IST (UTC +5:30)
              </span>
            </motion.div>

            {/* Availability card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="relative glass border border-emerald-500/18 rounded-xl p-5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                  </span>
                  <span className="text-sm font-black text-emerald-300">Available for hire</span>
                </div>
                <p className="text-slate-400 text-[13.5px] leading-relaxed">
                  Actively looking for full-time AI / Full Stack developer roles.
                  Typical response time: <span className="text-white font-semibold">within 24 hours.</span>
                </p>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* ── Right — Form ── */}
          <AnimatedSection direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="relative glass border border-white/8 rounded-2xl p-6 sm:p-7"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent rounded-t-2xl" />

              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 gap-5"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 250, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center"
                    >
                      <CheckCircle size={28} className="text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-black text-white mb-2">Message sent!</h3>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                        Thanks for reaching out. I&apos;ll reply within 24 hours.
                      </p>
                    </div>
                    <motion.button
                      type="button"
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors neon-underline"
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -8 }} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Name *</label>
                        <input
                          type="text" required value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Your name"
                          className={inputClass("name")}
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Email *</label>
                        <input
                          type="email" required value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="you@email.com"
                          className={inputClass("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                      <input
                        type="text" value={form.subject}
                        onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        placeholder="Job opportunity / Project collaboration"
                        className={inputClass("subject")}
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Message *</label>
                      <textarea
                        required rows={5} value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell me about the role, project, or just say hi..."
                        className={`${inputClass("message")} resize-none`}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={status !== "idle"}
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl font-black text-sm text-white bg-gradient-to-r from-cyan-500 to-indigo-500 shadow-lg shadow-cyan-500/22 hover:shadow-cyan-500/38 transition-shadow overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/12 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                      {status === "sending" ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-slate-600 pt-1">
                      Or email directly:{" "}
                      <a
                        href="mailto:ragadeepan1437@gmail.com"
                        className="text-cyan-500 hover:text-cyan-400 transition-colors font-semibold"
                      >
                        ragadeepan1437@gmail.com
                      </a>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
