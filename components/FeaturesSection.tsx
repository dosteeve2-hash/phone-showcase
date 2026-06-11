"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    id: "camera",
    title: "Nova Vision System",
    subtitle: "200MP · f/1.7 · AI Photography",
    description:
      "Triple capteur cinematographique avec IA computationnelle. Capturez l'imperceptible — chaque lumière, chaque ombre, chaque instant fugace.",
    gradient: "from-[#4F8EF7] to-[#2563EB]",
    glowColor: "rgba(79,142,247,0.25)",
    accentColor: "#4F8EF7",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
        <path d="M8 6l2 2M20 6l-2 2M8 22l2-2M20 22l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="2" y="10" width="24" height="8" rx="3" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    size: "large",
  },
  {
    id: "chip",
    title: "Quantum X5",
    subtitle: "3nm · 8 cœurs · 16 Go RAM",
    description:
      "40% plus rapide. 50% plus efficace. Le cerveau le plus puissant jamais intégré dans un smartphone.",
    gradient: "from-[#9B6AF7] to-[#7C3AED]",
    glowColor: "rgba(155,106,247,0.25)",
    accentColor: "#9B6AF7",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 2v4M17 2v4M11 22v4M17 22v4M2 11h4M2 17h4M22 11h4M22 17h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 11h2v2h2v2h-2v-2h-2v-2z" fill="currentColor" />
      </svg>
    ),
    size: "normal",
  },
  {
    id: "display",
    title: "Infinite OLED Pro",
    subtitle: "6.9\" · 144Hz · 2500 nits",
    description:
      "ProMotion adaptatif de 1Hz à 144Hz. Luminosité record en plein soleil. Le vrai noir absolu.",
    gradient: "from-[#F7C948] to-[#F59E0B]",
    glowColor: "rgba(247,201,72,0.20)",
    accentColor: "#F7C948",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="5" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 24h8M14 21v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 11l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    size: "normal",
  },
  {
    id: "battery",
    title: "TitanCore Battery",
    subtitle: "7000mAh · 100W · 50W Wireless",
    description:
      "Deux jours d'autonomie. 30 minutes de charge pour 100%. Sans fil quantique. L'énergie sans compromis.",
    gradient: "from-[#34D399] to-[#059669]",
    glowColor: "rgba(52,211,153,0.20)",
    accentColor: "#34D399",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 12v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 11l-4 6h5l-4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    size: "large",
  },
];

function FeatureCard({
  feature,
  delay,
}: {
  feature: (typeof features)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-3xl p-7 overflow-hidden cursor-default ${
        feature.size === "large" ? "md:col-span-1 row-span-1" : ""
      }`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
        style={{
          background: `radial-gradient(ellipse at top left, ${feature.glowColor} 0%, transparent 60%)`,
        }}
      />

      {/* Background gradient accent */}
      <div
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${feature.glowColor} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-5 bg-gradient-to-br ${feature.gradient}`}
        style={{ color: "#fff", boxShadow: `0 8px 32px ${feature.glowColor}` }}
      >
        {feature.icon}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p
          className="text-[11px] font-semibold tracking-[0.2em] uppercase mb-2"
          style={{ color: feature.accentColor, opacity: 0.85 }}
        >
          {feature.subtitle}
        </p>
        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-[15px] text-white/45 leading-relaxed">
          {feature.description}
        </p>
      </div>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 opacity-30 pointer-events-none"
        style={{
          background: `conic-gradient(from 225deg at 100% 0%, ${feature.accentColor}40, transparent 30%)`,
        }}
      />
    </motion.div>
  );
}

export default function FeaturesSection() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section id="features" className="relative py-24 md:py-36 bg-black overflow-hidden">
      {/* Top fade from previous section */}
      <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm font-semibold tracking-[0.3em] uppercase text-white/25 mb-5"
          >
            Technologie
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[38px] sm:text-[50px] md:text-[60px] font-bold text-white tracking-[-2px] leading-none mb-5"
          >
            Quatre révolutions.
            <br />
            <span className="text-white/35">Un seul appareil.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-white/35 max-w-xl mx-auto leading-relaxed"
          >
            Chaque composant repensé de zéro. Chaque détail optimisé à la perfection.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.id} feature={feature} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
