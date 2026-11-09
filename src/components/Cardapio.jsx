import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { buildWhatsapp, isFilled, siteData, whatsappMessages } from "../data/siteData";
import { EASE, fadeUp, inViewProps, staggerContainer, usePrefersReducedMotion } from "../lib/motion";
import { IconArrowUpRight, IconWhatsApp, SafeImage } from "../lib/ui";

function MenuCard({ prato, featured }) {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 160, damping: 18 });
  const sy = useSpring(my, { stiffness: 160, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-9, 9]);
  const rotateX = useTransform(sy, [0, 1], [8, -8]);
  const glowX = useTransform(sx, (v) => `${v * 100}%`);
  const glowY = useTransform(sy, (v) => `${v * 100}%`);
  const glow = useMotionTemplate`radial-gradient(420px circle at ${glowX} ${glowY}, rgba(217, 98, 43, 0.22), transparent 55%)`;

  const onMove = (event) => {
    if (reduced) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const foto = siteData.fotos[prato.fotoIndex];
  const preco = isFilled(prato.preco) ? prato.preco : null;

  return (
    <motion.article variants={fadeUp} className={`perspective-1200 ${featured ? "md:col-span-2 lg:col-span-7 lg:row-span-3" : "lg:col-span-5"}`}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduced ? undefined : { rotateX, rotateY }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="preserve-3d group relative h-full overflow-hidden rounded-[2px] border border-copper/20 bg-roast shadow-card transition-[border-color,box-shadow] duration-500 hover:border-copper/60 hover:shadow-copper-glow"
      >
        <motion.div style={{ background: glow }} className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className={`grid h-full ${featured ? "grid-rows-[1fr_auto]" : "grid-cols-1 sm:grid-cols-[42%_1fr]"}`}>
          <div className="relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>
            <SafeImage
              src={foto.src}
              alt={`${prato.nome} — ${foto.alt}`}
              className={featured ? "aspect-[4/3] h-full w-full lg:aspect-auto lg:min-h-[420px]" : "aspect-[4/3] h-full w-full sm:aspect-auto sm:min-h-[220px]"}
              imgClassName="transition-transform duration-[1.2s] ease-cinema group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-roast/80 via-transparent to-transparent" />
            <span className="label absolute left-4 top-4 rounded-full bg-espresso/80 px-3 py-1.5 text-copper backdrop-blur-sm">{prato.tag}</span>
          </div>

          <div className="relative z-20 flex flex-col p-6 md:p-8" style={{ transform: "translateZ(40px)" }}>
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-display text-sm italic text-copper">N° {prato.numero}</span>
              <span className="label text-latte/80">{preco ?? "Preço no balcão"}</span>
            </div>
            <h3 className={`mt-3 font-light text-crema ${featured ? "text-display" : "text-title"}`}>{prato.nome}</h3>
            <p className="mt-3 text-latte">{prato.descricao}</p>
            <blockquote className="mt-auto border-l border-copper/40 pl-4 pt-6">
              <p className="font-display text-base italic text-crema/90">“{prato.citacao}”</p>
              <cite className="label mt-2 block not-italic text-latte/70">— {prato.citacaoAutor}, Google</cite>
            </blockquote>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Cardapio() {
  return (
    <section id="cardapio" aria-labelledby="cardapio-title" className="relative bg-espresso py-24 md:py-36">
      <div className="container-editorial">
        <motion.header variants={staggerContainer(0.1)} {...inViewProps} className="mb-14 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p variants={fadeUp} className="section-number">
              N° 03 — Cardápio
            </motion.p>
            <motion.h2 variants={fadeUp} id="cardapio-title" className="text-balance mt-5 text-display font-light text-crema">
              O que a casa faz <em className="italic text-ember">de melhor</em>.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <p className="text-lg text-latte">
              Os pratos que mais aparecem nas avaliações. Cardápio variado, com opções fora do habitual e tudo
              fresquinho, feito no local.
            </p>
            <a
              href={buildWhatsapp(whatsappMessages.cardapio)}
              target="_blank"
              rel="noopener noreferrer"
              className="label group mt-6 inline-flex min-h-[44px] items-center gap-2 text-crema"
              aria-label="Pedir o cardápio completo pelo WhatsApp"
            >
              <IconWhatsApp className="h-4 w-4 text-ember" />
              <span className="border-b border-copper/50 pb-1 transition-colors group-hover:border-ember">Pedir cardápio completo</span>
              <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.header>

        <motion.div variants={staggerContainer(0.12)} {...inViewProps} className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-12">
          {siteData.cardapio.map((prato, index) => (
            <MenuCard key={prato.id} prato={prato} featured={index === 0} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
