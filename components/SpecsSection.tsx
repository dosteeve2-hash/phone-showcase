"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specGroups = [
  {
    category: "Écran",
    accentColor: "#4F8EF7",
    specs: [
      { label: "Taille", value: "6.9\" Infinite OLED Pro" },
      { label: "Résolution", value: "3088 × 1440 px (496 ppi)" },
      { label: "Taux de rafraîchissement", value: "10 – 144 Hz ProMotion" },
      { label: "Luminosité", value: "2500 nits (pic) · HDR10+" },
    ],
  },
  {
    category: "Puce & Performance",
    accentColor: "#9B6AF7",
    specs: [
      { label: "Processeur", value: "Quantum X5 (3nm)" },
      { label: "CPU", value: "8 cœurs (4P + 4E)" },
      { label: "RAM", value: "16 Go LPDDR5X" },
      { label: "Stockage", value: "256 Go · 512 Go · 1 To (NVMe)" },
    ],
  },
  {
    category: "Appareil Photo",
    accentColor: "#F7C948",
    specs: [
      { label: "Principal", value: "200 MP · f/1.7 · OIS 5 axes" },
      { label: "Ultra grand-angle", value: "48 MP · 120° FOV · f/2.2" },
      { label: "Téléobjectif", value: "12 MP · Zoom optique 10x" },
      { label: "Vidéo", value: "8K@30fps · 4K@120fps · ProRes" },
    ],
  },
  {
    category: "Batterie & Charge",
    accentColor: "#34D399",
    specs: [
      { label: "Capacité", value: "7000 mAh" },
      { label: "Charge rapide", value: "100W — 0 à 100% en 30 min" },
      { label: "Sans fil", value: "50W Quantum Wireless" },
      { label: "Autonomie", value: "48h usage normal · 2 jours" },
    ],
  },
  {
    category: "Connectivité",
    accentColor: "#4F8EF7",
    specs: [
      { label: "5G", value: "Sub-6 GHz + mmWave" },
      { label: "Wi-Fi", value: "Wi-Fi 7 (802.11be)" },
      { label: "Bluetooth", value: "5.4 · UWB · NFC" },
      { label: "USB", value: "USB4 Gen 3 · 40 Gbps" },
    ],
  },
  {
    category: "Design & Résistance",
    accentColor: "#F472B6",
    specs: [
      { label: "Châssis", value: "Titane aérospatial Grade 5" },
      { label: "Face arrière", value: "Verre nano-céramique" },
      { label: "Protection", value: "IP68 — 10m · 30 minutes" },
      { label: "Dimensions", value: "161 × 77 × 8.2 mm · 215 g" },
    ],
  },
];

function SpecGroup({ group, delay }: { group: (typeof specGroups)[0]; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Category header */}
      <div
        className="px-6 py-4 flex items-center gap-3"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: group.accentColor, boxShadow: `0 0 8px ${group.accentColor}80` }}
        />
        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: group.accentColor }}>
          {group.category}
        </span>
      </div>

      {/* Spec rows */}
      <div>
        {group.specs.map((spec, i) => (
          <div
            key={spec.label}
            className="flex items-baseline justify-between px-6 py-3.5 gap-4"
            style={{
              borderBottom: i < group.specs.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}
          >
            <span className="text-[13px] text-white/35 font-medium shrink-0">{spec.label}</span>
            <span className="text-[13px] text-white/75 text-right">{spec.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function SpecsSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section id="specs" className="relative py-24 md:py-36 bg-black overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase text-white/25 mb-5"
          >
            Spécifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="text-[38px] sm:text-[50px] md:text-[60px] font-bold text-white tracking-[-2px] leading-none mb-4"
          >
            Chaque détail,
            <br />
            <span className="text-white/35">perfectionné.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base text-white/35 max-w-lg mx-auto"
          >
            Les chiffres ne racontent qu&apos;une partie de l&apos;histoire. Tenez-le en main pour le reste.
          </motion.p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {specGroups.map((group, i) => (
            <SpecGroup key={group.category} group={group} delay={i * 0.08} />
          ))}
        </div>

        {/* Bottom disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-xs text-white/20 mt-10 max-w-2xl mx-auto"
        >
          Autonomie basée sur une utilisation mixte. Performances mesurées avec AURA Pro 1 To.
          Certaines fonctionnalités varient selon la région.
        </motion.p>
      </div>
    </section>
  );
}
