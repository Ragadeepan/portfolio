"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setVisible(v > 0.01));
    return unsub;
  }, [scrollYProgress]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #06b6d4, #818cf8, #a78bfa)",
        opacity: visible ? 1 : 0,
        boxShadow: "0 0 8px rgba(6,182,212,0.6)",
      }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  );
}
