import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { buildWhatsapp, navLinks, siteData, whatsappMessages } from "../data/siteData";
import { EASE } from "../lib/motion";
import { IconClose, IconInstagram, IconMenu, IconWhatsApp, LogoMark, Wordmark } from "../lib/ui";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 40);
    setHidden(latest > previous && latest > 600 && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const reservaHref = buildWhatsapp(whatsappMessages.reserva);

  return (
    <>
      <a
        href="#conteudo"
        className="label fixed left-4 top-4 z-[80] -translate-y-24 rounded-full bg-ember px-5 py-3 text-espresso transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 ease-cinema ${
            scrolled
              ? "border-b border-copper/20 bg-espresso/70 backdrop-blur-xl backdrop-saturate-150"
              : "border-b border-transparent bg-transparent"
          }`}
        >
          <div className="container-editorial flex h-[72px] items-center justify-between gap-6 md:h-20">
            <a href="#topo" className="group flex min-h-[44px] items-center gap-3" aria-label="Veríssimo Café Bistrô, voltar ao topo">
              <LogoMark className="h-10 w-10 transition-transform duration-700 ease-cinema group-hover:rotate-[-12deg] md:h-11 md:w-11" />
              <Wordmark />
            </a>

            <nav aria-label="Navegação principal" className="hidden lg:block">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="label group relative inline-flex min-h-[44px] items-center text-latte transition-colors hover:text-crema"
                    >
                      {link.label}
                      <span className="absolute inset-x-0 bottom-2 h-px origin-left scale-x-0 bg-copper transition-transform duration-500 ease-cinema group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver o Veríssimo no Instagram (abre em nova aba)"
                className="hidden h-11 w-11 items-center justify-center rounded-full border border-crema/15 text-latte transition-colors hover:border-copper hover:text-crema sm:inline-flex"
              >
                <IconInstagram />
              </a>
              <a
                href={reservaHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reservar mesa pelo WhatsApp (abre em nova aba)"
                className="btn-primary hidden min-h-[44px] px-5 sm:inline-flex"
              >
                <IconWhatsApp className="h-4 w-4" />
                Reservar pelo WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Abrir menu"
                aria-expanded={open}
                aria-controls="menu-mobile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crema/15 text-crema lg:hidden"
              >
                <IconMenu />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="fixed inset-0 z-[70] flex flex-col bg-roast"
          >
            <div className="container-editorial flex h-[72px] items-center justify-between">
              <span className="flex items-center gap-3">
                <LogoMark className="h-10 w-10" />
                <Wordmark />
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-crema/15"
              >
                <IconClose />
              </button>
            </div>

            <nav aria-label="Navegação mobile" className="container-editorial flex flex-1 flex-col justify-center">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.7, ease: EASE }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-[52px] items-baseline gap-4 font-display text-4xl font-light text-crema sm:text-5xl"
                    >
                      <span className="label text-copper">0{i + 1}</span>
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="container-editorial space-y-3 pb-10">
              <a href={reservaHref} target="_blank" rel="noopener noreferrer" className="btn-primary w-full" aria-label="Reservar mesa pelo WhatsApp">
                <IconWhatsApp className="h-4 w-4" />
                Reservar pelo WhatsApp
              </a>
              <a href={siteData.instagram} target="_blank" rel="noopener noreferrer" className="btn-ghost w-full" aria-label="Ver nosso Reel no Instagram">
                <IconInstagram className="h-4 w-4" />
                Veja nosso Reel
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
