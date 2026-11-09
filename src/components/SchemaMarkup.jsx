import { isFilled, siteData } from "../data/siteData";

export default function SchemaMarkup() {
  const origin =
    isFilled(siteData.url)
      ? siteData.url
      : typeof window !== "undefined" && window.location?.origin
        ? window.location.origin
        : undefined;

  const business = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    name: siteData.nome,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.logradouro,
      addressNeighborhood: siteData.bairro,
      addressLocality: siteData.cidade,
      addressRegion: siteData.uf,
      postalCode: siteData.cep,
      addressCountry: siteData.pais,
    },
    telephone: siteData.telefoneInternacional,
    ...(origin ? { url: origin } : {}),
    hasMap: siteData.mapsLink,
    sameAs: [siteData.instagram, siteData.facebook].filter(Boolean),
    image: siteData.fotos.map((f) => f.src),
    servesCuisine: ["Café", "Sanduíches", "Bistrô"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteData.nota,
      bestRating: 5,
      ratingCount: siteData.totalAvaliacoes,
      reviewCount: siteData.totalAvaliacoes,
    },
    review: siteData.avaliacoes.map((a) => ({
      "@type": "Review",
      author: { "@type": "Person", name: a.autor },
      reviewRating: { "@type": "Rating", ratingValue: a.nota, bestRating: 5 },
      reviewBody: a.texto,
    })),
    ...(isFilled(siteData.horarios) ? { openingHours: siteData.horarios } : {}),
    ...(isFilled(siteData.precos) ? { priceRange: siteData.precos } : {}),
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.resposta,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
