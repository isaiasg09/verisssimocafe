import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { buildWhatsapp, isFilled, siteData, whatsappMessages } from "../data/siteData";
import { EASE, fadeUp, inViewProps, staggerContainer } from "../lib/motion";
import { IconArrowUpRight, IconPhone, IconPin, IconWhatsApp, SafeImage } from "../lib/ui";

function FaqItem({ item, index, open, onToggle }) {
  const id = `faq-${index}`;
  return (
    <li className="border-t border-crema/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex min-h-[60px] w-full items-center justify-between gap-6 py-4 text-left font-display text-lg font-normal text-crema transition-colors hover:text-ember md:text-xl"
        >
          {item.pergunta}
          <span className={`relative h-4 w-4 shrink-0 transition-transform duration-500 ease-cinema ${open ? "rotate-45" : ""}`} aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-4 bg-copper" />
            <span className="absolute left-1/2 top-0 h-4 w-px bg-copper" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-panel`}
            role="region"
            aria-labelledby={`${id}-button`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-latte">{item.resposta}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}

export default function Localizacao() {
  const [aberto, setAberto] = useState(0);
  const [mapaAtivo, setMapaAtivo] = useState(false);
  const foto = siteData.fotos[10];
  const horarioDisponivel = isFilled(siteData.horarios);

  return (
    <section id="localizacao" aria-labelledby="localizacao-title" className="relative bg-espresso py-24 md:py-36">
      <div className="container-editorial">
        <motion.header variants={staggerContainer(0.1)} {...inViewProps} className="max-w-3xl">
          <motion.p variants={fadeUp} className="section-number">
            N° 08 — Onde estamos
          </motion.p>
          <motion.h2 variants={fadeUp} id="localizacao-title" className="text-balance mt-5 text-display font-light text-crema">
            Uma mesa no coração do <em className="italic text-ember">Moinhos</em>.
          </motion.h2>
        </motion.header>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 1, ease: EASE }}
            className="relative overflow-hidden rounded-[2px] border border-copper/25 bg-roast lg:col-span-7"
          >
            {mapaAtivo ? (
              <iframe
                title={`Mapa: ${siteData.nome}, ${siteData.endereco}`}
                src={siteData.mapsEmbed}
                className="aspect-[4/3] h-full min-h-[360px] w-full grayscale-[60%] invert-[90%] hue-rotate-180 contrast-[0.9]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setMapaAtivo(true)}
                className="group relative block aspect-[4/3] h-full min-h-[360px] w-full text-left"
                aria-label="Carregar mapa interativo"
              >
                <SafeImage src={foto.src} alt={foto.alt} className="absolute inset-0 h-full w-full" imgClassName="transition-transform duration-[1.4s] ease-cinema group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent" />
                <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ember text-espresso">
                      <IconPin className="h-5 w-5" />
                    </span>
                    <span className="label text-crema">Ver mapa interativo</span>
                  </span>
                  <IconArrowUpRight className="h-5 w-5 text-crema" />
                </span>
              </button>
            )}
          </motion.div>

          <motion.div variants={staggerContainer(0.1)} {...inViewProps} className="flex flex-col gap-6 lg:col-span-5">
            <motion.address variants={fadeUp} className="not-italic rounded-[2px] border border-crema/10 bg-roast p-6 md:p-8">
              <p className="label text-copper">Endereço</p>
              <p className="mt-3 font-display text-2xl font-light leading-snug text-crema">{siteData.enderecoCurto}</p>
              <p className="mt-2 text-latte">
                {siteData.cidadeUf} · CEP {siteData.cep}
              </p>

              <div className="hairline my-6" />

              <dl className="grid gap-5 sm:grid-cols-2">
                <div>
                  <dt className="label text-copper">Telefone & WhatsApp</dt>
                  <dd className="mt-2">
                    <a href={siteData.telefoneHref} className="inline-flex min-h-[44px] items-center gap-2 text-crema hover:text-ember">
                      <IconPhone className="h-4 w-4" />
                      {siteData.telefone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="label text-copper">Horário</dt>
                  <dd className="mt-2 text-latte">{horarioDisponivel ? siteData.horarios : "Consulte pelo WhatsApp"}</dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteData.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost flex-1"
                  aria-label="Abrir rota no Google Maps (abre em nova aba)"
                >
                  <IconPin className="h-4 w-4" />
                  Como chegar
                </a>
                <a
                  href={buildWhatsapp(whatsappMessages.reserva)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex-1"
                  aria-label="Reservar mesa pelo WhatsApp (abre em nova aba)"
                >
                  <IconWhatsApp className="h-4 w-4" />
                  Reservar
                </a>
              </div>
            </motion.address>

            <motion.div variants={fadeUp} className="rounded-[2px] border border-crema/10 p-6 md:p-8">
              <p className="label text-copper">Perguntas frequentes</p>
              <ul className="mt-4">
                {siteData.faq.map((item, index) => (
                  <FaqItem key={item.pergunta} item={item} index={index} open={aberto === index} onToggle={() => setAberto(aberto === index ? -1 : index)} />
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
