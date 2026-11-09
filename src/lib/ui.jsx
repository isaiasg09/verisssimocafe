import { useState } from "react";

/* ---------- Logo (recriação fiel em SVG da marca Veríssimo) ---------- */

export function LogoMark({ className = "h-12 w-12", withBackground = true, spin = false, title = "Veríssimo Café Bistrô" }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={title}>
      <title>{title}</title>
      <defs>
        <path id="logo-ring" d="M 50,86 A 36 36 0 1 1 50,14 A 36 36 0 1 1 50,86" />
      </defs>
      {withBackground && <circle cx="50" cy="50" r="50" fill="#234A45" />}
      <g className={spin ? "animate-spin-slow" : undefined} style={{ transformBox: "view-box", transformOrigin: "50px 50px" }}>
        <text fill="#F2D4D1" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="400" letterSpacing="2.6">
          <textPath href="#logo-ring" startOffset="9%">
            café
          </textPath>
        </text>
        <text fill="#F2D4D1" fontFamily="Inter, system-ui, sans-serif" fontSize="11.5" fontWeight="400" letterSpacing="3.4">
          <textPath href="#logo-ring" startOffset="36%">
            bistrô
          </textPath>
        </text>
        <circle cx="21.5" cy="38" r="1.9" fill="#F2D4D1" />
      </g>
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fill="#F2D4D1"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="40"
        fontWeight="600"
      >
        V
      </text>
    </svg>
  );
}

export function Wordmark({ className = "" }) {
  return (
    <span className={`flex flex-col leading-none ${className}`}>
      <span className="font-display text-xl font-medium tracking-tight text-crema sm:text-2xl">Veríssimo</span>
      <span className="label mt-1 text-[0.65rem] text-latte sm:text-[0.7rem]">Café · Bistrô</span>
    </span>
  );
}

/* ---------- Imagem com fallback de marca ---------- */

export function SafeImage({ src, alt, className = "", imgClassName = "", eager = false, style, ...rest }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-fallback relative overflow-hidden ${className}`} style={style}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          fetchpriority={eager ? "high" : "auto"}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ease-cinema ${loaded ? "opacity-100" : "opacity-0"} ${imgClassName}`}
          {...rest}
        />
      )}
      {failed && (
        <span className="absolute inset-0 flex items-end p-4">
          <span className="label text-latte/70">{alt}</span>
        </span>
      )}
    </div>
  );
}

/* ---------- Estrelas ---------- */

export function Stars({ value = 5, className = "h-4 w-4", color = "text-ember" }) {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${String(value).replace(".", ",")} de 5 estrelas`} role="img">
      {[0, 1, 2, 3, 4].map((i) => {
        const fill = Math.max(0, Math.min(1, value - i));
        return (
          <svg key={i} viewBox="0 0 20 20" className={`${className} ${color}`} aria-hidden="true">
            <defs>
              <linearGradient id={`star-${i}-${Math.round(value * 10)}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="currentColor" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#star-${i}-${Math.round(value * 10)})`}
              d="M10 1.5l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L1.4 7.8l6-.8z"
            />
          </svg>
        );
      })}
    </span>
  );
}

/* ---------- Ícones ---------- */

export function IconWhatsApp({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.21 8.21 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28z" />
    </svg>
  );
}

export function IconInstagram({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconFacebook({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5h2.6l.4-3h-3V8.6c0-.87.25-1.46 1.5-1.46h1.6V4.46A21 21 0 0 0 14.3 4.3c-2.3 0-3.8 1.4-3.8 3.96v2.24H7.9v3h2.6V21h3z" />
    </svg>
  );
}

export function IconPin({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function IconPhone({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 3.5h3.2l1.6 4.2-2 1.3a11 11 0 0 0 7.2 7.2l1.3-2 4.2 1.6V19a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5z" />
    </svg>
  );
}

export function IconArrow({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconArrowUpRight({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconBag({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M5 8h14l-1 12H6L5 8z" strokeLinejoin="round" />
      <path d="M9 8V6.5a3 3 0 0 1 6 0V8" />
    </svg>
  );
}

export function IconClose({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function IconMenu({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M4 8h16M4 16h11" strokeLinecap="round" />
    </svg>
  );
}

export function IconQuote({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.5 7C7.3 9.2 4 13.4 4 18.6 4 22.6 6.4 25 9.4 25c2.7 0 4.6-2 4.6-4.5 0-2.4-1.7-4.2-4-4.2-.5 0-1 .1-1.2.2.6-2.9 3-5.8 5.8-7.3L12.5 7zm14 0C21.3 9.2 18 13.4 18 18.6c0 4 2.4 6.4 5.4 6.4 2.7 0 4.6-2 4.6-4.5 0-2.4-1.7-4.2-4-4.2-.5 0-1 .1-1.2.2.6-2.9 3-5.8 5.8-7.3L26.5 7z" />
    </svg>
  );
}
