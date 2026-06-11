"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <section className="relative py-32 md:py-48 bg-black overflow-hidden">
      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(155,106,247,0.08) 0%, transparent 80%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10" ref={ref}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-sm font-semibold tracking-[0.3em] uppercase text-white/30 mb-10"
        >
          AURA Pro
        </motion.p>

        {/* Main statement */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-bold text-center leading-[1.08] tracking-[-2px] mb-8"
        >
          Forgé pour{" "}
          <span className="gradient-text-static">l&apos;infini.</span>
        </motion.h2>

        {/* Sub statement */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-lg md:text-xl text-white/40 font-light max-w-2xl mx-auto leading-relaxed"
        >
          Chaque pixel. Chaque photon. Chaque nanoseconde.
          <br />
          AURA Pro ne compromet jamais.
        </motion.p>

        {/* Divider with orbs */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-white/15" />
          <div
            className="w-2 h-2 rounded-full"
            style={{ background: "linear-gradient(135deg, #4F8EF7, #9B6AF7)" }}
          />
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "linear-gradient(135deg, #9B6AF7, #F7C948)" }}
          />
          <div
            className="w-1 h-1 rounded-full"
            style={{ background: "#F7C948" }}
          />
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-white/15" />
        </motion.div>
      </div>
    </section>
  );
}
