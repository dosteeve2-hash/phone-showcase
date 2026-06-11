"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

const EASE = [0.22, 1, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4F8EF7 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, #9B6AF7 0%, transparent 70%)", filter: "blur(120px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F7C948 0%, transparent 70%)", filter: "blur(100px)" }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
          {/* Left: Text content */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            {/* Badge */}
            <FadeUp delay={0} className="inline-block mb-6">
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase px-4 py-1.5 rounded-full border"
                style={{
                  borderColor: "rgba(79,142,247,0.4)",
                  background: "rgba(79,142,247,0.08)",
                  color: "#4F8EF7",
                }}
              >
                Nouvelle génération
              </span>
            </FadeUp>

            {/* Main title */}
            <FadeUp delay={0.1}>
              <h1 className="text-[72px] md:text-[96px] lg:text-[112px] font-black leading-none tracking-[-4px] mb-6">
                <span className="gradient-text">AURA</span>
                <br />
                <span className="text-white">Pro.</span>
              </h1>
            </FadeUp>

            {/* Subtitle */}
            <FadeUp delay={0.2}>
              <p className="text-xl md:text-2xl font-light text-white/60 mb-4 leading-relaxed">
                Beyond imagination.
              </p>
            </FadeUp>

            {/* Description */}
            <FadeUp delay={0.28}>
              <p className="text-base text-white/40 mb-10 leading-relaxed max-w-md mx-auto md:mx-0">
                200MP · Quantum X5 Chip · 7000mAh · 6.9&quot; OLED 144Hz
                <br />
                Le smartphone qui réinvente tout.
              </p>
            </FadeUp>

            {/* CTAs */}
            <FadeUp delay={0.36} className="flex flex-col sm:flex-row items-center md:items-start gap-4 justify-center md:justify-start">
              <Link
                href="#order"
                className="group relative inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-[15px] px-7 py-3.5 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10">Commander maintenant</span>
              </Link>
              <Link
                href="#features"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-[15px] transition-colors duration-200 cursor-pointer"
              >
                En savoir plus
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </FadeUp>

            {/* Stats bar */}
            <FadeUp delay={0.44} className="flex items-center justify-center md:justify-start gap-8 mt-14 pt-8 border-t border-white/[0.07]">
              {[
                { value: "200MP", label: "Caméra" },
                { value: "144Hz", label: "Écran" },
                { value: "7000", label: "mAh" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-2xl font-bold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-white/40 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </FadeUp>
          </div>

          {/* Right: Phone */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
            className="flex-1 flex justify-center md:justify-end items-center relative"
          >
            {/* Glow behind phone */}
            <div
              className="absolute inset-0 glow-pulse pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, rgba(79,142,247,0.22) 0%, transparent 65%)",
                filter: "blur(40px)",
              }}
            />

            {/* Floating badges around phone */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 left-4 md:left-0 hidden md:block"
            >
              <div
                className="px-3 py-2 rounded-xl text-xs font-semibold border"
                style={{
                  background: "rgba(79,142,247,0.12)",
                  borderColor: "rgba(79,142,247,0.25)",
                  color: "#4F8EF7",
                }}
              >
                200MP Nova Vision
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/3 right-2 md:-right-4 hidden md:block"
            >
              <div
                className="px-3 py-2 rounded-xl text-xs font-semibold border"
                style={{
                  background: "rgba(155,106,247,0.12)",
                  borderColor: "rgba(155,106,247,0.25)",
                  color: "#9B6AF7",
                }}
              >
                Quantum X5 Chip
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-16 left-4 md:left-0 hidden md:block"
            >
              <div
                className="px-3 py-2 rounded-xl text-xs font-semibold border"
                style={{
                  background: "rgba(247,201,72,0.10)",
                  borderColor: "rgba(247,201,72,0.25)",
                  color: "#F7C948",
                }}
              >
                7000mAh
              </div>
            </motion.div>

            {/* Phone itself */}
            <div className="phone-float relative z-10">
              <PhoneMockup
                className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
