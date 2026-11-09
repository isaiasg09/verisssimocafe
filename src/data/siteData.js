const PHOTO_BASE = "https://places.googleapis.com/v1/places/ChIJySoGiEd5GZURL9a9ole-oJQ/photos/";
const PHOTO_QUERY = "/media?maxHeightPx=1080&maxWidthPx=1080&key=AIzaSyBPxm1MZ9XPx9q5rxDvYm3QzxGmRPPT848";

const placePhoto = (ref) => `${PHOTO_BASE}${ref}${PHOTO_QUERY}`;

const whatsappNumber = "5551993614078";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

export const buildWhatsapp = (message) => `${whatsappBase}?text=${encodeURIComponent(message)}`;

export const whatsappMessages = {
  reserva: "Olá, Veríssimo! Vim pelo site e gostaria de reservar uma mesa.",
  pedido: "Olá, Veríssimo! Vim pelo site e gostaria de fazer um pedido.",
  cardapio: "Olá, Veríssimo! Vim pelo site e gostaria de conhecer o cardápio completo.",
};

export const siteData = {
  nome: "Veríssimo Café Bistrô",
  nicho: "Café & Bistrô",
  endereco: "R. 24 de Outubro, 111 - Lj 55 - Moinhos de Vento, Porto Alegre - RS, 90510-002",
  enderecoCurto: "Rua 24 de Outubro, 111 · Loja 55 · Moinhos de Vento",
  logradouro: "R. 24 de Outubro, 111 - Lj 55",
  bairro: "Moinhos de Vento",
  cidade: "Porto Alegre",
  uf: "RS",
  cidadeUf: "Porto Alegre – RS",
  cep: "90510-002",
  pais: "BR",
  mapsLink:
    "https://maps.google.com/?cid=10709769197488821807&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAIYBCAA",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+24+de+Outubro,+111+-+Moinhos+de+Vento,+Porto+Alegre+-+RS,+90510-002&output=embed",
  telefone: "(51) 99361-4078",
  telefoneInternacional: "+55 51 99361-4078",
  telefoneHref: "tel:+5551993614078",
  whatsapp: whatsappBase,
  nota: 4.3,
  notaFormatada: "4,3",
  totalAvaliacoes: 206,
  instagram: "https://www.instagram.com/reel/DJC2Wn0RfGA/",
  facebook: "https://www.facebook.com/p/Verissimo-Caf%C3%A9-Bistr%C3%B4-100038029242300/",
  horarios: "{{PREENCHER}}",
  precos: "{{PREENCHER}}",
  url: "{{PREENCHER}}",

  fotos: [
    {
      src: placePhoto(
        "AV-0GLcBWOze7BdafoawTpETFjpYCgEHbvrAXbpwj2QY7GOCLBbjwA3GnfHN06sW2AgbRk0IdhBvyoUFtRX22QiME5XkCxwJiDUTQy5_JKNUebw-IgVuTVcoJ--YRENFPXnVebueWkGBj4XWoqEBawoAQx6mXVGjIDXF5eGZlz6ctPZghqjXc9Fr0q6JRHqYRVvtEObfW2Uo-dXNWTW1vbfYDyqnI6_E6O3hdYvx01aNnZeBqwLcTc5ZWbpeGe1j98F3gSx_OPPSGLSDPzuiBx71Pph-FsXzny4qPQc0tqFC4Fjjp4rkw6E2uSmOJcbFxtBnA1xZ0xUZwGlCDlDOPJq_YURi2h6QobksL5AqTEEGdhLCr3AE2D9fxF0B9SXPsvlOAou6cs5ER_sGg8O1JxuPHkObh_n4WsvYI9e67hPcSN_D"
      ),
      alt: "Prato servido no Veríssimo Café Bistrô, no Moinhos de Vento",
    },
    {
      src: placePhoto(
        "AV-0GLcJChOsmogKZqqzA2hi-s7Yjs0ryD7YcGW5B_XWfNYkqPi8vakYFKZvdk5IIAVVYKC394OWNzFKqL4MfjQhtLuJuETgQyqkOoZVpz7TTeJMtS7xt6r6QgEstcmYxJmEKEOLP-fesSpGXOBBfhcyf2C_nf8Fp5ssgtcxq0WlfgdF8sznZ5fMh59MTjhnBhjh9K3erzmKPEnSqsdjzV39TIaq3Gv7tiW7plA80h2TBU16zZc9S9Cwxi-MMpAgCsn__6VXgw2vwKmofzb_WqrXzRzWPjCajAljRMXEpN1ZYDIqmKPEcNPN1AZzaDb4RRetOSPNIY1HQ7BkVRHVKtI2ED4TH_XBYfpLjYTfl55_QX3lQl0gnmTuZqSyUXL2Jhco-vhBf6b74eWJ7CC0giOBl2kGWMPK"
      ),
      alt: "Detalhe de prato e mesa do Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLc_5l0GEq3tqOVLzOEG51dMfUDgyMBJwptJmZDowyqB7gRd_eqz5ia1vTifQLU-bXv9jCQhX8TdKPFtnCntGEbxmwD8hsKb1MikzMzAKUROsDKnMoQnZFw8uDsy4_xR1RAeMGzMkk419T6nEOiRzk7K-HVeuc-K_m9Mo0HmemMy7X4EsWARLonAimwPLSDusMfY4HKB3KFi0IvW-D_Y-y2Y3tZMiHaAnTSPY1-gYTd66JFTjjcGyVE_wOr9Car5LAQss2kqcaXfRd98BsI1xRzMw40TUg0Y90zPUcUL61jWBFZ62nNz2QWYoIB7rBlFRXfW87LL5xY8C3HQj5Jgi58C-eAmSdu4yUZXpPS6YiOwxfGEv_fz13HIRgPBVkiSO5vcM4dXaGI9QGU0ZPAqEUfC2AA"
      ),
      alt: "Sanduíche servido no Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLffBQpxyNWfls31JM0CPVZkTao8yQLPr0dFIsi37HSifsMvZJ2J8ERfQ2slFSagKfZVMWS4DxGRdw2SjkA867Ji1vBkdss45XndcaiMI3ISswmyazr_bM01EfQAp-eu_nBKKae7ilR6YeELq3b9fEejEFdTnqnCwRQCcxUmS-UOTJkkxBa3FFgim5n0k3CnmQ0j_BEowuYIz32cOuVjPCgkmxGVD010mtLIkMlPKaqzsVmarh14qLYSBuxRWIUO0PUXch_5-cjctIl6beMVniWFD9di-HSC5uwrsKA8m24QPJLKMlcD2XJKeIeVDpoCvlq-cPrhaTZMKPomEvRzpSx6CQY0Y0kz5KyfARnlluQZM3mNgIwlDeUodRur8XLdrmzqyFFeHgTpl4d44q6SGMK7etRK18dI1Wj-O8YSNBIYCQ"
      ),
      alt: "Prato do cardápio do Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLdicnCq8Fh7wKrSIQOIIXieotp61y5qfB6pOIip36_RRnk2ieu0dxYT5nHWcFZ6ednL_B2wjOUgTFKNcCWFY2Xb685dGffPtcPdSuI0b74lCNjOmv_pvGWHD2NG2JMC6bgSEPfXozxqQhpr_-9YD24W71qY_9EONEzWj2CqUOsFl11WRHfcPhR31xIWM1FhhDRH4s1WU1oW_ldI19GQz2dYQf3vPd0XoGJA1BKt2dz9sYFnj1hor1a6UzbujD1YNLWGElehlWMYeVnzv3fajU7ibqCpjueAdpWcFKR4Eq-nrX-W5DPaha8po_EyNaO9X0y5Jww23zRzmK7H5PcUYM6ZZn3jvShrLb4Zpq4VlBewmjvNPMbl3Pa8X6lP3wcKPzMnaXKQgz73fljjFunWUlAgZQYW"
      ),
      alt: "Café servido no Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLfOQFrGs1mvxfzm_Zq0RZ6QFXfUWm7dPvRS0thqSRtwyg4ZB2z871TrkwDptENbaeQyWT2CRniUOD2yXDz7FVf8vnZMb26eugUVMvxjpKKY61F1zNBRgzh3r2-NcJOHnpQVonjmY2K0puD2Qw7d4DEop63mXyDrvCzezg9tmYj_Knr_77SNlJ0JqBgQjwz9WW_q--1rPy6D6v4Pu33eiNvb096cakNOG0AsGc-km2b5xNZ3qXqcSaJZMarubTQGU1NTt_JQNuJdSUmdPREOIJD6pc4odPi0wZJYECf068q7KLEVOVtRiFCbntSbAujV1L376Xse1NMmwZEgvm4HXpN9tTyvY4vKtkNCwns6MPPxW6JwhymaI85AEDGExLrYEDqFoDa_Sm8ihPWlpw0GsFlDIawN_14Rt_ZG5Owrf8jhtg"
      ),
      alt: "Opção do cardápio do Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLcvKZCO4-FnItg_1C6CHvZu2DUM0cVnFLKoJizRiWyuOBd8JyHbAycZmGVVIHlABCNyyXe6CC6D6WUIvcGcVcMTfYZslfGinFYaq1KMbarEgnEgSedJ6KMxakfbhSD37p-BXI7QiW6lJ5S8FF7PIaoafTEY-9B2IVT9zIIY3Lk0k64NsuDYSIxNXCN26gcxGbzl6n7wnpArmxkoFH4IbzEftgklkvP559BgJh_bQCP4qIA369ZjfAv7YLn8xOvQDGVdmflFhODG_Dt6KeF0CYAXrP6C7-RTeITLz0tmmIwINI6yWYUAuMf0I2y4JZOMxPXHg75NC274LgzUrnZLDfw38EVhHGvGPgkqLeLQOL-q5_KW5bp3MJqe5rOjKBelFwWgc1_GhzODX4G5L1gFMftwzpaC"
      ),
      alt: "Ambiente intimista do Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLdsk9Y82q5xcyoIflrIRHDeyVB33I1etxvo8rlrds0SqP1ISDhaDOAQ6Vy_gRZ7DG1bSSRi9npSwToibor44NzJNdFy7cPjR5RV1xUznnwx9d90byBSwKtz5_SIiPRBM0Rv5Lt8gMtV7pQc8J16z5L-ZAZQKNIxOfGzih5cU7GpheZbyGSMrdDIbT5e5QLF4y4wpJ3nvXN1mCA21WRw7cZKsJpF5jC-eZOcn6xosvlJ2q60rkuPWlaYXnSWxcFLmo2Bp7EDD95Gsetn0PhSwjAwW8GYRvKBlhrzxHUyTj7qR9XKuIzBeANcxMZIC6msuATOgVc0byX57djIuIi9V0WftY4bSNDjZE0RpXla4Zz0myzmdmP_qHE-grrbN2kc46hmXYUCp3t8_YtU3lTuNG7L1dGWWdYvOl2OeSbhSI76zQ"
      ),
      alt: "Salão aconchegante do Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLeJjVILzOwfMPsBOXkdJbGt2dstJpQf9pNoBPnb33DP3tuS6FG6ucz7jbiT4W99BpCYZBagvyq_ku0-oY5AlvCfy5fV8kCkX_KUGKL_XvUoQV2MkGeWTHhNbut80HvdFE_t7y8iVP9Ld-XnCyEZh0bw0L97rXVeIxzwv40Hzb6tvW_84n1b8OT1AyjSKyZXVJDwN_Rp_L_5SVBOnazIfKd20D0oGsxz4_yW9OFa5rukSd1RTv5mxhe1fIphFfIgEFa8fDaObbs5YX1eQmVRTTyXBxaWfQM4Mpo1sSNNzg8cxINpUDdb3ekq1X5hH5nEYcAMLEbd6DuBQyKinS4tTAfhlHuPriwoAOZHMwO1UCUXsRFlFvxkHQF57Qi3c_8ASHU9GNNFu32Krp9t5i8JAs0lWrkfswBW24NHQOd09gX5"
      ),
      alt: "Pedido preparado pelo Veríssimo Café Bistrô",
    },
    {
      src: placePhoto(
        "AV-0GLeqwwB7hXPhQKD_AwiAbTnF7qdzrsd2aYRvtn3Lw67I0rdjsA0eutnIxM8_BjdwiXtNkIAme84FU4z5din5U629IBc6tONlwgQjXTfsC20uZN2p2QzXl4_JY_VIc_JkfDHKmHrkJqO05_ga3oHzWPxAJKta8DKlqxWz9K2VQELHfpd6YnmHre_0lcdJXrW3sLrusxLv3ik8Cgq1PN61KrU-HBcLxGczmBS5ZPky_fNu1OOvRQh554COvEcEMH-GSOAwjJeq219MvhZkJojJlj0SC-1AML59_N2KfT8mJfS6WJEEypfw257pbCNrZevxjAv9D02yHvOWqoFgkF8YNz938oEwPiNRG8hELQb2gLr3n6InpXtzt-QoFXkS5lkTlKAr6H0uR4sKi0xqMB4OURjTvtnr69EWC9UmPMvbwJRQHA"
      ),
      alt: "Comida fresquinha feita no Veríssimo Café Bistrô",
    },
    {
      src: "https://avatars.mds.yandex.net/get-vertis-journal/4465444/jpg-8.jpg_1772461607031/1600x1600",
      alt: "Fachada e entorno do Veríssimo Café Bistrô no Moinhos de Vento",
    },
  ],

  avaliacoes: [
    {
      autor: "Pietra Olivia Schussler",
      nota: 5,
      texto:
        "Fui com minha mãe para experimentar o famoso sanduíche de pastrami e a combinação de ingredientes do prato não decepcionou. Apesar de um pouco caro, o sanduíche é muito bem servido e feito com excelentes ingredientes, a carne possui um gosto muito bom de defumado e textura macia. O atendimento foi bom, não demorou para nós sermos servidas e o lugar não é grande, mas confortável.",
    },
    {
      autor: "Aline Silva",
      nota: 5,
      texto: "Ambiente acolhedor, atendimento impecável! Comidas maravilhosas, temperadas e com muito sabor! Super recomendo!",
    },
    {
      autor: "Bárbara Ruschel",
      nota: 5,
      texto:
        "Lugar acolhedor, comida maravilhosa e atendimento excelente! O ambiente é pequeno, mas super aconchegante, o que deixa a experiência ainda mais especial e intimista. O atendimento é nota 10, com uma equipe muito atenciosa. Recomendo muito a visita!",
    },
    {
      autor: "William Pereira",
      nota: 5,
      texto:
        "A comida estava excelente. Pedi sanduíche de pastrami, sanduíche de filé e capuccino brasileiro e todos estavam ótimos e o capuccino foi um dos melhores que já tomei nos últimos tempos.",
    },
    {
      autor: "Junior Junior",
      nota: 5,
      texto:
        "Costumo descobrir novos cafés de Porto alegre, e o Veríssimo foi uma grata surpresa, cardápio bem variado com opções diferentes dos habituais e tudo fresquinho feito no local, preços dentro da faixa da região, mas que são justificados pelos sabores, me surpreendi com a qualidade dos pratos que provei e do atendimento cordial recebido, com certeza voltarei e vou trazer amigos!",
    },
  ],

  cardapio: [
    {
      id: "pastrami",
      numero: "01",
      nome: "Sanduíche de Pastrami",
      descricao: "Defumado, macio e bem servido. O famoso da casa.",
      citacao: "a carne possui um gosto muito bom de defumado e textura macia",
      citacaoAutor: "Pietra O. S.",
      preco: "{{PREENCHER}}",
      tag: "Estrela da casa",
      fotoIndex: 2,
    },
    {
      id: "file",
      numero: "02",
      nome: "Sanduíche de Filé",
      descricao: "Filé suculento no pão, para quem gosta de sabor sem rodeios.",
      citacao: "todos estavam ótimos",
      citacaoAutor: "William P.",
      preco: "{{PREENCHER}}",
      tag: "Clássico",
      fotoIndex: 3,
    },
    {
      id: "cappuccino",
      numero: "03",
      nome: "Cappuccino Brasileiro",
      descricao: "Citado entre os melhores por quem provou.",
      citacao: "um dos melhores que já tomei nos últimos tempos",
      citacaoAutor: "William P.",
      preco: "{{PREENCHER}}",
      tag: "Da xícara",
      fotoIndex: 4,
    },
    {
      id: "da-casa",
      numero: "04",
      nome: "Cardápio da Casa",
      descricao: "Opções diferentes das habituais, tudo fresquinho e feito no local.",
      citacao: "cardápio bem variado com opções diferentes dos habituais",
      citacaoAutor: "Junior J.",
      preco: "{{PREENCHER}}",
      tag: "Feito aqui",
      fotoIndex: 5,
    },
  ],

  faq: [
    {
      pergunta: "Onde fica o Veríssimo Café Bistrô?",
      resposta:
        "Na R. 24 de Outubro, 111 - Loja 55, no bairro Moinhos de Vento, em Porto Alegre - RS, CEP 90510-002.",
    },
    {
      pergunta: "Como reservo mesa ou falo com a casa?",
      resposta:
        "O jeito mais rápido é chamar direto pelo WhatsApp (51) 99361-4078.",
    },
    {
      pergunta: "Qual o telefone do Veríssimo?",
      resposta: "O telefone e WhatsApp é (51) 99361-4078.",
    },
    {
      pergunta: "O que pedir no Veríssimo Café Bistrô?",
      resposta:
        "Os mais elogiados pelos clientes são o sanduíche de pastrami defumado, o sanduíche de filé e o cappuccino brasileiro.",
    },
  ],
};

export const navLinks = [
  { label: "O Pastrami", href: "#pastrami" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "A Casa", href: "#experiencia" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Onde estamos", href: "#localizacao" },
];

export const isFilled = (value) => typeof value === "string" && value.length > 0 && !value.includes("{{PREENCHER}}");
