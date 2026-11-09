import { motion } from "framer-motion";
import { siteData } from "./data/siteData";
import { EASE } from "./lib/motion";
import { IconPin, Stars } from "./lib/ui";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import DeconstructedSandwich from "./components/DeconstructedSandwich.jsx";
import Cardapio from "./components/Cardapio.jsx";
import Experiencia from "./components/Experiencia.jsx";
import Galeria from "./components/Galeria.jsx";
import ProvaSocial from "./components/ProvaSocial.jsx";
import Instagram from "./components/Instagram.jsx";
import Localizacao from "./components/Localizacao.jsx";
import Footer from "./components/Footer.jsx";
import FloatingCTAs from "./components/FloatingCTAs.jsx";
import SchemaMarkup from "./components/SchemaMarkup.jsx";

function Divider() {
  return (
    <div className="container-editorial" aria-hidden="true">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.2, ease: EASE }}
        className="hairline origin-left"
      />
    </div>
  );
}

const frasesFaixa = [
  "Sanduíche de pastrami defumado",
  "Cappuccino brasileiro",
  "Sanduíche de filé",
  "Tudo fresquinho, feito no local",
  "Ambiente pequeno e aconchegante",
  "Atendimento nota 10",
];

function FaixaProvaSocial() {
  return (
    <section id="prova" aria-label="Prova social no Google" className="relative border-y border-copper/20 bg-roast">
      <div className="container-editorial flex flex-wrap items-center justify-between gap-4 py-5">
        <a
          href={siteData.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-crema hover:text-ember"
          aria-label={`Nota ${siteData.notaFormatada} estrelas no Google com ${siteData.totalAvaliacoes} avaliações`}
        >
          <Stars value={siteData.nota} />
          <span className="label">
            {siteData.notaFormatada} ★ no Google · {siteData.totalAvaliacoes} avaliações
          </span>
        </a>
        <span className="inline-flex items-center gap-2 text-latte">
          <IconPin className="h-4 w-4 text-copper" />
          <span className="label">Moinhos de Vento · {siteData.enderecoCurto}</span>
        </span>
      </div>

      <div className="overflow-hidden border-t border-crema/5 py-3" aria-hidden="true">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...frasesFaixa, ...frasesFaixa].map((frase, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-sm italic text-latte/80">
              <span>{frase}</span>
              <span className="h-1 w-1 rounded-full bg-copper" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <SchemaMarkup />
      <div className="grain" aria-hidden="true" />
      <Header />
      <main id="conteudo">
        <Hero />
        <FaixaProvaSocial />
        <DeconstructedSandwich />
        <Divider />
        <Cardapio />
        <Experiencia />
        <Galeria />
        <ProvaSocial />
        <Instagram />
        <Localizacao />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
