export interface PlanOffer {
  price: number;
  url: string;
  label: string;
  items: string[];
}

export interface ColoringSample {
  id: string;
  number: string;
  title: string;
  theme: string;
  pagesLabel: string;
  imageUrl: string;
  alt: string;
}

export interface BonusItem {
  id: 'bonus1' | 'bonus2' | 'bonus3' | 'bonus4';
  numberLabel: string;
  title: string;
  subtitle: string;
  description: string;
  benefit: string;
}

export interface IllustrativeConversation {
  id: string;
  title: string;
  imageUrl: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BASIC_CHECKOUT_URL =
  'https://pay.kirvano.com/1870e3b5-0ae1-4524-ad63-e965ae188d6f';
export const PREMIUM_CHECKOUT_URL =
  'https://pay.kirvano.com/50b3f71b-1b96-4d64-b212-c38e6129dafa';

export const OFFER_CONFIG = {
  basic: {
    price: 10.0,
    url: BASIC_CHECKOUT_URL,
    label: 'QUERO O PLANO BÁSICO',
    items: [
      '+150 desenhos natalinos para colorir',
      'Arquivos digitais para imprimir',
      'Imprima e pinte à vontade',
      'Garantia de 30 dias',
    ],
  } satisfies PlanOffer,
  premium: {
    price: 19.9,
    url: PREMIUM_CHECKOUT_URL,
    label: 'QUERO O PLANO PREMIUM COMPLETO',
    items: [
      '+150 desenhos natalinos para colorir',
      'BÔNUS 1 · 10 Atividades Natalinas',
      'BÔNUS 2 · 20 Cartões e Etiquetas de Natal',
      'BÔNUS 3 · Kit Especial Papai Noel',
      'BÔNUS 4 · Calendário de Contagem Regressiva para o Natal',
      'Garantia de 30 dias',
    ],
  } satisfies PlanOffer,
  popup: {
    price: 15.9,
    url: PREMIUM_CHECKOUT_URL,
    label: 'QUERO O KIT COMPLETO POR R$ 15,90',
    enabled: true,
    checkoutPriceVerified: true,
    trigger: 'basic-click' as const,
  },
};

export const COLORING_SAMPLES: ColoringSample[] = [
  {
    id: 'page1',
    number: '01',
    title: 'Ursinhos na Oficina de Natal',
    theme: 'Traços largos · Ideal para crianças',
    pagesLabel: 'Coleção Clássica · A4 PDF',
    imageUrl: '/assets/aistudio/6_9fd6f2a7.png',
    alt: 'Desenho para colorir: ursinhos natalinos embrulhando presentes, costurando e desenhando perto da árvore de Natal',
  },
  {
    id: 'page2',
    number: '02',
    title: 'Ursinhos & Pinguim Musicais',
    theme: 'Detalhes suaves para lápis ou giz',
    pagesLabel: 'Coleção Clássica · A4 PDF',
    imageUrl: '/assets/aistudio/99_45d55ab4.png',
    alt: 'Desenho para colorir: dois ursinhos com gorro ouvindo música e tocando violino na neve com um pinguim lendo',
  },
  {
    id: 'page3',
    number: '03',
    title: 'Ursinhos na Fogueira de Inverno',
    theme: 'Cenário aconchegante na floresta nevada',
    pagesLabel: 'Inverno Mágico · A4 PDF',
    imageUrl: '/assets/aistudio/8_c0d2e0f5.png',
    alt: 'Desenho para colorir: dois ursinhos sentados em um tronco na fogueira sob a lua cheia',
  },
  {
    id: 'page4',
    number: '04',
    title: 'Sala Natalina com Lareira',
    theme: 'Árvore decorada, meias, guirlanda e presentes',
    pagesLabel: 'Cenários · A4 PDF',
    imageUrl: '/assets/aistudio/2_00ee02ad.png',
    alt: 'Desenho para colorir: sala acolhedora de Natal com lareira, meias, poltrona, guirlanda, árvore decorada e presentes',
  },
  {
    id: 'page5',
    number: '05',
    title: 'Ursinho Lendo na Noite de Natal',
    theme: 'Clima aconchegante para pintar em família',
    pagesLabel: 'Personagens · A4 PDF',
    imageUrl: '/assets/aistudio/7_175f8d8e.png',
    alt: 'Desenho para colorir: ursinho de gorro lendo livro de Natal na cama com caneca quente e vista para casas nevadas',
  },
  {
    id: 'page6',
    number: '06',
    title: 'Papai Noel no Trenó com Renas',
    theme: 'Noite mágica de Natal sobre as casinhas',
    pagesLabel: 'Coleção Clássica · A4 PDF',
    imageUrl: '/assets/aistudio/3_9d9695df.png',
    alt: 'Desenho para colorir: Papai Noel acenando no trenó puxado por renas voando sobre casas cobertas de neve',
  },
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'bonus1',
    numberLabel: 'PRESENTE 01 · BÔNUS DO PLANO PREMIUM',
    title: '10 Atividades Natalinas',
    subtitle: 'Mais diversão além dos desenhos.',
    description:
      'Material complementar com 10 atividades temáticas, com brincadeiras, desafios e exercícios divertidos para as crianças.',
    benefit: '✧ Para variar a diversão.',
  },
  {
    id: 'bonus2',
    numberLabel: 'PRESENTE 02 · BÔNUS DO PLANO PREMIUM',
    title: '20 Cartões e Etiquetas de Natal',
    subtitle: 'Para presentear com carinho.',
    description:
      'Coleção com 20 modelos de cartões e etiquetas natalinas para imprimir, recortar, escrever mensagens e personalizar presentes.',
    benefit: '✧ Para personalizar cada presente.',
  },
  {
    id: 'bonus3',
    numberLabel: 'PRESENTE 03 · BÔNUS DO PLANO PREMIUM',
    title: 'Kit Especial Papai Noel',
    subtitle: 'Um pedacinho da magia do Natal.',
    description:
      'Inclui Carta ao Papai Noel, Lista de Desejos, Certificado de Ajudante do Natal e o Desafio: Espalhe a Magia do Natal.',
    benefit: '✧ Para viver a magia do Natal.',
  },
  {
    id: 'bonus4',
    numberLabel: 'PRESENTE 04 · BÔNUS DO PLANO PREMIUM',
    title: 'Calendário de Contagem Regressiva para o Natal',
    subtitle: 'A espera fica mais divertida.',
    description: 'Calendário temático para as crianças acompanharem os dias até o Natal.',
    benefit: '✧ Para tornar a espera especial.',
  },
];

export const ILLUSTRATIVE_CONVERSATIONS: IllustrativeConversation[] = [
  {
    id: 'conversation1',
    title: 'Conversa ilustrativa 1',
    imageUrl: '/assets/aistudio/modelo_depoimento_01_066ad575.png',
    alt: 'Exemplo 1 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation2',
    title: 'Conversa ilustrativa 2',
    imageUrl: '/assets/aistudio/modelo_depoimento_02_eeb133a2.png',
    alt: 'Exemplo 2 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation3',
    title: 'Conversa ilustrativa 3',
    imageUrl: '/assets/aistudio/modelo_depoimento_03_f2b43501.png',
    alt: 'Exemplo 3 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation4',
    title: 'Conversa ilustrativa 4',
    imageUrl: '/assets/aistudio/modelo_depoimento_04_db795bd2.png',
    alt: 'Exemplo 4 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation5',
    title: 'Conversa ilustrativa 5',
    imageUrl: '/assets/aistudio/modelo_depoimento_05_beb3d997.png',
    alt: 'Exemplo 5 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation6',
    title: 'Conversa ilustrativa 6',
    imageUrl: '/assets/aistudio/modelo_depoimento_06_3c9a6a00.png',
    alt: 'Exemplo 6 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation7',
    title: 'Conversa ilustrativa 7',
    imageUrl: '/assets/aistudio/modelo_depoimento_07_8073586d.png',
    alt: 'Exemplo 7 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation8',
    title: 'Conversa ilustrativa 8',
    imageUrl: '/assets/aistudio/modelo_depoimento_08_36ab8e8c.png',
    alt: 'Exemplo 8 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation9',
    title: 'Conversa ilustrativa 9',
    imageUrl: '/assets/aistudio/modelo_depoimento_09_46c5d942.png',
    alt: 'Exemplo 9 — conversa ilustrativa, não é depoimento real',
  },
  {
    id: 'conversation10',
    title: 'Conversa ilustrativa 10',
    imageUrl: '/assets/aistudio/modelo_depoimento_10_e16a35b1.png',
    alt: 'Exemplo 10 — conversa ilustrativa, não é depoimento real',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'O produto tem garantia?',
    answer:
      'Sim. A compra conta com garantia de 30 dias para solicitar o reembolso, conforme as orientações recebidas na compra.',
  },
  {
    question: 'O produto é físico ou digital?',
    answer:
      'É um material digital em PDF para imprimir e colorir. Não é um produto físico enviado pelos Correios.',
  },
  {
    question: 'Vou receber os desenhos já pintados?',
    answer:
      'Não. Você recebe os desenhos para imprimir e as crianças fazem a pintura.',
  },
  {
    question: 'Como uso os desenhos?',
    answer: 'Escolha as páginas, imprima e deixe as crianças colorirem.',
  },
  {
    question: 'Posso imprimir em casa?',
    answer:
      'Você pode imprimir em casa ou em um serviço de impressão. Confira as orientações dos arquivos e as possibilidades da sua impressora.',
  },
  {
    question: 'O que acompanha cada plano?',
    answer:
      'O Básico inclui os +150 desenhos natalinos para colorir. O Premium reúne os desenhos e os quatro bônus: 10 Atividades Natalinas, 20 Cartões e Etiquetas de Natal, Kit Especial Papai Noel e Calendário de Contagem Regressiva para o Natal.',
  },
  {
    question: 'Preciso comprar materiais?',
    answer:
      'Você precisará imprimir os arquivos e ter materiais para colorir. Materiais físicos não acompanham o produto digital.',
  },
];

export function formatBRL(value: number): { reais: string; cents: string } {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  const [reais, cents] = formatted.split(',');
  return { reais, cents: cents ?? '00' };
}
