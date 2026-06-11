"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import PhoneMockup, { ColorScheme } from "@/components/PhoneMockup";

interface PhoneColor {
  id: string;
  name: string;
  nameEn: string;
  swatch: string;
  swatchGradient: string;
  scheme: ColorScheme;
}

const colors: PhoneColor[] = [
  {
    id: "obsidian",
    name: "Obsidienne",
    nameEn: "Midnight Obsidian",
    swatch: "#0d0d18",
    swatchGradient: "linear-gradient(135deg, #0d0d18 0%, #1e1e38 50%, #0a0a14 100%)",
    scheme: {
      bodyStart: "#0d0d18",
      bodyEnd: "#1e1e38",
      bodyMid: "#141428",
      glowColor: "#4F8EF7",
      screenTint: "rgba(79,142,247,0.18)",
    },
  },
  {
    id: "violet",
    name: "Violet Cosmique",
    nameEn: "Cosmic Violet",
    swatch: "#3d2468",
    swatchGradient: "linear-gradient(135deg, #2d1b4e 0%, #5a2890 50%, #3d2468 100%)",
    scheme: {
      bodyStart: "#2d1b4e",
      bodyEnd: "#5a2890",
      bodyMid: "#3d2068",
      glowColor: "#9B6AF7",
      screenTint: "rgba(155,106,247,0.18)",
    },
  },
  {
    id: "white",
    name: "Blanc Glacial",
    nameEn: "Glacial White",
    swatch: "#d8d8e8",
    swatchGradient: "linear-gradient(135deg, #c0c0d8 0%, #eeeef8 50%, #d0d0e8 100%)",
    scheme: {
      bodyStart: "#b8b8cc",
      bodyEnd: "#e8e8f5",
      bodyMid: "#d0d0e2",
      glowColor: "#a0a0cc",
      screenTint: "rgba(120,120,200,0.12)",
    },
  },
  {
    id: "rose",
    name: "Titane Rose",
    nameEn: "Rose Titanium",
    swatch: "#c09090",
    swatchGradient: "linear-gradient(135deg, #8a5858 0%, #d4a8a8 50%, #b08080 100%)",
    scheme: {
      bodyStart: "#8a5858",
      bodyEnd: "#d0a0a0",
      bodyMid: "#b07878",
      glowColor: "#e8a0a0",
      screenTint: "rgba(220,140,140,0.14)",
    },
  },
  {
    id: "abyss",
    name: "Abysse Bleu",
    nameEn: "Abyss Blue",
    swatch: "#0d2040",
    swatchGradient: "linear-gradient(135deg, #0a1628 0%, #1a3a60 50%, #0d2040 100%)",
    scheme: {
      bodyStart: "#0a1628",
      bodyEnd: "#1a3a60",
      bodyMid: "#0e2040",
      glowColor: "#2a7ae8",
      screenTint: "rgba(42,122,232,0.18)",
    },
  },
];

export default function ColorGallery() {
  const [selected, setSelected] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="colors" ref={ref} className="relative py-24 md:py-36 bg-black overflow-hidden">
      {/* Background gradient that shifts with color */}
      <motion.div
        key={selected}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 50%, ${colors[selected].scheme.glowColor}10 0%, transparent 70%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-white/25 mb-5">
            Design
          </p>
          <h2 className="text-[38px] sm:text-[50px] md:text-[60px] font-bold text-white tracking-[-2px] leading-none mb-4">
            Votre couleur.
            <br />
            <span className="text-white/35">Votre identité.</span>
          </h2>
          <p className="text-base text-white/35 max-w-md mx-auto">
            Cinq finitions exceptionnelles. Titane aérospatial, verre nano-céramique.
          </p>
        </motion.div>

        {/* Main gallery */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Phone display */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 flex justify-center items-center relative"
          >
            {/* Color glow behind phone */}
            <motion.div
              key={`glow-${selected}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(ellipse 70% 70% at 50% 60%, ${colors[selected].scheme.glowColor}30 0%, transparent 70%)`,
                filter: "blur(30px)",
              }}
            />

            {/* Animated phone on color change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.88, y: 20, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -10, rotateY: 8 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10"
                style={{ perspective: "1200px" }}
              >
                <div className="phone-float">
                  <PhoneMockup
                    colorScheme={colors[selected].scheme}
                    className="w-[200px] sm:w-[240px] md:w-[280px]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Color info + swatches */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-sm w-full"
          >
            {/* Color name */}
            <div className="mb-10 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`name-${selected}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-2">
                    {colors[selected].nameEn}
                  </p>
                  <h3 className="text-4xl font-bold text-white tracking-tight">
                    {colors[selected].name}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Swatches */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-10">
              {colors.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => setSelected(i)}
                  className="relative cursor-pointer focus:outline-none group"
                  aria-label={`Couleur ${color.name}`}
                >
                  {/* Selected ring */}
                  <motion.div
                    animate={selected === i ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    className="absolute -inset-1.5 rounded-full border-2 border-white/50"
                  />

                  {/* Swatch circle */}
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-full shadow-lg"
                    style={{
                      background: color.swatchGradient,
                      border: "1px solid rgba(255,255,255,0.15)",
                      boxShadow: selected === i ? `0 0 16px ${color.scheme.glowColor}60` : "none",
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Feature chips for selected color */}
            <div className="space-y-3">
              {[
                { label: "Matière", value: "Titane Grade 5 · Verre Nano-céramique" },
                { label: "Protection", value: "IP68 — 10m · 30 minutes" },
                { label: "Finition", value: "Micro-texturé mat · Traitement anti-empreinte" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 py-3 border-b border-white/[0.06]"
                >
                  <span className="text-xs font-semibold text-white/30 w-20 pt-0.5 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-[13px] text-white/60 leading-snug">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Price row */}
            <div className="mt-8 pt-8 border-t border-white/[0.06] flex items-center justify-between">
              <div>
                <p className="text-xs text-white/30 mb-1">À partir de</p>
                <p className="text-3xl font-bold text-white">1 299 €</p>
              </div>
              <button
                className="bg-white text-black text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Choisir
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
