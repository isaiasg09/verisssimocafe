import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { buildWhatsapp, siteData, whatsappMessages } from "../data/siteData";
import { fadeUp, inViewProps, staggerContainer, usePrefersReducedMotion } from "../lib/motion";
import { IconWhatsApp, SafeImage } from "../lib/ui";
import SteamCup from "./SteamCup";

const pilares = [
  {
    titulo: "Intimista",
    texto: "Poucas mesas e conversa sem pressa. Pequeno, confortável e acolhedor.",
    citacao: "pequeno, mas super aconchegante",
  },
  {
    titulo: "Atencioso",
    texto: "Atendimento cordial, de quem cuida da mesa como se fosse de casa.",
    citacao: "nota 10, com uma equipe muito atenciosa",
  },
  {
    titulo: "Feito na hora",
    texto: "Nada de vitrine parada. A cozinha prepara tudo aqui, fresquinho.",
    citacao: "tudo fresquinho feito no local",
  },
];

export default function Experiencia() {
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bigY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["-6%", "6%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["18%", "-18%"]);
  const cupY = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["10%", "-10%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], reduced ? ["0%", "0%"] : ["4%", "-14%"]);

  const fotoA = siteData.fotos[6];
  const fotoB = siteData.fotos[7];

  return (
    <section id="experiencia" ref={ref} aria-labelledby="experiencia-title" className="relative overflow-hidden bg-roast py-24 md:py-36">
      <motion.p
        style={{ x: wordX }}
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -top-4 left-0 whitespace-nowrap font-display text-[22vw] font-light italic leading-none md:-top-10"
      >
        aconchego · aconchego
      </motion.p>

      <div className="container-editorial relative grid gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2px]">
            <motion.div style={{ y: bigY }} className="scale-110">
              <SafeImage src={fotoA.src} alt={fotoA.alt} className="aspect-[4/5] w-full" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
          </div>

          <motion.div
            style={{ y: smallY }}
            className="absolute -bottom-10 right-0 w-[52%] rounded-[2px] border border-copper/30 bg-roast p-2 shadow-warm sm:-right-6 lg:-right-10"
          >
            <SafeImage src={fotoB.src} alt={fotoB.alt} className="aspect-square w-full" />
          </motion.div>

          <span className="label absolute left-4 top-4 rounded-full bg-espresso/80 px-3 py-1.5 text-latte backdrop-blur-sm">
            {siteData.bairro} · {siteData.cidadeUf}
          </span>
        </div>

        <motion.div variants={staggerContainer(0.1)} {...inViewProps} className="relative flex flex-col lg:col-span-6 lg:pl-10">
          <motion.p variants={fadeUp} className="section-number">
            N° 04 — A casa
          </motion.p>
          <motion.h2 variants={fadeUp} id="experiencia-title" className="text-balance mt-5 text-display font-light text-crema">
            Pequeno por fora, <em className="italic text-ember">enorme</em> no aconchego.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-pretty mt-6 max-w-xl text-lg text-latte">
            O Veríssimo é aquele bistrô de bairro onde a mesa vira sala de estar. Um cappuccino brasileiro que esquenta
            as mãos, o cheiro do defumado saindo da cozinha e uma equipe atenta, que serve sem demora.
          </motion.p>

          <div className="mt-10 grid items-end gap-10 sm:grid-cols-[1fr_auto]">
            <motion.ul variants={staggerContainer(0.12)} className="space-y-6">
              {pilares.map((pilar, index) => (
                <motion.li key={pilar.titulo} variants={fadeUp} className="grid grid-cols-[auto_1fr] gap-5 border-t border-crema/10 pt-5">
                  <span className="font-display text-2xl font-light italic text-copper">0{index + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl font-normal text-crema">{pilar.titulo}</h3>
                    <p className="mt-1 text-latte">{pilar.texto}</p>
                    <p className="label mt-2 text-[0.7rem] text-latte/70">“{pilar.citacao}” — cliente no Google</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <motion.figure style={{ y: cupY }} className="mx-auto w-44 sm:w-48 lg:w-56">
              <SteamCup />
              <figcaption className="label mt-2 text-center text-[0.7rem] text-latte">
                Cappuccino brasileiro
                <span className="mt-1 block font-display text-sm normal-case italic tracking-normal text-crema/80">
                  “um dos melhores que já tomei”
                </span>
              </figcaption>
            </motion.figure>
          </div>

          <motion.div variants={fadeUp} className="mt-12">
            <a
              href={buildWhatsapp(whatsappMessages.reserva)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Garantir sua mesa pelo WhatsApp"
            >
              <IconWhatsApp className="h-4 w-4" />
              Garantir minha mesa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
