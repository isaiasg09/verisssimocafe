import { motion } from "framer-motion";
import { buildWhatsapp, navLinks, siteData, whatsappMessages } from "../data/siteData";
import { fadeUp, inViewProps, staggerContainer } from "../lib/motion";
import { IconArrowUpRight, IconFacebook, IconInstagram, IconPhone, IconPin, IconWhatsApp, LogoMark, SafeImage } from "../lib/ui";

export default function Footer() {
  const foto = siteData.fotos[10];
  const ano = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-roast pt-24 text-crema md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <SafeImage src={foto.src} alt="" className="h-full w-full" imgClassName="blur-md" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso via-roast/95 to-espresso" />

      <div className="container-editorial relative">
        <motion.div
          variants={staggerContainer(0.1)}
          {...inViewProps}
          className="relative overflow-hidden rounded-[2px] border border-copper/30 bg-espresso/90 p-8 sm:p-12 md:p-16"
        >
          <div className="glow-copper absolute -right-24 -top-24 h-96 w-96 opacity-60" />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <motion.p variants={fadeUp} className="section-number">
                N° 09 — Até já
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-balance mt-5 text-display font-light text-crema">
                Sua mesa no Veríssimo <em className="italic text-ember">está esperando</em>.
              </motion.h2>
              <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg text-latte">
                Pastrami defumado, sanduíche de filé e um cappuccino brasileiro saindo agora. Chame a gente no WhatsApp
                ou passe direto na 24 de Outubro.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a
                href={buildWhatsapp(whatsappMessages.reserva)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
                aria-label="Reservar pelo WhatsApp (abre em nova aba)"
              >
                <IconWhatsApp className="h-5 w-5" />
                Reservar pelo WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="mt-20 grid gap-12 border-t border-crema/10 py-16 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#topo" className="inline-flex items-center gap-4" aria-label="Veríssimo Café Bistrô, voltar ao topo">
              <LogoMark className="h-14 w-14" />
              <span>
                <span className="block font-display text-2xl text-crema">{siteData.nome}</span>
                <span className="label mt-1 block text-latte">{siteData.bairro} · {siteData.cidadeUf}</span>
              </span>
            </a>
            <p className="mt-6 max-w-xs text-sm text-latte">
              Café & bistrô intimista no Moinhos de Vento, com pratos feitos na hora e atendimento acolhedor.
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="lg:col-span-3">
            <p className="label text-copper">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex min-h-[36px] items-center text-latte transition-colors hover:text-crema">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="label text-copper">Atalhos & redes</p>
            <ul className="mt-4 space-y-2.5 text-latte">
              <li>
                <a href={buildWhatsapp(whatsappMessages.reserva)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center gap-2 hover:text-crema">
                  Reservar pelo WhatsApp <IconArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a href={buildWhatsapp(whatsappMessages.cardapio)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center gap-2 hover:text-crema">
                  Pedir cardápio completo <IconArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center gap-2 hover:text-crema">
                  Veja nosso Reel <IconArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a href={siteData.mapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center gap-2 hover:text-crema">
                  Ver no Google Maps <IconArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <address className="not-italic lg:col-span-2">
            <p className="label text-copper">Contato</p>
            <p className="mt-4 flex items-start gap-2 text-sm text-latte">
              <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
              <span>{siteData.endereco}</span>
            </p>
            <p className="mt-3">
              <a href={siteData.telefoneHref} className="inline-flex min-h-[36px] items-center gap-2 text-sm text-crema hover:text-ember">
                <IconPhone className="h-4 w-4 text-copper" />
                {siteData.telefone}
              </a>
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Veríssimo (abre em nova aba)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crema/15 text-latte transition-colors hover:border-copper hover:text-crema"
              >
                <IconInstagram />
              </a>
              <a
                href={siteData.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Veríssimo (abre em nova aba)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crema/15 text-latte transition-colors hover:border-copper hover:text-crema"
              >
                <IconFacebook />
              </a>
              <a
                href={siteData.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Veríssimo no Google Maps (abre em nova aba)"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crema/15 text-latte transition-colors hover:border-copper hover:text-crema"
              >
                <IconPin />
              </a>
            </div>
          </address>
        </div>

        <p aria-hidden="true" className="select-none overflow-hidden text-center font-display text-[17vw] font-light leading-[0.82] tracking-tight text-crema/[0.04]">
          Veríssimo
        </p>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-crema/10 py-8 text-xs text-latte/70 sm:flex-row">
          <p>© {ano} {siteData.nome}. Todos os direitos reservados.</p>
          <p>{siteData.enderecoCurto} · {siteData.cidadeUf}</p>
        </div>
      </div>
    </footer>
  );
}
