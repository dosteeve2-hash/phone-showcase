"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const variants = [
  { storage: "256 Go", price: "1 299 €", popular: false },
  { storage: "512 Go", price: "1 499 €", popular: true },
  { storage: "1 To", price: "1 699 €", popular: false },
];

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      id="order"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center py-24 md:py-36 overflow-hidden"
      style={{ background: "#000" }}
    >
      {/* Dramatic background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 80% at 50% 80%, rgba(79,142,247,0.15) 0%, transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 50%, rgba(155,106,247,0.10) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(247,201,72,0.07) 0%, transparent 50%)",
          }}
        />

        {/* Horizontal gradient line */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0.12) 70%, transparent)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 w-full">
        {/* Main headline */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-[0.3em] uppercase text-white/25 mb-6"
          >
            Disponible maintenant
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-none tracking-[-3px] mb-6"
          >
            Passez à la
            <br />
            <span className="gradient-text">génération</span>
            <br />
            suivante.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl text-white/45 max-w-xl mx-auto leading-relaxed"
          >
            AURA Pro. Le smartphone qui vous voit avancer,
            et avance avec vous.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {variants.map((v, i) => (
            <motion.div
              key={v.storage}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className="relative rounded-2xl p-6 text-center cursor-pointer group"
              style={{
                background: v.popular
                  ? "linear-gradient(135deg, rgba(79,142,247,0.12), rgba(155,106,247,0.12))"
                  : "rgba(255,255,255,0.04)",
                border: v.popular
                  ? "1px solid rgba(155,106,247,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Popular badge */}
              {v.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                  style={{
                    background: "linear-gradient(90deg, #4F8EF7, #9B6AF7)",
                    color: "white",
                  }}
                >
                  Le plus populaire
                </div>
              )}

              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/35 mb-3">
                AURA Pro
              </p>
              <p className="text-2xl font-bold text-white mb-1">{v.storage}</p>
              <p className="text-3xl font-black text-white mb-5 tracking-tight">{v.price}</p>
              <button
                className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer active:scale-95"
                style={
                  v.popular
                    ? {
                        background: "linear-gradient(135deg, #4F8EF7, #9B6AF7)",
                        color: "white",
                      }
                    : {
                        background: "rgba(255,255,255,0.08)",
                        color: "rgba(255,255,255,0.75)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }
                }
              >
                Commander
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Secondary actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="#specs"
            className="text-sm text-white/45 hover:text-white/75 transition-colors duration-200 cursor-pointer underline underline-offset-4"
          >
            Comparer les modèles
          </Link>
          <span className="hidden sm:block text-white/20">·</span>
          <Link
            href="#features"
            className="text-sm text-white/45 hover:text-white/75 transition-colors duration-200 cursor-pointer underline underline-offset-4"
          >
            Voir toutes les fonctionnalités
          </Link>
          <span className="hidden sm:block text-white/20">·</span>
          <span className="text-sm text-white/45 cursor-pointer hover:text-white/75 transition-colors duration-200 underline underline-offset-4">
            Trouver un revendeur
          </span>
        </motion.div>

        {/* Bottom fine print + footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-center"
        >
          <p className="text-xs text-white/20 mb-10 max-w-xl mx-auto">
            Prix TTC. Livraison gratuite. Reprise de votre ancien appareil disponible.
            AURA Pro est un concept. Toutes les spécifications sont fictives.
          </p>

          {/* Footer */}
          <div
            className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="url(#ft-grad)" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="5" fill="url(#ft-grad)" opacity="0.5" />
                <defs>
                  <linearGradient id="ft-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4F8EF7" />
                    <stop offset="1" stopColor="#9B6AF7" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-white/30 text-sm font-bold tracking-widest uppercase">AURA</span>
            </div>
            <p className="text-white/20 text-xs">
              © 2026 AURA Technologies. Tous droits réservés. Conçu avec passion.
            </p>
            <div className="flex gap-6">
              {["Confidentialité", "Mentions légales", "Contact"].map((item) => (
                <span
                  key={item}
                  className="text-xs text-white/25 hover:text-white/50 transition-colors cursor-pointer"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
