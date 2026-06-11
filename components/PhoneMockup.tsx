"use client";

import { useId } from "react";

export interface ColorScheme {
  bodyStart: string;
  bodyEnd: string;
  bodyMid?: string;
  glowColor: string;
  screenTint: string;
}

interface PhoneMockupProps {
  colorScheme?: ColorScheme;
  className?: string;
}

const defaultColors: ColorScheme = {
  bodyStart: "#0d0d18",
  bodyEnd: "#1a1a30",
  bodyMid: "#141428",
  glowColor: "#4F8EF7",
  screenTint: "rgba(79,142,247,0.18)",
};

export default function PhoneMockup({
  colorScheme,
  className = "",
}: PhoneMockupProps) {
  const uid = useId().replace(/:/g, "");
  const c = { ...defaultColors, ...colorScheme };

  return (
    <svg
      viewBox="0 0 320 660"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <defs>
        {/* Phone body gradient */}
        <linearGradient
          id={`body-${uid}`}
          x1="20%"
          y1="0%"
          x2="80%"
          y2="100%"
        >
          <stop offset="0%" stopColor={c.bodyStart} />
          <stop offset="45%" stopColor={c.bodyMid || c.bodyEnd} />
          <stop offset="100%" stopColor={c.bodyEnd} />
        </linearGradient>

        {/* Metallic edge highlight */}
        <linearGradient id={`edge-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="25%" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.06)" />
          <stop offset="75%" stopColor="rgba(255,255,255,0.20)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </linearGradient>

        {/* Diagonal gloss on body */}
        <linearGradient
          id={`gloss-${uid}`}
          x1="0%"
          y1="0%"
          x2="60%"
          y2="100%"
        >
          <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="40%" stopColor="rgba(255,255,255,0.02)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.0)" />
        </linearGradient>

        {/* Screen background */}
        <linearGradient id={`screen-${uid}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#06060e" />
          <stop offset="100%" stopColor="#0c0c18" />
        </linearGradient>

        {/* Screen content tint */}
        <radialGradient
          id={`tint-${uid}`}
          cx="50%"
          cy="35%"
          r="65%"
        >
          <stop offset="0%" stopColor={c.screenTint} />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        {/* Lens gradients */}
        <radialGradient id={`lens1-${uid}`} cx="32%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#1c2848" />
          <stop offset="100%" stopColor="#070712" />
        </radialGradient>
        <radialGradient id={`lens2-${uid}`} cx="32%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#241848" />
          <stop offset="100%" stopColor="#0a0718" />
        </radialGradient>
        <radialGradient id={`lens3-${uid}`} cx="32%" cy="32%" r="60%">
          <stop offset="0%" stopColor="#3a2414" />
          <stop offset="100%" stopColor="#0e0806" />
        </radialGradient>

        {/* Glow below phone */}
        <filter id={`glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="22" result="blur" />
        </filter>

        {/* Soft blur for screen orbs */}
        <filter id={`orb-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="16" />
        </filter>

        {/* Screen clip */}
        <clipPath id={`clip-${uid}`}>
          <rect x="15" y="13" width="290" height="634" rx="43" />
        </clipPath>
      </defs>

      {/* Ambient glow below phone */}
      <ellipse
        cx="160"
        cy="645"
        rx="130"
        ry="28"
        fill={c.glowColor}
        opacity="0.28"
        filter={`url(#glow-${uid})`}
      />

      {/* Phone shadow */}
      <rect
        x="35"
        y="22"
        width="250"
        height="620"
        rx="46"
        fill="rgba(0,0,0,0.75)"
        filter={`url(#glow-${uid})`}
      />

      {/* Phone body */}
      <rect
        x="9"
        y="7"
        width="302"
        height="646"
        rx="50"
        fill={`url(#body-${uid})`}
      />

      {/* Metallic edge */}
      <rect
        x="9"
        y="7"
        width="302"
        height="646"
        rx="50"
        fill={`url(#edge-${uid})`}
      />

      {/* Body border */}
      <rect
        x="9"
        y="7"
        width="302"
        height="646"
        rx="50"
        fill="none"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1"
      />

      {/* Diagonal gloss */}
      <rect
        x="9"
        y="7"
        width="302"
        height="646"
        rx="50"
        fill={`url(#gloss-${uid})`}
      />

      {/* Screen */}
      <rect
        x="15"
        y="13"
        width="290"
        height="634"
        rx="43"
        fill={`url(#screen-${uid})`}
      />

      {/* Screen tint */}
      <rect
        x="15"
        y="13"
        width="290"
        height="634"
        rx="43"
        fill={`url(#tint-${uid})`}
        clipPath={`url(#clip-${uid})`}
      />

      {/* ─── Dynamic Island ─── */}
      <rect x="99" y="21" width="122" height="38" rx="19" fill="#000" />
      {/* Front camera */}
      <circle cx="190" cy="40" r="10" fill="#080810" />
      <circle cx="190" cy="40" r="7" fill="#050508" />
      <circle cx="190" cy="40" r="4.5" fill="rgba(79,142,247,0.18)" />
      <circle cx="187" cy="37" r="1.5" fill="rgba(255,255,255,0.30)" />
      {/* Speaker cutout (pill inside island) */}
      <rect x="118" y="35" width="50" height="8" rx="4" fill="#0a0a10" />
      {/* Proximity sensor */}
      <circle cx="140" cy="39" r="3" fill="rgba(79,142,247,0.08)" />

      {/* ─── Status bar ─── */}
      <text
        x="30"
        y="66"
        fill="rgba(255,255,255,0.85)"
        fontSize="11.5"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="600"
      >
        9:41
      </text>
      {/* Signal bars */}
      <rect x="235" y="68" width="3" height="4" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="240" y="65" width="3" height="7" rx="1" fill="rgba(255,255,255,0.55)" />
      <rect x="245" y="62" width="3" height="10" rx="1" fill="rgba(255,255,255,0.75)" />
      {/* Wifi */}
      <path
        d="M254 70 Q259 64 264 70"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M256.5 72.5 Q259 70 261.5 72.5"
        stroke="rgba(255,255,255,0.75)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="259" cy="75" r="1.5" fill="rgba(255,255,255,0.85)" />
      {/* Battery */}
      <rect x="272" y="60" width="22" height="12" rx="2.5" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />
      <rect x="294" y="63.5" width="2" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="273.5" y="61.5" width="16" height="9" rx="1.5" fill="rgba(110,220,110,0.85)" />

      {/* ─── Screen time ─── */}
      <text
        x="160"
        y="134"
        textAnchor="middle"
        fill="white"
        fontSize="66"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="100"
        letterSpacing="-2"
      >
        9:41
      </text>
      <text
        x="160"
        y="158"
        textAnchor="middle"
        fill="rgba(255,255,255,0.52)"
        fontSize="13"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        letterSpacing="0.3"
      >
        Mercredi 11 juin
      </text>

      {/* ─── Screen gradient orbs ─── */}
      <ellipse
        cx="88"
        cy="310"
        rx="68"
        ry="68"
        fill={c.glowColor}
        opacity="0.14"
        filter={`url(#orb-${uid})`}
        clipPath={`url(#clip-${uid})`}
      />
      <ellipse
        cx="232"
        cy="390"
        rx="58"
        ry="58"
        fill="#9B6AF7"
        opacity="0.12"
        filter={`url(#orb-${uid})`}
        clipPath={`url(#clip-${uid})`}
      />
      <ellipse
        cx="160"
        cy="510"
        rx="75"
        ry="45"
        fill="#F7C948"
        opacity="0.07"
        filter={`url(#orb-${uid})`}
        clipPath={`url(#clip-${uid})`}
      />

      {/* ─── Divider line ─── */}
      <line
        x1="28"
        y1="178"
        x2="292"
        y2="178"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="0.5"
      />

      {/* ─── Notification cards ─── */}
      {/* Card 1 */}
      <rect x="22" y="190" width="276" height="70" rx="18" fill="rgba(255,255,255,0.07)" clipPath={`url(#clip-${uid})`} />
      <rect x="22" y="190" width="276" height="70" rx="18" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
      <rect x="36" y="203" width="28" height="28" rx="8" fill="rgba(79,142,247,0.45)" />
      <rect x="74" y="207" width="78" height="7" rx="3.5" fill="rgba(255,255,255,0.55)" />
      <rect x="74" y="221" width="140" height="5" rx="2.5" fill="rgba(255,255,255,0.22)" />
      <rect x="74" y="232" width="100" height="5" rx="2.5" fill="rgba(255,255,255,0.14)" />
      {/* Card 2 */}
      <rect x="22" y="270" width="276" height="70" rx="18" fill="rgba(255,255,255,0.05)" clipPath={`url(#clip-${uid})`} />
      <rect x="22" y="270" width="276" height="70" rx="18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
      <rect x="36" y="283" width="28" height="28" rx="8" fill="rgba(155,106,247,0.45)" />
      <rect x="74" y="287" width="60" height="7" rx="3.5" fill="rgba(255,255,255,0.55)" />
      <rect x="74" y="301" width="160" height="5" rx="2.5" fill="rgba(255,255,255,0.18)" />
      <rect x="74" y="312" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.10)" />

      {/* ─── App icons grid ─── */}
      {/* Row 1 */}
      <rect x="28" y="358" width="54" height="54" rx="14" fill="rgba(79,142,247,0.35)" clipPath={`url(#clip-${uid})`} />
      <rect x="92" y="358" width="54" height="54" rx="14" fill="rgba(155,106,247,0.35)" clipPath={`url(#clip-${uid})`} />
      <rect x="156" y="358" width="54" height="54" rx="14" fill="rgba(247,201,72,0.35)" clipPath={`url(#clip-${uid})`} />
      <rect x="220" y="358" width="54" height="54" rx="14" fill="rgba(80,200,120,0.35)" clipPath={`url(#clip-${uid})`} />
      {/* Row 2 */}
      <rect x="28" y="422" width="54" height="54" rx="14" fill="rgba(255,80,80,0.30)" clipPath={`url(#clip-${uid})`} />
      <rect x="92" y="422" width="54" height="54" rx="14" fill="rgba(80,200,255,0.30)" clipPath={`url(#clip-${uid})`} />
      <rect x="156" y="422" width="54" height="54" rx="14" fill="rgba(255,140,50,0.30)" clipPath={`url(#clip-${uid})`} />
      <rect x="220" y="422" width="54" height="54" rx="14" fill="rgba(200,80,255,0.30)" clipPath={`url(#clip-${uid})`} />

      {/* ─── Dock ─── */}
      <rect x="18" y="556" width="284" height="82" rx="26" fill="rgba(255,255,255,0.08)" clipPath={`url(#clip-${uid})`} />
      <rect x="18" y="556" width="284" height="82" rx="26" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
      <rect x="28" y="567" width="56" height="56" rx="15" fill="rgba(79,142,247,0.5)" clipPath={`url(#clip-${uid})`} />
      <rect x="96" y="567" width="56" height="56" rx="15" fill="rgba(255,70,70,0.45)" clipPath={`url(#clip-${uid})`} />
      <rect x="164" y="567" width="56" height="56" rx="15" fill="rgba(60,190,80,0.45)" clipPath={`url(#clip-${uid})`} />
      <rect x="232" y="567" width="56" height="56" rx="15" fill="rgba(247,201,72,0.45)" clipPath={`url(#clip-${uid})`} />

      {/* ─── Home indicator ─── */}
      <rect
        x="110"
        y="648"
        width="100"
        height="4"
        rx="2"
        fill="rgba(255,255,255,0.35)"
      />

      {/* ─── Camera module (back, stylized as visible on front near top) ─── */}
      {/* Camera bump area - top back camera island detail */}
      <rect x="80" y="82" width="160" height="88" rx="24" fill="rgba(0,0,0,0.55)" clipPath={`url(#clip-${uid})`} />
      <rect x="80" y="82" width="160" height="88" rx="24" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" clipPath={`url(#clip-${uid})`} />

      {/* No, this doesn't make sense on a front-facing phone view. Let me remove it. */}
      {/* Actually keep it as an abstract decorative block */}

      {/* ─── Side buttons ─── */}
      {/* Power button (right) */}
      <rect x="309" y="220" width="5" height="58" rx="2.5" fill={c.bodyMid || c.bodyEnd} />
      <rect x="309" y="220" width="5" height="58" rx="2.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Volume up (left) */}
      <rect x="6" y="172" width="5" height="34" rx="2.5" fill={c.bodyMid || c.bodyEnd} />
      <rect x="6" y="172" width="5" height="34" rx="2.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Volume down (left) */}
      <rect x="6" y="216" width="5" height="40" rx="2.5" fill={c.bodyMid || c.bodyEnd} />
      <rect x="6" y="216" width="5" height="40" rx="2.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {/* Action button (left) */}
      <rect x="6" y="138" width="5" height="24" rx="2.5" fill={c.bodyMid || c.bodyEnd} />
      <rect x="6" y="138" width="5" height="24" rx="2.5" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
    </svg>
  );
}
