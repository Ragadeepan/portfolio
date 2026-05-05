"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const ringSpringConfig = { damping: 22, stiffness: 180, mass: 0.8 };

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const ringSmoothX = useSpring(ringX, ringSpringConfig);
  const ringSmoothY = useSpring(ringY, ringSpringConfig);

  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      cursorX.set(mouseX - 5);
      cursorY.set(mouseY - 5);
      ringX.set(mouseX - 18);
      ringY.set(mouseY - 18);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    const onPointerOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive =
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.closest("a") !== null ||
        el.closest("button") !== null ||
        el.style.cursor === "pointer" ||
        window.getComputedStyle(el).cursor === "pointer";
      setIsPointer(isInteractive);
    };

    const onLeave = () => setIsHidden(true);
    const onEnter = () => setIsHidden(false);
    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onPointerOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onPointerOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
        animate={{
          scale: isClicking ? 0.5 : isPointer ? 0 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringSmoothX, y: ringSmoothY }}
        animate={{
          scale: isClicking ? 0.8 : isPointer ? 1.6 : 1,
          opacity: isHidden ? 0 : isPointer ? 0.8 : 0.5,
        }}
        transition={{ duration: 0.18 }}
      >
        <div
          className={`w-9 h-9 rounded-full border transition-colors duration-200 ${
            isPointer ? "border-cyan-400" : "border-white/40"
          }`}
          style={{
            boxShadow: isPointer ? "0 0 12px rgba(6,182,212,0.4)" : undefined,
          }}
        />
      </motion.div>
    </>
  );
}
