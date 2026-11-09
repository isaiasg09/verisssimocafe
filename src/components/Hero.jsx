import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { buildWhatsapp, siteData, whatsappMessages } from "../data/siteData";
import { EASE, useIsMobile, usePrefersReducedMotion } from "../lib/motion";
import { IconArrow, IconPin, IconWhatsApp, LogoMark, SafeImage, Stars } from "../lib/ui";

const DustField = lazy(() => import("./DustField.jsx"));

const hasWebGL = () => {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(window.WebGLRenderingContext && (canvas.getContext("webgl2") || canvas.getContext("webgl")));
  } catch {
    return false;
  }
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const lineMask = {
  hidden: { y: "110%" },
  visible: { y: "0%", transition: { duration: 1.15, ease: EASE } },
};

const headlineGroup = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    setWebgl(hasWebGL());
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduced ? 1.05 : 1.15]);
  const midY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "-28%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduced ? "0%" : "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.6 });

  const bgMouseX = useTransform(springX, (v) => v * -14);
  const bgMouseY = useTransform(springY, (v) => v * -10);
  const cardMouseX = useTransform(springX, (v) => v * 22);
  const cardMouseY = useTransform(springY, (v) => v * 16);
  const cardRotateY = useTransform(springX, (v) => v * 6);
  const cardRotateX = useTransform(springY, (v) => v * -6);

  const handleMouseMove = (event) => {
    if (reduced || isMobile) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const fotoFundo = siteData.fotos[0];
  const fotoMeio = siteData.fotos[1];

  return (
    <section
      id="topo"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-espresso pb-20 pt-28 md:items-center md:pb-24 md:pt-32"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-30 will-change-transform">
        <motion.div style={{ x: bgMouseX, y: bgMouseY }} className="absolute -inset-6">
          <SafeImage src={fotoFundo.src} alt={fotoFundo.alt} eager className="h-full w-full" imgClassName="opacity-60" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-espresso via-espresso/85 to-espresso/30" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-espresso via-transparent to-espresso/60" />
      <div className="vignette absolute inset-0 -z-20" />

      {webgl && !reduced && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <Suspense fallback={null}>
            <DustField active={inView} count={isMobile ? 180 : 420} />
          </Suspense>
        </div>
      )}

      <div className="container-editorial relative grid items-center gap-12 lg:grid-cols-12">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item} className="mb-8 flex flex-wrap items-center gap-3">
              <a
                href={siteData.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-copper/30 bg-roast/60 px-4 backdrop-blur-md transition-colors hover:border-copper"
                aria-label={`Nota ${siteData.notaFormatada} de 5 com ${siteData.totalAvaliacoes} avaliações no Google`}
              >
                <Stars value={siteData.nota} className="h-3.5 w-3.5" />
                <span className="label text-crema">
                  {siteData.notaFormatada} · {siteData.totalAvaliacoes} avaliações
                </span>
              </a>
              <span className="inline-flex min-h-[40px] items-center gap-2 rounded-full border border-crema/10 px-4 text-latte">
                <IconPin className="h-4 w-4 text-copper" />
                <span className="label">Moinhos de Vento · Porto Alegre</span>
              </span>
            </motion.div>

            <motion.h1 id="hero-title" variants={headlineGroup} className="text-hero font-light text-crema">
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={lineMask} className="block">
                  Onde o defumado
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={lineMask} className="block">
                  encontra o
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.12em]">
                <motion.span variants={lineMask} className="block">
                  <em className="font-normal italic text-ember">aconchego</em>
                  <span className="text-copper">.</span>
                </motion.span>
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-pretty mt-8 max-w-xl text-lg leading-body text-latte md:text-xl">
              Pastrami artesanal, filé suculento e o cappuccino brasileiro que Porto Alegre comenta. Tudo fresquinho,
              feito aqui no Moinhos de Vento.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={buildWhatsapp(whatsappMessages.reserva)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Reservar mesa pelo WhatsApp (abre em nova aba)"
              >
                <IconWhatsApp />
                Reservar pelo WhatsApp
              </a>
              <a href="#cardapio" className="btn-ghost group" aria-label="Ver os destaques do cardápio">
                Ver Cardápio
                <IconArrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

            <motion.dl variants={item} className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-crema/10 pt-6">
              <div>
                <dt className="label text-latte/80">Google</dt>
                <dd className="mt-1 font-display text-3xl font-light text-crema">
                  {siteData.notaFormatada}
                  <span className="text-ember">★</span>
                </dd>
              </div>
              <div>
                <dt className="label text-latte/80">Avaliações</dt>
                <dd className="mt-1 font-display text-3xl font-light text-crema">{siteData.totalAvaliacoes}</dd>
              </div>
              <div>
                <dt className="label text-latte/80">Feito</dt>
                <dd className="mt-1 font-display text-3xl font-light italic text-crema">na hora</dd>
              </div>
            </motion.dl>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: midY }} className="relative hidden lg:col-span-5 lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: EASE }}
            className="perspective-1200"
          >
            <motion.div
              style={{ x: cardMouseX, y: cardMouseY, rotateX: cardRotateX, rotateY: cardRotateY }}
              className="preserve-3d relative ml-auto w-[88%]"
            >
              <div className="glow-copper absolute -inset-16 -z-10" />
              <div className="relative rounded-[2px] border border-copper/30 p-3 shadow-warm">
                <SafeImage src={fotoMeio.src} alt={fotoMeio.alt} eager className="aspect-[4/5] w-full" />
                <span className="label absolute -left-3 top-10 origin-left -rotate-90 bg-espresso px-2 text-copper">
                  N° 01 — A casa
                </span>
              </div>
              <div className="absolute -bottom-10 -left-12 h-32 w-32 rounded-full bg-espresso p-1.5 shadow-card" style={{ transform: "translateZ(60px)" }}>
                <LogoMark className="h-full w-full" spin={!reduced} />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#prova"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-latte md:flex"
        aria-label="Rolar para conhecer mais"
      >
        <span className="label text-[0.65rem]">Role</span>
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-crema/30 pt-2">
          <span className="h-2 w-1 animate-scroll-dot rounded-full bg-ember" />
        </span>
      </motion.a>
    </section>
  );
}
