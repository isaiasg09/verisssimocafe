import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { buildWhatsapp, siteData, whatsappMessages } from "../data/siteData";
import { useIsMobile, usePrefersReducedMotion } from "../lib/motion";
import { IconWhatsApp, SafeImage } from "../lib/ui";

/* ---------- Camadas ilustradas em SVG 2.5D ---------- */

function TopBun() {
  return (
    <svg viewBox="0 0 400 150" className="h-auto w-full" aria-hidden="true">
      <defs>
        <radialGradient id="bun-top" cx="45%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#D9934F" />
          <stop offset="45%" stopColor="#A9622C" />
          <stop offset="100%" stopColor="#5C3216" />
        </radialGradient>
        <linearGradient id="bun-top-base" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9C38E" />
          <stop offset="100%" stopColor="#C89A62" />
        </linearGradient>
      </defs>
      <path d="M28 112 C28 46 110 12 200 12 C290 12 372 46 372 112 C372 124 360 130 340 132 L60 132 C40 130 28 124 28 112 Z" fill="url(#bun-top)" />
      <path d="M40 120 C120 134 280 134 360 120 L356 136 C280 148 120 148 44 136 Z" fill="url(#bun-top-base)" />
      <path d="M90 52 C130 30 190 24 240 30" stroke="#F3D3A2" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" fill="none" />
      {[
        [110, 64, -20], [150, 44, 10], [196, 38, -5], [242, 46, 25], [286, 62, -15], [132, 84, 30], [178, 70, -30],
        [224, 72, 15], [270, 88, -10], [316, 90, 20], [96, 96, 5], [200, 96, -20], [248, 104, 35], [152, 106, -8],
      ].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y} rx="5.5" ry="2" fill="#3B2010" opacity="0.75" transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </svg>
  );
}

function PicklesLayer() {
  return (
    <svg viewBox="0 0 400 70" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="mustard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7B53C" />
          <stop offset="100%" stopColor="#B9851F" />
        </linearGradient>
        <radialGradient id="pickle" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#B8C47A" />
          <stop offset="70%" stopColor="#7E8E4E" />
          <stop offset="100%" stopColor="#4E5A2E" />
        </radialGradient>
      </defs>
      <path d="M36 30 C80 22 120 36 160 28 C200 20 240 36 280 28 C320 20 352 30 366 32 L362 42 C330 52 300 40 270 50 C236 60 210 44 176 54 C140 62 110 46 80 52 C60 56 44 48 36 42 Z" fill="url(#mustard)" />
      <path d="M120 48 C118 58 122 64 126 60 C128 56 126 50 124 48 Z M262 50 C260 62 266 66 268 60 C270 55 268 50 266 48 Z" fill="#C9921F" />
      {[[86, 26, 34], [168, 20, 32], [246, 24, 36], [322, 26, 30]].map(([x, y, w], i) => (
        <g key={i} transform={`rotate(${i % 2 ? 6 : -5} ${x} ${y})`}>
          <ellipse cx={x} cy={y} rx={w} ry="13" fill="url(#pickle)" />
          <ellipse cx={x} cy={y} rx={w - 9} ry="8" fill="none" stroke="#D8DFA6" strokeOpacity="0.55" strokeWidth="1.5" />
          {[-12, -4, 4, 12].map((dx) => (
            <circle key={dx} cx={x + dx} cy={y + (dx % 8 === 0 ? 1 : -1)} r="1.6" fill="#E9EDC6" opacity="0.8" />
          ))}
        </g>
      ))}
    </svg>
  );
}

function PastramiLayer() {
  return (
    <svg viewBox="0 0 400 110" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="pastrami-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A1A12" />
          <stop offset="18%" stopColor="#9E3F31" />
          <stop offset="60%" stopColor="#C2604B" />
          <stop offset="100%" stopColor="#7A2E22" />
        </linearGradient>
        <linearGradient id="pastrami-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2E140D" />
          <stop offset="22%" stopColor="#8A3527" />
          <stop offset="100%" stopColor="#B4513D" />
        </linearGradient>
      </defs>
      <path d="M22 42 C60 10 110 34 150 18 C196 2 236 30 280 16 C320 4 360 24 380 40 C384 60 372 70 352 72 C300 82 260 66 210 76 C160 86 110 70 70 78 C40 82 18 64 22 42 Z" fill="url(#pastrami-a)" />
      <path d="M30 66 C70 48 120 70 170 56 C220 42 262 66 312 54 C346 46 372 58 380 70 C380 88 362 96 340 96 C290 102 250 88 200 98 C150 106 100 92 64 100 C40 104 24 88 30 66 Z" fill="url(#pastrami-b)" />
      <path d="M60 36 C100 30 130 40 170 30 M220 28 C260 22 300 34 340 28 M70 82 C110 74 150 84 190 76 M230 74 C270 68 310 80 350 74" stroke="#F0B9A6" strokeOpacity="0.45" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M90 50 C130 44 160 54 200 46 M250 46 C290 40 320 50 356 46" stroke="#F7D2C2" strokeOpacity="0.25" strokeWidth="1.4" fill="none" />
      {[[80, 22], [140, 18], [200, 12], [262, 18], [330, 16], [110, 60], [290, 58]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="1.6" fill="#1A0B06" opacity="0.8" />
      ))}
    </svg>
  );
}

function CheeseLayer() {
  return (
    <svg viewBox="0 0 400 80" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="cheese" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F6D486" />
          <stop offset="100%" stopColor="#D9A245" />
        </linearGradient>
      </defs>
      <path
        d="M30 20 L370 18 C376 18 380 24 378 30 L372 38 C368 44 362 44 360 50 C358 62 350 66 346 56 C344 48 340 44 330 44 L300 44 C292 44 290 52 290 62 C290 74 280 74 278 62 C276 50 272 44 262 44 L200 46 C190 46 188 54 188 60 C186 70 178 70 176 60 C174 50 170 46 160 46 L110 46 C100 46 96 52 94 60 C92 66 86 66 84 58 C82 50 76 46 66 46 L40 44 C28 44 22 36 24 28 C24 22 26 20 30 20 Z"
        fill="url(#cheese)"
      />
      <path d="M50 26 C120 22 220 24 340 22" stroke="#FFF1C9" strokeOpacity="0.6" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function BottomBun() {
  return (
    <svg viewBox="0 0 400 90" className="h-auto w-full" aria-hidden="true">
      <defs>
        <linearGradient id="bun-bottom-crumb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EBC690" />
          <stop offset="100%" stopColor="#CFA068" />
        </linearGradient>
        <linearGradient id="bun-bottom-crust" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A9622C" />
          <stop offset="100%" stopColor="#4F2A12" />
        </linearGradient>
      </defs>
      <path d="M34 14 C120 4 280 4 366 14 C376 16 378 24 374 30 L370 34 L30 34 L26 30 C22 24 24 16 34 14 Z" fill="url(#bun-bottom-crumb)" />
      <path d="M30 34 L370 34 C372 58 352 76 320 80 L80 80 C48 76 28 58 30 34 Z" fill="url(#bun-bottom-crust)" />
      <path d="M70 46 C150 54 250 54 330 46" stroke="#E2A367" strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ---------- Configuração das camadas ---------- */

const layers = [
  { id: "pao-sup", Component: TopBun, base: -78, explode: -230, rotate: 10, z: 120, scale: 1.06, width: "100%", label: "Pão fresquinho", sub: "Casca dourada, miolo macio", side: "left" },
  { id: "picles", Component: PicklesLayer, base: -26, explode: -108, rotate: 7, z: 70, scale: 1.03, width: "92%", label: "Mostarda & picles", sub: "Acidez que equilibra", side: "right" },
  { id: "pastrami", Component: PastramiLayer, base: 4, explode: 0, rotate: 5, z: 30, scale: 1, width: "98%", label: "Defumado lento", sub: "Macio e suculento", side: "left" },
  { id: "queijo", Component: CheeseLayer, base: 36, explode: 112, rotate: 6, z: 0, scale: 0.98, width: "94%", label: "Queijo derretendo", sub: "Cremoso, escorrendo", side: "right" },
  { id: "pao-inf", Component: BottomBun, base: 68, explode: 228, rotate: 4, z: -40, scale: 0.96, width: "100%", label: "Bem servido", sub: "Como os clientes contam", side: "left" },
];

const KEYS = [0, 0.14, 0.48, 0.72, 0.94, 1];

function Layer({ layer, index, progress, amplitude }) {
  const { Component } = layer;
  const delay = index * 0.015;
  const y = useTransform(
    progress,
    KEYS.map((k, i) => (i === 0 || i === KEYS.length - 1 ? k : Math.min(1, k + delay))),
    [layer.base, layer.base, layer.explode * amplitude, layer.explode * amplitude, layer.base, layer.base]
  );
  const rotateX = useTransform(progress, KEYS, [0, 0, layer.rotate, layer.rotate, 0, 0]);
  const rotateZ = useTransform(progress, KEYS, [0, 0, index % 2 ? 2.5 : -2.5, index % 2 ? 2.5 : -2.5, 0, 0]);
  const scale = useTransform(progress, KEYS, [1, 1, layer.scale, layer.scale, 1, 1]);
  const z = useTransform(progress, KEYS, [0, 0, layer.z, layer.z, 0, 0]);
  const opacity = useTransform(progress, [0, 0.05], [0.85, 1]);

  return (
    <div className="preserve-3d pointer-events-none absolute inset-0 flex items-center justify-center" style={{ zIndex: 10 - index }}>
      <motion.div style={{ y, rotateX, rotateZ, scale, z, opacity, width: layer.width }} className="preserve-3d will-change-transform">
        <div className="drop-shadow-[0_18px_22px_rgba(0,0,0,0.55)]">
          <Component />
        </div>
      </motion.div>
    </div>
  );
}

function LayerLabel({ layer, index, progress, amplitude, isMobile }) {
  const start = 0.3 + index * 0.035;
  const opacity = useTransform(progress, [start, start + 0.08, 0.7, 0.78], [0, 1, 1, 0]);
  const lineScale = useTransform(progress, [start, start + 0.1], [0, 1]);
  const x = useTransform(progress, [start, start + 0.1], [layer.side === "left" ? -16 : 16, 0]);
  const side = isMobile ? "right" : layer.side;
  const top = `calc(50% + ${layer.explode * amplitude}px)`;

  const position = isMobile
    ? "left-[58%] rounded-full bg-espresso/80 py-1 pl-1 pr-3 backdrop-blur-sm"
    : side === "left"
      ? "right-full mr-2 flex-row-reverse text-right"
      : "left-full ml-2";

  return (
    <motion.div
      style={{ opacity, x, y: "-50%", top }}
      className={`pointer-events-none absolute z-20 flex items-center gap-3 ${position}`}
    >
      <motion.span
        style={{ scaleX: lineScale }}
        className={`block h-px w-5 bg-copper md:w-10 ${side === "left" ? "origin-right" : "origin-left"}`}
      />
      <span className="block whitespace-nowrap">
        <span className="label block text-[0.7rem] text-copper">0{index + 1}</span>
        <span className="label block text-[0.8rem] text-crema md:text-base">{layer.label}</span>
        <span className="hidden font-sans text-xs text-latte/80 md:block">{layer.sub}</span>
      </span>
    </motion.div>
  );
}

export default function DeconstructedSandwich() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const spring = useSpring(scrollYProgress, { stiffness: 90, damping: 20, mass: 0.4 });
  const staticProgress = useMotionValue(0.6);
  const progress = reduced ? staticProgress : spring;

  const amplitude = isMobile ? 0.55 : 1;

  const shadowScale = useTransform(progress, KEYS, [1, 1, 1.35, 1.35, 1, 1]);
  const shadowOpacity = useTransform(progress, KEYS, [0.75, 0.75, 0.35, 0.35, 0.75, 0.75]);
  const bgY = useTransform(progress, [0, 1], ["-6%", "6%"]);
  const barScale = useTransform(progress, [0, 1], [0, 1]);
  const headlineOpacity = useTransform(progress, [0, 0.08, 0.86, 1], [0.6, 1, 1, 1]);
  const finalCta = useTransform(progress, [0.84, 0.95], [0, 1]);
  const finalCtaY = useTransform(progress, [0.84, 0.95], [20, 0]);

  const fotoApoio = siteData.fotos[2];

  return (
    <section
      id="pastrami"
      ref={ref}
      aria-labelledby="pastrami-title"
      className={`relative bg-espresso ${reduced ? "" : "h-[300vh]"}`}
    >
      <div className={`${reduced ? "relative py-24" : "sticky top-0 h-[100svh]"} overflow-hidden`}>
        <motion.div style={{ y: bgY }} className="absolute -inset-[8%] -z-0 opacity-[0.16]">
          <SafeImage src={fotoApoio.src} alt="" className="h-full w-full" imgClassName="scale-110 blur-[6px]" />
        </motion.div>
        <div className="vignette absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso via-transparent to-espresso" />

        <div className="container-editorial relative grid h-full grid-rows-[auto_1fr_auto] gap-4 pb-8 pt-24 md:pt-28 lg:grid-cols-12 lg:grid-rows-1 lg:items-center lg:gap-8 lg:py-0">
          <motion.div style={{ opacity: headlineOpacity }} className="relative z-30 lg:col-span-3">
            <p className="section-number">N° 02 — O sanduíche</p>
            <h2 id="pastrami-title" className="mt-4 text-title font-light text-crema lg:text-[clamp(2rem,3.2vw,3.25rem)]">
              O pastrami, <em className="italic text-ember">camada</em> por camada.
            </h2>
            <p className="mt-4 hidden max-w-xs text-latte md:block">
              O produto mais pedido da casa, desmontado para você ver o que faz cada mordida valer a visita.
            </p>
            <div className="mt-6 hidden h-px w-40 overflow-hidden bg-crema/10 lg:block" aria-hidden="true">
              <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-ember" />
            </div>
          </motion.div>

          <div className="perspective-1200 relative z-20 flex items-center justify-center lg:col-span-6 lg:h-full">
            <div className="preserve-3d relative h-[min(62vh,560px)] w-[min(60vw,380px)] md:w-[min(44vw,400px)] lg:w-[min(32vw,400px)]">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="glow-copper h-[130%] w-[150%] shrink-0"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-[4%] flex justify-center">
                <motion.div style={{ scale: shadowScale, opacity: shadowOpacity }} className="h-8 w-[85%] rounded-[50%] bg-black blur-xl" />
              </div>
              {layers.map((layer, index) => (
                <Layer key={layer.id} layer={layer} index={index} progress={progress} amplitude={amplitude} />
              ))}
              {layers.map((layer, index) => (
                <LayerLabel key={`${layer.id}-label`} layer={layer} index={index} progress={progress} amplitude={amplitude} isMobile={isMobile} />
              ))}
            </div>
          </div>

          <div className="relative z-30 lg:col-span-3">
            <figure className="hidden rounded-[2px] border border-copper/25 bg-roast/70 p-3 backdrop-blur-sm lg:block">
              <SafeImage src={fotoApoio.src} alt={fotoApoio.alt} className="aspect-[4/3] w-full" />
              <figcaption className="px-1 pb-1 pt-4">
                <p className="font-display text-lg italic leading-snug text-crema">
                  “a carne possui um gosto muito bom de defumado e textura macia”
                </p>
                <p className="label mt-3 text-latte">Pietra Olivia Schussler · Google ★★★★★</p>
              </figcaption>
            </figure>

            <motion.div style={reduced ? undefined : { opacity: finalCta, y: finalCtaY }} className="mt-4 flex justify-center lg:justify-start">
              <a
                href={buildWhatsapp(whatsappMessages.reserva)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Reservar mesa pelo WhatsApp para provar o pastrami"
              >
                <IconWhatsApp className="h-4 w-4" />
                Quero provar
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

