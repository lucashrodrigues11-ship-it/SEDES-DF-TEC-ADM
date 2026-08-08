import { FaqItem, Flashcard, OfferConfig, PlanOffer } from '../types';

export const DEFAULT_PLANS: PlanOffer[] = [
  {
    id: 'tecnico',
    title: 'Pacote Completo — Técnico Administrativo',
    badge: 'OFERTA EXCLUSIVA & COMPLETA',
    subtitle: 'Conhecimentos Gerais + Conhecimentos Específicos para Técnico Administrativo da SEDES/DF',
    cardQuantity: '+1.200 Flashcards Revisados',
    originalPrice: 119.90,
    promoPrice: 59.90,
    popular: true,
    subjects: [
      'Gerais: Português, Conhecimentos do DF, Legislação, PDPM, Noções de Primeiros Socorros, Programas Assistenciais e SUAS',
      'Específicos: Direito Administrativo, Constitucional, Administração Geral, Arquivologia, Administração de Recursos Materiais, Licitações e Contratos'
    ],
    features: [
      'Mais de 1.200 Flashcards 100% focados na SEDES/DF',
      'Cobertura completa das Matérias Gerais e Específicas',
      'Baralho .apkg pronto e dividido por sub-baralhos no Anki',
      'Acesso Vitalício + Atualizações pós-edital garantidas',
      'Suporte completo + Guia rápido de instalação em 1 clique'
    ]
  }
];

export const DEFAULT_OFFER_CONFIG: OfferConfig = {
  productName: 'Cards do Lucas - Flashcards SEDES/DF (Técnico Administrativo)',
  authorName: 'Lucas',
  cardQuantity: '+1.200 flashcards revisados',
  rolesCovered: 'Técnico Administrativo (SEDES/DF)',
  subjectsCovered: [
    'Língua Portuguesa',
    'Conhecimentos do DF',
    'Legislação Aplicada',
    'PDPM (Plano Distrital de Políticas para Mulheres)',
    'Noções de Primeiros Socorros',
    'Programas Assistenciais e SUAS',
    'Direito Administrativo',
    'Direito Constitucional',
    'Administração Geral',
    'Arquivologia',
    'Administração de Recursos Materiais',
    'Licitações e Contratos'
  ],
  accessPeriod: 'Acesso Vitalício + Atualizações pós-edital',
  deliveryMethod: 'Download imediato do arquivo .apkg pronto para importação no Anki',
  originalPrice: 119.90,
  promoPrice: 59.90,
  pixDiscountPercent: 5,
  canEditFiles: 'Sim, você tem total liberdade para editar, adicionar observações, incluir novos cartões ou personalizar as tags no Anki.',
  plans: DEFAULT_PLANS
};

export const SAMPLE_FLASHCARDS: Flashcard[] = [
  {
    id: '1',
    subject: 'LOAS (Lei nº 8.742/1993)',
    question: 'Qual é o critério obetivo de renda per capita para a concessão do Benefício de Prestação Continuada (BPC)?',
    answer: 'A renda familiar mensal per capita deve ser inferior a 1/4 (um quarto) do salário mínimo.'
  },
  {
    id: '2',
    subject: 'PNAS & SUAS',
    question: 'Quais são os dois níveis de proteção social do Sistema Único de Assistência Social (SUAS)?',
    answer: '1. Proteção Social Básica (atendida nos CRAS)\n2. Proteção Social Especial de Média e Alta Complexidade (atendida nos CREAS e Centros Pop/Acolhimento).'
  },
  {
    id: '3',
    subject: 'Direito Administrativo - LC 840/2011 (DF)',
    question: 'Qual é o prazo para o servidor público do DF tomar posse e entrar em exercício após a nomeação?',
    answer: 'Posse: 30 dias contados da publicação do ato de provimento.\nExercício: 5 dias contados da data da posse.'
  },
  {
    id: '4',
    subject: 'Regimento Interno SEDES/DF',
    question: 'Qual é a missão institucional precípua da Secretaria de Estado de Desenvolvimento Social do DF (SEDES/DF)?',
    answer: 'Garantir a proteção social aos cidadãos do DF em situação de vulnerabilidade e risco social, por meio da gestão e execução das políticas de Assistência Social e Segurança Alimentar.'
  },
  {
    id: '5',
    subject: 'Recuperação Ativa & Anki',
    question: 'Por que o teste de memória com recuperação ativa (active recall) é superior a ler resumos?',
    answer: 'Porque forçar o cérebro a resgatar a informação da memória de longo prazo fortalece as conexões neurais e impede a curva do esquecimento de Ebbinghaus.'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso ter o Anki instalado?',
    answer: 'Sim. O material foi desenvolvido para ser utilizado no Anki. Você deverá instalar uma versão compatível com seu dispositivo (PC, Android ou iOS).'
  },
  {
    id: 'faq-2',
    question: 'O Anki é gratuito?',
    answer: 'A disponibilidade, o preço e as condições do aplicativo podem variar conforme o dispositivo, o sistema operacional e a versão utilizada. O AnkiDesktop (Windows/Mac/Linux) e o AnkiDroid (Android) são 100% gratuitos. Além disso, o acesso ao AnkiWeb (versão web para navegador) é 100% gratuito em qualquer dispositivo, inclusive no iOS (iPhone/iPad). O aplicativo nativo para iOS (AnkiMobile) é mantido pelos criadores do Anki e possui cobrança própria na App Store. O valor pago pelos Flashcards SEDES/DF não inclui possíveis cobranças feitas pelo Anki ou pelas lojas de aplicativos.'
  },
  {
    id: 'faq-3',
    question: 'Como receberei os flashcards?',
    answer: 'Após a confirmação do pagamento, você receberá acesso imediato por e-mail à área de membros com o arquivo do baralho (.apkg) pronto para download e as instruções passo a passo para importação.'
  },
  {
    id: 'faq-5',
    question: 'Posso alterar os flashcards?',
    answer: 'Sim! O arquivo do baralho é liberado sem restrições. Você pode editar perguntas, acrescentar anotações pessoais, alterar tags ou criar novos cartões diretamente no seu aplicativo Anki.'
  },
  {
    id: 'faq-6',
    question: 'Posso usar no celular e no computador?',
    answer: 'Sim! O uso depende da compatibilidade e das condições das versões do Anki disponíveis para cada dispositivo. Além disso, o Anki permite sincronizar o seu progresso entre computador e celular através de uma conta gratuita no AnkiWeb.'
  },
  {
    id: 'faq-7',
    question: 'Os flashcards substituem um curso?',
    answer: 'Não. Eles complementam sua preparação. Utilize também teoria, legislação seca, questões e simulados para consolidar sua base, usando os flashcards como ferramenta diária de retenção.'
  },
  {
    id: 'faq-8',
    question: 'Os flashcards garantem aprovação?',
    answer: 'Não. O material é uma ferramenta de revisão de alta performance. O resultado final depende do compromisso, da preparação e do desempenho individual de cada candidato no dia da prova.'
  }
];

export const MANUAL_STEPS = [
  {
    number: 1,
    title: 'Estudar o conteúdo teórico',
    desc: 'Assistir a videoaulas e ler doutrina'
  },
  {
    number: 2,
    title: 'Selecionar pontos importantes',
    desc: 'Filtrar artigos e artigos de lei'
  },
  {
    number: 3,
    title: 'Criar as perguntas',
    desc: 'Formular questões objetivas e diretas'
  },
  {
    number: 4,
    title: 'Escrever as respostas',
    desc: 'Digitar o verso de cada cartão'
  },
  {
    number: 5,
    title: 'Revisar a digitação',
    desc: 'Corrigir erros gramaticais e conceituais'
  },
  {
    number: 6,
    title: 'Organizar por matérias',
    desc: 'Categorizar tags, sub-baralhos e tópicos'
  },
  {
    number: 7,
    title: 'Configurar o baralho',
    desc: 'Ajustar parâmetros de repetição'
  },
  {
    number: 8,
    title: 'Importar tudo para o Anki',
    desc: 'Gastar horas configurando arquivos'
  }
];

export const ANKI_USAGE_STEPS = [
  {
    step: 1,
    title: 'Instale o Anki',
    desc: 'Baixe uma versão compatível com seu dispositivo (PC, celular ou tablet).'
  },
  {
    step: 2,
    title: 'Importe o baralho',
    desc: 'Utilize o arquivo .apkg recebido imediatamente após a compra.'
  },
  {
    step: 3,
    title: 'Leia a pergunta',
    desc: 'Não revele a resposta imediatamente na tela.'
  },
  {
    step: 4,
    title: 'Tente responder',
    desc: 'Busque a informação na memória ativa antes de virar o cartão.'
  },
  {
    step: 5,
    title: 'Confira o verso do cartão',
    desc: 'Compare a sua resposta pensada com a resposta exata da lei/gabarito.'
  },
  {
    step: 6,
    title: 'Avalie sua dificuldade',
    desc: 'Informe ao Anki se esqueceu, teve dificuldade ou respondeu com facilidade.'
  },
  {
    step: 7,
    title: 'Mantenha suas revisões em dia',
    desc: 'O aplicativo organizará a próxima exibição dos cartões conforme suas respostas.'
  }
];
