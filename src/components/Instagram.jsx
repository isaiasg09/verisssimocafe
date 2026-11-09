import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
import { EASE, fadeUp, inViewProps, staggerContainer } from "../lib/motion";
import { IconArrowUpRight, IconInstagram, SafeImage } from "../lib/ui";

const mosaico = [0, 4, 6, 2, 7, 9];

export default function Instagram() {
  return (
    <section id="instagram" aria-labelledby="instagram-title" className="relative bg-roast py-24 md:py-32">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-[2px] border border-copper/25 bg-gradient-to-br from-[#3A1F12] via-roast to-[#2A140C] p-6 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-ember/25 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-copper/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div variants={staggerContainer(0.1)} {...inViewProps} className="lg:col-span-5">
              <motion.span variants={fadeUp} className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#F58529] via-[#E1306C] to-[#C13584] text-white shadow-warm">
                <IconInstagram className="h-7 w-7" />
              </motion.span>
              <motion.p variants={fadeUp} className="section-number mt-8">
                N° 07 — Instagram
              </motion.p>
              <motion.h2 variants={fadeUp} id="instagram-title" className="mt-4 text-title font-light text-crema md:text-[clamp(2rem,3.4vw,3.5rem)]">
                Acompanhe o <em className="italic text-ember">Veríssimo</em>.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 max-w-md text-latte">
                Bastidores da cozinha, o vapor do cappuccino e aquele pastrami saindo do ponto. Veja nosso Reel e
                acompanhe os stories.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8">
                <a
                  href={siteData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  aria-label="Veja nosso Reel no Instagram (abre em nova aba)"
                >
                  <IconInstagram className="h-4 w-4" />
                  Ver no Instagram
                </a>
              </motion.div>
            </motion.div>

            <a
              href={siteData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir o Reel do Veríssimo no Instagram"
              className="group relative grid grid-cols-3 gap-2 sm:gap-3 lg:col-span-7"
            >
              {mosaico.map((fotoIndex, i) => (
                <div key={fotoIndex} className={i === 1 || i === 4 ? "translate-y-6" : ""}>
                  <motion.div
                    initial={{ opacity: 0, y: 30, rotate: i % 2 ? 2 : -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.9, delay: i * 0.07, ease: EASE }}
                    className="overflow-hidden rounded-[2px]"
                  >
                    <SafeImage
                      src={siteData.fotos[fotoIndex].src}
                      alt={siteData.fotos[fotoIndex].alt}
                      className="aspect-square w-full"
                      imgClassName="transition-transform duration-700 ease-cinema group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              ))}
              <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-espresso/85 text-crema backdrop-blur-md transition-transform duration-500 ease-cinema group-hover:scale-110">
                <span className="flex flex-col items-center">
                  <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[15px] border-y-transparent border-l-crema" />
                  <span className="label mt-1 text-[0.6rem] text-latte">Reel</span>
                </span>
              </span>
              <span className="label absolute -bottom-2 right-0 flex items-center gap-1 text-latte transition-colors group-hover:text-crema">
                Veja nosso Reel <IconArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
