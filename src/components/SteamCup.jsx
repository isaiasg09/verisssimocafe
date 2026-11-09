import { usePrefersReducedMotion } from "../lib/motion";

export default function SteamCup({ className = "" }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div className="glow-copper absolute left-1/2 top-[55%] h-[90%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-80" />

      <svg viewBox="0 0 320 380" className="relative h-auto w-full overflow-visible">
        <defs>
          <filter id="steam-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012 0.04" numOctaves="2" seed="7" result="noise">
              {!reduced && <animate attributeName="baseFrequency" dur="14s" values="0.012 0.04;0.018 0.06;0.012 0.04" repeatCount="indefinite" />}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G">
              {!reduced && <animate attributeName="scale" dur="9s" values="22;34;22" repeatCount="indefinite" />}
            </feDisplacementMap>
            <feGaussianBlur stdDeviation="3.2" />
          </filter>

          <linearGradient id="steam-grad" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#F3E7D3" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F3E7D3" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="cup-body" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E9DDC8" />
            <stop offset="45%" stopColor="#FBF4E8" />
            <stop offset="100%" stopColor="#BFAF96" />
          </linearGradient>

          <radialGradient id="crema-top" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="#E8C79A" />
            <stop offset="55%" stopColor="#C08A52" />
            <stop offset="100%" stopColor="#6E3F1E" />
          </radialGradient>

          <linearGradient id="saucer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F2E8D6" />
            <stop offset="100%" stopColor="#A8987E" />
          </linearGradient>

          <radialGradient id="cinnamon" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7A3E1A" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7A3E1A" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g filter="url(#steam-filter)">
          <path className="steam-wisp" d="M130 170 C110 140 150 120 130 90 C112 64 140 44 128 20" stroke="url(#steam-grad)" strokeWidth="14" strokeLinecap="round" fill="none" />
          <path className="steam-wisp" d="M162 172 C182 140 142 116 166 84 C186 58 156 38 170 10" stroke="url(#steam-grad)" strokeWidth="16" strokeLinecap="round" fill="none" />
          <path className="steam-wisp" d="M194 170 C176 142 210 126 192 96 C178 72 204 52 194 28" stroke="url(#steam-grad)" strokeWidth="12" strokeLinecap="round" fill="none" />
        </g>

        <ellipse cx="160" cy="342" rx="138" ry="26" fill="#000" opacity="0.5" />
        <ellipse cx="160" cy="330" rx="140" ry="30" fill="url(#saucer)" />
        <ellipse cx="160" cy="326" rx="96" ry="17" fill="#CDBFA6" />
        <ellipse cx="160" cy="324" rx="80" ry="12" fill="#B8A88C" opacity="0.6" />

        <path d="M248 214 C298 210 304 274 254 280" stroke="url(#cup-body)" strokeWidth="16" fill="none" strokeLinecap="round" />
        <path d="M248 214 C292 212 296 270 254 276" stroke="#8C7B63" strokeOpacity="0.35" strokeWidth="3" fill="none" />

        <path d="M62 196 L258 196 C256 270 228 318 160 322 C92 318 64 270 62 196 Z" fill="url(#cup-body)" />
        <path d="M72 210 C80 270 108 306 150 314" stroke="#FFFFFF" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M230 214 C226 262 210 294 184 310" stroke="#8C7B63" strokeOpacity="0.25" strokeWidth="6" strokeLinecap="round" fill="none" />

        <ellipse cx="160" cy="196" rx="98" ry="22" fill="#EFE4D0" />
        <ellipse cx="160" cy="198" rx="88" ry="17" fill="url(#crema-top)" />
        <path d="M160 186 C138 186 132 198 146 204 C156 208 160 200 160 196 C160 200 164 208 174 204 C188 198 182 186 160 186 Z" fill="#F6E6CC" opacity="0.85" />
        <ellipse cx="128" cy="200" rx="18" ry="5" fill="url(#cinnamon)" />
        <ellipse cx="196" cy="194" rx="14" ry="4" fill="url(#cinnamon)" />

        <text x="160" y="276" textAnchor="middle" fontFamily="Fraunces, Georgia, serif" fontSize="34" fontWeight="600" fill="#234A45" opacity="0.85">
          V
        </text>
      </svg>
    </div>
  );
}
