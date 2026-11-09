import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteData } from "../data/siteData";
import { EASE, fadeUp, inViewProps, staggerContainer, useIsMobile, usePrefersReducedMotion } from "../lib/motion";
import { IconInstagram, SafeImage } from "../lib/ui";

const aspects = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[4/5]", "aspect-square", "aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[3/4]"];

function Column({ items, y, offsetClass = "" }) {
  return (
    <motion.div style={{ y }} className={`flex flex-col gap-4 md:gap-6 ${offsetClass}`}>
      {items.map(({ foto, index }) => (
        <motion.figure
          key={index}
          initial={{ opacity: 0, y: 40, clipPath: "inset(12% 0% 0% 0%)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: EASE }}
          className="group relative overflow-hidden rounded-[2px] bg-roast"
        >
          <SafeImage
            src={foto.src}
            alt={foto.alt}
            className={`${aspects[index]} w-full`}
            imgClassName="transition-transform duration-[1.4s] ease-cinema group-hover:scale-105"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-espresso/85 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="label text-crema">{String(index + 1).padStart(2, "0")}</span>
            <span className="label max-w-[70%] text-right text-[0.65rem] text-latte">{foto.alt.replace(" do Veríssimo Café Bistrô", "")}</span>
          </figcaption>
        </motion.figure>
      ))}
    </motion.div>
  );
}

export default function Galeria() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const amp = reduced ? 0 : isMobile ? 0.5 : 1;
  const y1 = useTransform(scrollYProgress, [0, 1], [`${8 * amp}%`, `${-8 * amp}%`]);
  const y2 = useTransform(scrollYProgress, [0, 1], [`${-10 * amp}%`, `${10 * amp}%`]);
  const y3 = useTransform(scrollYProgress, [0, 1], [`${14 * amp}%`, `${-14 * amp}%`]);

  const all = siteData.fotos.map((foto, index) => ({ foto, index }));
  const columns = isMobile
    ? [all.filter((_, i) => i % 2 === 0), all.filter((_, i) => i % 2 === 1)]
    : [all.filter((_, i) => i % 3 === 0), all.filter((_, i) => i % 3 === 1), all.filter((_, i) => i % 3 === 2)];
  const speeds = [y1, y2, y3];

  return (
    <section id="galeria" ref={ref} aria-labelledby="galeria-title" className="relative overflow-hidden bg-espresso py-24 md:py-36">
      <div className="container-editorial">
        <motion.header variants={staggerContainer(0.1)} {...inViewProps} className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.p variants={fadeUp} className="section-number">
              N° 05 — Galeria
            </motion.p>
            <motion.h2 variants={fadeUp} id="galeria-title" className="mt-5 text-display font-light text-crema">
              Da cozinha <em className="italic text-ember">para a mesa</em>.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="max-w-sm text-latte">
            Fotos reais de quem passou por aqui. Sem estúdio, sem filtro de catálogo.
          </motion.p>
        </motion.header>

        <div className={`grid gap-4 md:gap-6 ${isMobile ? "grid-cols-2" : "grid-cols-3"}`}>
          {columns.map((items, i) => (
            <Column key={i} items={items} y={speeds[i]} offsetClass={i === 1 ? "mt-16 md:mt-24" : ""} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a
            href={siteData.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            aria-label="Ver mais no Instagram do Veríssimo (abre em nova aba)"
          >
            <IconInstagram className="h-4 w-4" />
            Mais bastidores no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
