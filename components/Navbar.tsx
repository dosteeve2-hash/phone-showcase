"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#colors", label: "Design" },
  { href: "#specs", label: "Specs" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const blurAmount = useTransform(scrollY, [0, 80], [0, 20]);
  const borderOpacity = useTransform(scrollY, [60, 120], [0, 0.12]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: bgOpacity.get() > 0 ? `rgba(0,0,0,${bgOpacity})` : "transparent",
      }}
    >
      <motion.div
        style={{
          backgroundColor: bgOpacity as unknown as string,
          backdropFilter: `blur(${blurAmount}px)`,
          borderBottom: `1px solid rgba(255,255,255,${borderOpacity})`,
        }}
        className="px-6 md:px-10 py-4 flex items-center justify-between max-w-7xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-2"
        >
          {/* AURA logo mark */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="10" stroke="url(#logo-grad)" strokeWidth="1.5" />
            <circle cx="12" cy="12" r="5" fill="url(#logo-grad)" opacity="0.5" />
            <defs>
              <linearGradient id="logo-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#4F8EF7" />
                <stop offset="0.5" stopColor="#9B6AF7" />
                <stop offset="1" stopColor="#F7C948" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-white font-bold text-xl tracking-[0.18em] uppercase">
            AURA
          </span>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="#order"
            className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-white/90 active:scale-95 transition-all duration-200 cursor-pointer inline-block"
          >
            Commander
          </Link>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}
