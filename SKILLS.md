# SKILLS.md — Veríssimo Café Bistrô · Landing Page Cinematográfica

> Fase 1 · Compilação e auditoria de skills. Este documento é o contrato de design e engenharia que rege a Fase 2 (implementação).
> Arquétipo: **Warm Editorial Bistrô / Literary Café Noir**.

---

## 0 · Skills ativadas e vetadas

| Skill | Status | Papel no projeto |
|---|---|---|
| @3d-web-experience | ATIVA | Profundidade espacial, Parallax 2.5D, Three.js (`@react-three/fiber`) |
| @ui-ux-pro-max | ATIVA | Microinterações, hierarquia óptica, acabamento de estúdio |
| @scroll-experience | ATIVA | Revelações progressivas, sticky storytelling, ritmo narrativo |
| @design-taste-frontend | ATIVA | Proporções, espaço negativo, fuga de templates |
| @gpt-taste | ATIVA | Curadoria anti-slop, decisões editoriais |
| @tailwind-patterns | ATIVA | Tokens, mobile-first, utilitários consistentes |
| @copywriting | ATIVA | Voz da marca PT-BR, frases curtas e sensoriais |
| @page-cro | ATIVA | Hierarquia de CTAs, fricção mínima, zonas de calor |
| @schema-markup | ATIVA | SEO Local, `CafeOrCoffeeShop`, `FAQPage`, `AggregateRating` |
| @full-output-enforcement | ATIVA | Código 100% completo, sem reticências |
| @minimalist-ui | **VETADA** | Frieza incompatível com gastronomia afetiva |
| @industrial-brutalist-ui | **VETADA** | Agressividade incompatível com aconchego |

---

## 1 · Síntese das regras de ouro por skill

### @3d-web-experience
1. 3D serve à narrativa, nunca é enfeite: cada elemento em profundidade precisa contar algo (camadas do sanduíche, poeira dourada da luz de mesa).
2. Perspectiva única e coerente (`perspective: 1200px`) e `transform-style: preserve-3d` nos contêineres de camada.
3. Iluminação de estúdio: uma key light quente (glow `ember`/`copper`), sombra de contato no chão e vinheta para focar o olhar.
4. WebGL leve: DPR limitado `[1, 1.5]`, poucas centenas de partículas, `frameloop` pausado fora da viewport, lazy load com `Suspense`.
5. Degradação graciosa: sem WebGL ou com `prefers-reduced-motion`, nada quebra e a composição continua bonita.

### @ui-ux-pro-max
1. Hierarquia óptica: um ponto focal por dobra; escala tipográfica contrastante (H1 até 9rem vs. labels de 12px).
2. Microinterações com propósito: hover revela informação (glow, tilt), tap confirma (`scale 0.98`).
3. Estados completos: hover, focus-visible, active e fallback de imagem (`onError`).
4. Toque ≥ 44px, foco visível com anel `ember`, contraste AA.
5. Acabamento: bordas de 1px em `copper/20`, raios consistentes, sombras quentes (nunca pretas puras).

### @scroll-experience
1. A página é um roteiro: abertura (Hero) → clímax de produto (Pastrami) → prova → ação.
2. Sticky sections para momentos-chave (~300vh no Pastrami), com scrubbing suavizado por `useSpring`.
3. Revelações `whileInView` com `once: true` e margem `-15%`, stagger de 0.08–0.12s.
4. Velocidades diferentes por coluna/camada criam profundidade (Galeria, Hero).
5. Respiro: nem tudo anima. Alternar seções densas com seções calmas.

### @design-taste-frontend
1. Grid assimétrico editorial (7/5, 8/4), nunca três cards idênticos centralizados sem tensão.
2. Espaçamento generoso em escala áurea aproximada (8 · 13 · 21 · 34 · 55 · 89 px → `py-24 md:py-36`).
3. Tipografia é a imagem: serifada de alto contraste com itálico como gesto de voz.
4. Paleta restrita: 2 neutros quentes + 1 acento principal + 1 raro.
5. Detalhes de autor: numeração de seção ("N° 01"), fios finos, legendas em versalete condensado.

### @gpt-taste
1. Proibido: gradientes roxo/azul, glassmorphism genérico, ícone de grão de café clipart, emojis como ícones.
2. Textura real: grão de filme (`feTurbulence`, opacidade ≤ 0.06) + vinheta radial quente.
3. Fotos reais protagonistas; ilustração 2.5D só onde a foto não existe (camadas do sanduíche).
4. Cada seção precisa de uma ideia visual própria. Se parece template, refazer.

### @tailwind-patterns
1. Mobile-first: estilos base sem prefixo, depois `md:` e `lg:`.
2. Tokens semânticos em `theme.extend` (cores, fontes, easing, sombras) e nada de hex solto nos componentes.
3. Componentes de classe repetida extraídos em `@layer components` (`.btn-primary`, `.label`, `.container-editorial`).
4. `clamp()` para tipografia fluida.
5. Projeto em Tailwind v3.4 (`tailwind.config.js` exigido pela árvore de arquivos), compatível com PostCSS + Vite.

### @copywriting
1. Clareza antes de criatividade; benefícios concretos (defumado, macio, bem servido).
2. Usar a linguagem dos clientes (avaliações reais) como matéria-prima.
3. Frases curtas, verbos sensoriais, zero clichês ("experiência única", "sabores inesquecíveis").
4. CTAs com verbo + resultado ("Reservar pelo WhatsApp", "Pedir Direto pelo WhatsApp").
5. Nunca inventar fatos: preços, horários e descrições oficiais ficam `{{PREENCHER}}`.

### @page-cro
1. Proposta de valor compreensível em 5s (H1 + subtítulo + prova social na primeira dobra).
2. Um objetivo primário (WhatsApp) repetido em pontos de decisão; secundários com peso visual menor.
3. Prova social perto de cada CTA (nota 4,3 · 206 avaliações).
4. Objeções tratadas: "é caro?" → "preço justificado pelo sabor" (avaliação real); "é pequeno?" → "intimista".
5. CTAs persistentes em zonas de calor: header fixo + botões flutuantes no polegar (canto inferior direito).

### @schema-markup
1. JSON-LD reflete apenas conteúdo visível na página.
2. Tipo `CafeOrCoffeeShop` (subtipo de `FoodEstablishment` → `LocalBusiness`).
3. Nada de placeholder no schema: `openingHours` e `priceRange` são omitidos até existirem dados reais.
4. `FAQPage` com perguntas respondidas visivelmente na página (seção Localização).
5. Aviso honesto: Google não exibe estrelas de review auto-declaradas em `LocalBusiness` (self-serving reviews). A marcação é válida e útil para entendimento semântico, mas sem promessa de rich result.

### @full-output-enforcement
1. Todos os arquivos completos, sem `...`, sem `// resto do código`.
2. Projeto executável com `npm install && npm run dev`.
3. Arquivos de infraestrutura incluídos (`package.json`, `vite.config.js`, `postcss.config.js`).

---

## 2 · Tradução prática para o Veríssimo

### 2.1 Arquétipo
**Literary Café Noir.** O nome "Veríssimo" evoca o escritor gaúcho, então a página se comporta como uma edição impressa: numeração de capítulos ("N° 01 — O sanduíche"), capitulares, legendas em versalete e muito ar. A luz é de mesa de bistrô à noite: fundo `espresso`, foco quente em `ember`/`copper` atrás dos pratos.

**Integração da logo real:** a marca usa um "V" serifado rosado cercado por "café • bistrô" em texto circular sobre verde profundo. A logo foi recriada em SVG (`<textPath>` circular + V em Fraunces) para nitidez em qualquer escala e reaproveitada no Header, Footer e como selo giratório no Hero. O PNG original fica em `public/logo-verissimo.png` como favicon e imagem Open Graph. Os tokens da marca foram preservados como acento discreto (`brand.green #234A45`, `brand.blush #F2D4D1`) dentro do selo, sem quebrar a paleta quente pedida.

### 2.2 Tokens (`tailwind.config.js`)
| token | valor | uso |
|---|---|---|
| `espresso` | `#140D09` | fundo principal |
| `roast` | `#1F1510` | cards, superfícies |
| `crema` | `#F3E7D3` | texto principal / seção clara |
| `latte` | `#C9B08A` | texto secundário (contraste ≈ 8.9:1 sobre espresso) |
| `ember` | `#D9622B` | CTA primário |
| `copper` | `#B8743A` | fios, bordas, glows |
| `olive` | `#6B7A4B` | delivery, frescor |
| `brand.green` | `#234A45` | selo da logo |
| `brand.blush` | `#F2D4D1` | V da logo |

Texto sobre `ember`: usamos `espresso` (contraste ≈ 5.0:1, AA) no botão primário.

### 2.3 Tipografia
- `font-display` → **Fraunces** (opsz, 300–700, itálico). H1: `clamp(3rem, 8.5vw, 9rem)`, tracking −0.03em, leading 0.92.
- `font-label` → **Barlow Condensed** uppercase, `tracking-label` 0.18em, 12–14px.
- `font-sans` → **Inter** 16–18px, line-height 1.65.

### 2.4 Texturas
- `.grain`: overlay fixo com SVG `feTurbulence` (baseFrequency 0.8, opacidade 0.05), `pointer-events: none`.
- `.vignette`: `radial-gradient` quente (transparente → `#140D09`).
- `.glow-copper`: `radial-gradient` cobre/brasa desfocado atrás de pratos e da xícara.

### 2.5 Física de scroll
| Seção | Técnica | Parâmetros |
|---|---|---|
| Hero | `useScroll` + `useTransform` | foto 1: `y 0→20%`, `scale 1.05→1.15`; foto 2: `y 0→-12%` |
| Hero | Cursor reactive | `useMotionValue` + `useSpring` (stiffness 60, damping 18) |
| Pastrami | Sticky 300vh | `offset ["start start","end end"]`, `useSpring` (90/20), 5 camadas com `y`, `rotateX` 4–10°, `scale`, `opacity` |
| Galeria | Colunas | velocidades `-8%`, `+10%`, `-14%` |
| Divisores | `scaleX` do fio cobre conforme entrada | — |
| Reveal geral | `whileInView` | `once: true`, `margin "-15%"`, ease `[0.22,1,0.36,1]` |

### 2.6 Three.js
- `DustField` no Hero: ~420 partículas (`THREE.Points`) douradas em profundidade, shader de ponto suave com blending aditivo, deriva lenta e parallax inercial conforme o cursor (lerp 0.04).
- `<Canvas dpr={[1, 1.5]} frameloop={inView ? "always" : "never"}>`, carregado via `React.lazy` + `Suspense`.
- Desativado em `prefers-reduced-motion` e quando não há WebGL.

### 2.7 Conversão
- CTA primário único: **WhatsApp** com mensagem pré-preenchida (`?text=`).
- Secundários: "Ver Cardápio" (âncora), iFood, Anota AI, Instagram, Google Maps.
- Flutuantes: WhatsApp (pulso orgânico) + botão Delivery que expande iFood / Anota AI.
- Rótulos genéricos de delivery ("Pedir pelo iFood" / "Pedir pelo Anota AI"), URLs centralizadas em `siteData`.

---

## 3 · Matriz de auditoria e conformidade

### 3.1 Estrutura e entrega
- [x] `SKILLS.md` criado antes de qualquer componente
- [x] Árvore de arquivos obrigatória respeitada (+ `package.json`, `vite.config.js`, `postcss.config.js`, `public/`)
- [x] Código completo, sem abreviações (@full-output-enforcement)

### 3.2 Identidade visual
- [x] 7 tokens de cor exatos em `theme.extend.colors`
- [x] Fraunces / Barlow Condensed / Inter via Google Fonts com `preconnect`
- [x] H1 em `clamp(3rem, …, 9rem)`
- [x] Uma única seção clara (`crema`): Prova Social
- [x] Grão ≤ 0.06, vinheta quente, glow cobre
- [x] Zero gradientes roxo/azul, zero clipart de grão de café
- [x] Logo real integrada (SVG fiel + PNG original)

### 3.3 Dados
- [x] Todos os dados em `src/data/siteData.js`
- [x] Cidade corrigida para "Porto Alegre – RS"
- [x] iFood/Anota AI exatamente como informados, rótulos genéricos
- [x] 11 fotos reais, distribuição conforme especificação
- [x] 5 avaliações reais sem reescrita
- [x] Facebook incluído (fornecido no JSON bruto) em `sameAs` e Footer
- [x] `horarios`, `precos` = `{{PREENCHER}}`

### 3.4 Seções (ordem)
- [x] 1 Header fixo translúcido, blur, borda cobre, CTA WhatsApp + Instagram
- [x] 2 Hero cinematográfico
- [x] 3 Faixa de prova social
- [x] 4 Pastrami Deconstructed (sticky 300vh)
- [x] 5 Cardápio com cards 3D
- [x] 6 Experiência + SteamCup
- [x] 7 Galeria masonry com parallax por coluna
- [x] 8 Prova Social (crema) com 5 avaliações
- [x] 9 Delivery (WhatsApp primário, iFood/Anota AI secundários)
- [x] 10 Instagram ("Veja nosso Reel")
- [x] 11 Localização + FAQ visível
- [x] 12 Footer com CTA final

### 3.5 Animação
- [x] H1 com máscara `y 110% → 0`, ease `[0.22, 1, 0.36, 1]`
- [x] `staggerChildren` no Hero
- [x] Parallax foto 1 (`y 0→20%`, `scale 1.05→1.15`) e foto 2 em velocidade distinta
- [x] Cursor-reactive no Hero
- [x] Indicador de scroll animado
- [x] Sanduíche: 5 camadas, `perspective 1200px`, `rotateX`, `scale`, `opacity`, `useSpring(90, 20)`, remontagem ao final
- [x] Etiquetas editoriais com fio cobre e stagger
- [x] Glow pulsante + sombra de contato
- [x] Amplitude reduzida < 768px
- [x] SteamCup com `feTurbulence` + `feDisplacementMap` animados + keyframes de vapor
- [x] Cards com tilt por mouse, `translateZ`, glow, `scale 1.03`, `whileTap 0.98`
- [x] Three.js com Suspense, lazy, DPR limitado, pausa fora da viewport
- [x] Flutuantes com pulso de `boxShadow`
- [x] Apenas `transform`/`opacity` nas animações contínuas

### 3.6 Acessibilidade e performance
- [x] `prefers-reduced-motion` desativa parallax, partículas e loops
- [x] Foco visível (`focus-visible:ring-ember`)
- [x] `aria-label` em todos os CTAs com ícone
- [x] HTML semântico (`header`, `main`, `section[aria-labelledby]`, `footer`, `nav`)
- [x] Imagens com `alt`, `loading="lazy"` (exceto Hero), `decoding="async"`, `aspect-ratio`, `onError` → gradiente da marca
- [x] Touch targets ≥ 44px
- [x] Skip link para o conteúdo

### 3.7 SEO
- [x] `lang="pt-BR"`, title/description com "café bistrô Moinhos de Vento Porto Alegre"
- [x] Open Graph + Twitter Card
- [x] JSON-LD `CafeOrCoffeeShop` com address, telephone, url, sameAs, aggregateRating, hasMap, servesCuisine, review
- [x] `FAQPage` com 4 perguntas visíveis na página
- [x] `openingHours`/`priceRange` omitidos enquanto `{{PREENCHER}}`

---

## 4 · Pendências do cliente (`{{PREENCHER}}`)
1. Horário de funcionamento
2. Faixa de preço e preços dos itens
3. Descrições oficiais dos pratos
4. Confirmar se os links de iFood (Bistrô Vista Carioca) e Anota AI (Temperíssima) pertencem ao Veríssimo
5. Perfil oficial do Instagram (hoje só há link de um Reel)
6. Domínio final (para `url` e `og:url`)
