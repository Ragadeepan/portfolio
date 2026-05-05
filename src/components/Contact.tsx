"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, ArrowRight, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import AnimatedSection from "./AnimatedSection";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "ragadeepan1437@gmail.com",
    href: "mailto:ragadeepan1437@gmail.com",
    color: "cyan",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8015130707",
    href: "tel:+918015130707",
    color: "teal",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/Ragadeepan",
    href: "https://github.com/Ragadeepan",
    color: "slate",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ragadeepan-r-15144a2bb",
    href: "https://www.linkedin.com/in/ragadeepan-r-15144a2bb",
    color: "indigo",
  },
];

const colorVariants: Record<string, { icon: string; border: string; bg: string }> = {
  cyan:   { icon: "text-cyan-400",   border: "hover:border-cyan-500/30",   bg: "bg-cyan-500/8" },
  teal:   { icon: "text-teal-400",   border: "hover:border-teal-500/30",   bg: "bg-teal-500/8" },
  slate:  { icon: "text-slate-300",  border: "hover:border-slate-400/30",  bg: "bg-slate-500/8" },
  indigo: { icon: "text-indigo-400", border: "hover:border-indigo-500/30", bg: "bg-indigo-500/8" },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/2 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <AnimatedSection className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-500/50" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-[0.15em]">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white section-heading">Contact</h2>
          <p className="text-slate-400 mt-5 max-w-xl text-[15px]">
            Open to full-time AI / full stack roles. Let&apos;s build something great together.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Info */}
          <AnimatedSection direction="left">
            <div className="space-y-3 mb-8">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                const c = colorVariants[link.color];
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-4 glass border border-white/8 ${c.border} rounded-xl p-4 group transition-all`}
                  >
                    <div className={`w-10 h-10 rounded-xl ${c.bg} border border-white/8 flex items-center justify-center flex-shrink-0`}>
                      <Icon size={16} className={c.icon} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{link.label}</p>
                      <p className="text-slate-300 text-sm truncate group-hover:text-white transition-colors">{link.value}</p>
                    </div>
                    <ArrowRight size={13} className="ml-auto text-slate-600 group-hover:text-cyan-400 transition-colors flex-shrink-0" />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
              <MapPin size={14} className="text-cyan-400" />
              <span>Kanchipuram, Tamil Nadu, India</span>
              <span className="text-slate-700">·</span>
              <span>IST (UTC +5:30)</span>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass border border-emerald-500/15 rounded-xl p-5"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
                <span className="text-sm font-bold text-emerald-300">Available for hire</span>
              </div>
              <p className="text-slate-400 text-[13px] leading-relaxed">
                Actively looking for full-time AI / Full Stack developer roles.
                Typical response time: within 24 hours.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Right - Contact form */}
          <AnimatedSection direction="right" delay={0.1}>
            <form onSubmit={handleSubmit} className="relative glass border border-white/8 rounded-2xl p-6 space-y-4">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/35 to-transparent rounded-t-2xl" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Name</label>
                  <input
                    type="text" required value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-white/4 border border-white/8 focus:border-cyan-500/50 focus:bg-white/6 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email" required value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@email.com"
                    className="w-full bg-white/4 border border-white/8 focus:border-cyan-500/50 focus:bg-white/6 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Subject</label>
                <input
                  type="text" value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  placeholder="Job opportunity / Project collaboration"
                  className="w-full bg-white/4 border border-white/8 focus:border-cyan-500/50 focus:bg-white/6 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Message</label>
                <textarea
                  required rows={4} value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  placeholder="Tell me about the role, project, or just say hi..."
                  className="w-full bg-white/4 border border-white/8 focus:border-cyan-500/50 focus:bg-white/6 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                disabled={status !== "idle"}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all relative overflow-hidden ${
                  status === "sent"
                    ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300"
                    : "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35"
                }`}
              >
                {status === "sent" ? (
                  "Message sent! I'll reply within 24 hours."
                ) : status === "sending" ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"/>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-center text-xs text-slate-600">
                Or email directly:{" "}
                <a href="mailto:ragadeepan1437@gmail.com" className="text-cyan-500 hover:text-cyan-400 transition-colors">
                  ragadeepan1437@gmail.com
                </a>
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
