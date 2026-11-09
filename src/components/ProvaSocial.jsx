import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteData } from "../data/siteData";
import { EASE, fadeUp, inViewProps, staggerContainer } from "../lib/motion";
import { IconArrow, IconArrowUpRight, IconQuote, Stars } from "../lib/ui";

const iniciais = (nome) =>
  nome
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((parte) => parte[0])
    .join("");

export default function ProvaSocial() {
  const avaliacoes = siteData.avaliacoes;
  const [ativo, setAtivo] = useState(0);
  const destaque = avaliacoes[ativo];

  const proximo = () => setAtivo((i) => (i + 1) % avaliacoes.length);
  const anterior = () => setAtivo((i) => (i - 1 + avaliacoes.length) % avaliacoes.length);

  return (
    <section id="avaliacoes" aria-labelledby="avaliacoes-title" className="relative overflow-hidden bg-crema py-24 text-espresso md:py-36">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-ember/10 blur-3xl" aria-hidden="true" />

      <div className="container-editorial relative">
        <motion.header variants={staggerContainer(0.1)} {...inViewProps} className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <motion.p variants={fadeUp} className="font-label text-xs uppercase tracking-label text-[#8A4F22] sm:text-sm">
              N° 06 — Quem provou
            </motion.p>
            <motion.h2 variants={fadeUp} id="avaliacoes-title" className="text-balance mt-5 text-display font-light text-espresso">
              Porto Alegre <em className="italic text-[#B4481A]">já comentou</em>.
            </motion.h2>
          </div>

          <motion.a
            variants={fadeUp}
            href={siteData.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver as ${siteData.totalAvaliacoes} avaliações no Google Maps (abre em nova aba)`}
            className="group flex items-center gap-6 rounded-[2px] border border-espresso/15 bg-white/40 p-6 transition-colors hover:border-espresso/40 lg:col-span-5"
          >
            <span className="font-display text-7xl font-light leading-none text-espresso">{siteData.notaFormatada}</span>
            <span className="flex-1">
              <Stars value={siteData.nota} className="h-5 w-5" color="text-[#C4531F]" />
              <span className="mt-2 block font-label text-sm uppercase tracking-label text-espresso/80">
                {siteData.totalAvaliacoes} avaliações no Google
              </span>
            </span>
            <IconArrowUpRight className="h-5 w-5 text-espresso/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>
        </motion.header>

        <div className="mt-16 grid gap-10 md:mt-24 lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <IconQuote className="h-12 w-12 text-[#C4531F]/70" />
            <div className="relative mt-6 min-h-[320px] sm:min-h-[260px]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={destaque.autor}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <blockquote className="text-pretty font-display text-[clamp(1.35rem,2.4vw,2.1rem)] font-light leading-[1.35] text-espresso">
                    “{destaque.texto}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso font-display text-lg text-crema">
                      {iniciais(destaque.autor)}
                    </span>
                    <span>
                      <span className="block font-medium text-espresso">{destaque.autor}</span>
                      <span className="mt-1 flex items-center gap-2">
                        <Stars value={destaque.nota} className="h-3.5 w-3.5" color="text-[#C4531F]" />
                        <span className="font-label text-xs uppercase tracking-label text-espresso/70">Google</span>
                      </span>
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={anterior}
                aria-label="Avaliação anterior"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-colors hover:bg-espresso hover:text-crema"
              >
                <IconArrow className="h-4 w-4 rotate-180" />
              </button>
              <button
                type="button"
                onClick={proximo}
                aria-label="Próxima avaliação"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-espresso/20 text-espresso transition-colors hover:bg-espresso hover:text-crema"
              >
                <IconArrow className="h-4 w-4" />
              </button>
              <span className="ml-3 font-label text-sm uppercase tracking-label text-espresso/70">
                {String(ativo + 1).padStart(2, "0")} / {String(avaliacoes.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <motion.ul variants={staggerContainer(0.08)} {...inViewProps} className="space-y-3 lg:col-span-5" aria-label="Todas as avaliações">
            {avaliacoes.map((avaliacao, index) => (
              <motion.li key={avaliacao.autor} variants={fadeUp}>
                <button
                  type="button"
                  onClick={() => setAtivo(index)}
                  aria-pressed={ativo === index}
                  className={`group w-full rounded-[2px] border p-5 text-left transition-[background-color,border-color] duration-500 ease-cinema ${
                    ativo === index ? "border-espresso bg-espresso text-crema" : "border-espresso/15 bg-white/30 text-espresso hover:border-espresso/40"
                  }`}
                >
                  <span className="flex items-center justify-between gap-4">
                    <span className="font-medium">{avaliacao.autor}</span>
                    <Stars value={avaliacao.nota} className="h-3 w-3" color={ativo === index ? "text-ember" : "text-[#C4531F]"} />
                  </span>
                  <span className={`mt-2 line-clamp-2 block text-sm ${ativo === index ? "text-latte" : "text-espresso/75"}`}>{avaliacao.texto}</span>
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
