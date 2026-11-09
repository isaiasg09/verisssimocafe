import { motion } from "framer-motion";
import { buildWhatsapp, whatsappMessages } from "../data/siteData";
import { usePrefersReducedMotion } from "../lib/motion";
import { IconWhatsApp } from "../lib/ui";

export default function FloatingCTAs() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3" role="region" aria-label="Atalho rápido de contato">
      <motion.a
        href={buildWhatsapp(whatsappMessages.reserva)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar pelo WhatsApp (abre em nova aba)"
        whileTap={{ scale: 0.96 }}
        animate={
          reduced
            ? undefined
            : {
                boxShadow: [
                  "0 10px 30px -5px rgba(217, 98, 43, 0.45), 0 0 0 0px rgba(217, 98, 43, 0.45)",
                  "0 14px 40px -5px rgba(217, 98, 43, 0.7), 0 0 0 12px rgba(217, 98, 43, 0)",
                ],
              }
        }
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
        className="flex min-h-[56px] items-center gap-3 rounded-full bg-gradient-to-tr from-ember to-[#E97A42] px-5 text-espresso"
      >
        <IconWhatsApp className="h-6 w-6" />
        <span className="label hidden text-xs font-semibold sm:inline">WhatsApp</span>
      </motion.a>
    </div>
  );
}
