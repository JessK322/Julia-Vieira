/**
 * Conteúdo central do site.
 * ------------------------------------------------------------------
 * Tudo o que a Dra. Júlia pode querer alterar está neste arquivo:
 * nome, telefone, endereço, horários, serviços e textos institucionais.
 * Campos marcados com "a confirmar" são placeholders do protótipo.
 */

export const brand = {
  name: 'Dra. Júlia Vieira',
  fullName: 'Dra. Júlia Vieira de Sá',
  role: 'Cirurgiã-dentista',
  specialty: 'Ortodontia e Estética',
  clinic: 'VS Odontologia',
  monogram: '/img/brand-mark.png',
  cro: 'CRO-PB 00000 — a confirmar',
} as const

export const contact = {
  whatsapp: '5583999807691',
  whatsappDisplay: '(83) 99980-7691',
  whatsappUrl:
    'https://wa.me/5583999807691?text=' +
    encodeURIComponent('Olá, Dra. Júlia! Vim pelo site e gostaria de agendar uma consulta.'),
  instagramHandle: '@dra.juliavieira',
  instagramUrl: 'https://www.instagram.com/dra.juliavieira',
  googleReviewUrl: 'https://g.page/r/CXdY0l8BcMtIEBM/review',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Dra.+J%C3%BAlia+Vieira+de+S%C3%A1+Eco+Medical+Center+Cartaxo+Jo%C3%A3o+Pessoa',
} as const

export const address = {
  label: 'Eco Medical Center Cartaxo',
  street: 'R. Antônio Rabelo Júnior, 170 — sala 906',
  district: 'Miramar',
  city: 'João Pessoa',
  state: 'PB',
  zip: '58032-090',
  oneLine: 'R. Antônio Rabelo Júnior, 170 — sala 906 · Miramar, João Pessoa — PB',
} as const

export const hours = [
  { days: 'Segunda a sexta', time: '08h às 18h' },
  { days: 'Sábado', time: 'Sob agendamento' },
] as const

export type NavItem = {
  label: string
  href: string
  id: string
}

export const navigation: NavItem[] = [
  { label: 'Sobre', href: '#sobre', id: 'sobre' },
  { label: 'Especialidades', href: '#especialidades', id: 'especialidades' },
  { label: 'Atendimento', href: '#atendimento', id: 'atendimento' },
  { label: 'Contato', href: '#contato', id: 'contato' },
]

export const hero = {
  eyebrow: 'Ortodontia e Estética · João Pessoa — PB',
  titleLead: 'Um cuidado que coloca',
  titleEmphasis: 'você',
  titleTail: 'no centro.',
  subtitle:
    'Atendimento odontológico humanizado, com atenção individualizada e compromisso com o seu bem-estar.',
  primaryCta: 'Agendar consulta',
  secondaryCta: 'Conheça minha atuação',
  image: '/img/julia-hero.webp',
  imageAlt: 'Dra. Júlia Vieira de Sá, cirurgiã-dentista, em retrato profissional',
  badges: [
    { icon: 'MapPin', label: 'Atendimento presencial' },
    { icon: 'CreditCard', label: 'Consultas particulares' },
    { icon: 'CalendarCheck', label: 'Agendamento facilitado' },
  ],
} as const

export const about = {
  eyebrow: 'Sobre',
  title: 'Conheça a profissional por trás do cuidado.',
  image: '/img/julia-about.webp',
  imageAlt: 'Retrato da Dra. Júlia Vieira de Sá',
  caption: 'Dra. Júlia Vieira de Sá',
  paragraphs: [
    'Sou a Dra. Júlia Vieira de Sá, cirurgiã-dentista com atuação em ortodontia e estética. Meu trabalho começa pela escuta: entender a sua história, as suas expectativas e o seu tempo antes de propor qualquer tratamento.',
    'Acredito em uma odontologia que une precisão técnica e acolhimento — com explicações claras em cada etapa, para que você se sinta seguro e participe das decisões sobre a sua saúde bucal.',
  ],
  credentials: [
    'Graduação em Odontologia — UFPB',
    'Especialização em Ortodontia',
    'Formação em Invisalign®',
    'Especialização em Prótese Dentária',
    'Atualização em estética dental e reabilitação oral',
  ],
  cta: 'Conheça minha trajetória',
  timeline: [
    {
      title: 'Graduação em Odontologia',
      place: 'Universidade Federal da Paraíba — UFPB',
      description:
        'Formação em Odontologia com base clínica e científica, iniciando a atuação em saúde bucal.',
    },
    {
      title: 'Especialização em Ortodontia',
      place: 'Formação em Ortodontia',
      description:
        'Aprofundamento no diagnóstico e no tratamento das alterações de posição dentária e de mordida.',
    },
    {
      title: 'Formação em Invisalign®',
      place: 'Alinhadores transparentes',
      description:
        'Capacitação no planejamento digital e no acompanhamento clínico de tratamentos com alinhadores.',
    },
    {
      title: 'Especialização em Prótese Dentária',
      place: 'Reabilitação oral',
      description:
        'Formação voltada à reabilitação estética e funcional, integrada ao planejamento ortodôntico.',
    },
    {
      title: 'Atualização contínua',
      place: 'Estética dental e reabilitação oral',
      description:
        'Participação constante em atualizações e cursos da área, para oferecer um cuidado alinhado à prática contemporânea.',
    },
  ],
} as const

export type Service = {
  id: string
  number: string
  title: string
  short: string
  image: string
  imageAlt: string
  message: string
  details: {
    intro: string
    bullets: string[]
    note: string
  }
}

export const services: Service[] = [
  {
    id: 'invisalign',
    number: '01',
    title: 'Invisalign®',
    short:
      'Alinhadores transparentes e removíveis para um tratamento ortodôntico discreto, planejado digitalmente.',
    image: '/img/invisalign.webp',
    imageAlt: 'Estojo de alinhadores transparentes Invisalign®',
    message: 'Olá, Dra. Júlia! Vim pelo site e gostaria de saber mais sobre o tratamento com Invisalign®.',
    details: {
      intro:
        'Os alinhadores Invisalign® são placas transparentes e removíveis, planejadas a partir de um escaneamento digital da arcada. Cada conjunto aplica forças suaves e progressivas para acompanhar a movimentação planejada.',
      bullets: [
        'Planejamento digital com previsão das etapas',
        'Alinhadores removíveis para comer e escovar os dentes',
        'Acompanhamento periódico em consultório',
        'Indicação definida somente após avaliação clínica',
      ],
      note: 'A indicação, a duração e a evolução do tratamento variam conforme a avaliação individual de cada paciente.',
    },
  },
  {
    id: 'infantil',
    number: '02',
    title: 'Ortodontia Infantil e Ortopedia',
    short:
      'Acompanhamento do crescimento da mordida na infância, com orientação próxima à família.',
    image: '/img/infantil.webp',
    imageAlt: 'Criança sorrindo e segurando um aparelho ortodôntico removível',
    message:
      'Olá, Dra. Júlia! Vim pelo site e gostaria de saber mais sobre ortodontia infantil e ortopedia.',
    details: {
      intro:
        'Na infância, acompanhar o crescimento dos maxilares permite identificar precocemente alterações de mordida e hábitos que influenciam o desenvolvimento da face. Quando indicado, aparelhos ortopédicos funcionais orientam esse crescimento.',
      bullets: [
        'Avaliação do desenvolvimento da mordida',
        'Orientação sobre hábitos e respiração',
        'Aparelhos ortopédicos funcionais, quando indicados',
        'Acompanhamento próximo da criança e da família',
      ],
      note: 'Cada criança é avaliada individualmente. Nem todo caso necessita de intervenção precoce.',
    },
  },
  {
    id: 'clareamento',
    number: '03',
    title: 'Clareamento Dental',
    short:
      'Protocolo de clareamento realizado com avaliação prévia, indicação personalizada e acompanhamento.',
    image: '/img/clareamento.webp',
    imageAlt: 'Placas de clareamento dental e seringa de gel clareador',
    message: 'Olá, Dra. Júlia! Vim pelo site e gostaria de saber mais sobre clareamento dental.',
    details: {
      intro:
        'O clareamento dental é um procedimento estético realizado com produtos e protocolos indicados após avaliação clínica. A avaliação prévia identifica a origem da alteração de cor e as condições dos dentes e da gengiva.',
      bullets: [
        'Avaliação da cor e da saúde bucal',
        'Protocolo personalizado para o seu caso',
        'Orientação de cuidados durante e após o tratamento',
        'Acompanhamento da evolução',
      ],
      note: 'Os resultados variam conforme as características de cada dente e os hábitos de cada paciente.',
    },
  },
  {
    id: 'fixo',
    number: '04',
    title: 'Aparelho Fixo',
    short:
      'Tratamento ortodôntico convencional, com planejamento individual e ajustes periódicos.',
    image: '/img/aparelho.webp',
    imageAlt: 'Modelos dentários com aparelho ortodôntico fixo',
    message: 'Olá, Dra. Júlia! Vim pelo site e gostaria de saber mais sobre aparelho fixo.',
    details: {
      intro:
        'O aparelho fixo é composto por bráquetes e fios que aplicam forças contínuas para corrigir o posicionamento dos dentes e a relação entre as arcadas. Os ajustes são realizados em consultas periódicas.',
      bullets: [
        'Avaliação ortodôntica completa',
        'Planejamento individualizado do tratamento',
        'Manutenção e ajustes periódicos',
        'Orientações de higiene e cuidados diários',
      ],
      note: 'A duração do tratamento depende da complexidade de cada caso e da resposta individual.',
    },
  },
]

export const differentiators = [
  {
    icon: 'HeartHandshake',
    title: 'Atendimento individualizado',
    description:
      'Tempo dedicado a ouvir e a entender o seu caso, sem pressa e sem soluções prontas.',
  },
  {
    icon: 'Ear',
    title: 'Escuta atenta',
    description:
      'Cada história importa. A consulta começa pela conversa, antes de qualquer diagnóstico.',
  },
  {
    icon: 'MessageSquareText',
    title: 'Orientação clara',
    description:
      'Explicações acessíveis sobre etapas, alternativas e cuidados, para você decidir com segurança.',
  },
  {
    icon: 'Armchair',
    title: 'Ambiente acolhedor',
    description:
      'Um consultório pensado para o seu conforto, do primeiro contato ao retorno.',
  },
] as const

export const journey = [
  {
    number: '01',
    icon: 'MessageCircle',
    title: 'Entre em contato',
    description:
      'Chame no WhatsApp ou pelo Instagram e conte brevemente o que você procura.',
  },
  {
    number: '02',
    icon: 'CalendarCheck',
    title: 'Escolha o melhor horário',
    description:
      'Verificamos a agenda e encontramos juntos o dia e o horário que funcionam para você.',
  },
  {
    number: '03',
    icon: 'ClipboardList',
    title: 'Receba as orientações',
    description:
      'Você recebe as informações sobre a consulta, documentos e preparo, sem surpresas.',
  },
  {
    number: '04',
    icon: 'MapPin',
    title: 'Compareça ao atendimento',
    description:
      'No consultório, o tempo é dedicado a você: escuta, avaliação e plano de cuidado.',
  },
] as const

export const clinic = {
  eyebrow: 'Estrutura',
  title: 'Um espaço pensado para o seu conforto.',
  description:
    'No VS Odontologia, cada detalhe foi planejado para que você se sinta à vontade — da recepção ao atendimento, com tecnologia e cuidado em cada etapa.',
  photos: Array.from(
    { length: 14 },
    (_, index) => `/img/clinic-${String(index + 1).padStart(2, '0')}.webp`,
  ),
  features: [
    {
      icon: 'MapPin',
      title: 'Endereço',
      lines: [address.label, `${address.street} · ${address.district}`, `${address.city} — ${address.state}`],
      action: 'Ver no mapa',
      href: contact.googleMapsUrl,
    },
    {
      icon: 'Clock',
      title: 'Horários',
      lines: [`${hours[0].days} · ${hours[0].time}`, `${hours[1].days} · ${hours[1].time}`],
      action: 'Confirmar horários',
      href: contact.whatsappUrl,
    },
    {
      icon: 'Car',
      title: 'Estacionamento',
      lines: ['Estacionamento no edifício', 'Consulte a disponibilidade no local'],
      action: null,
      href: null,
    },
    {
      icon: 'Video',
      title: 'Modalidade',
      lines: ['Atendimento presencial', 'Orientações online quando aplicável'],
      action: null,
      href: null,
    },
  ],
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.068591984251!2d-34.836853100000006!3d-7.118049999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd17168e4747%3A0x48cb70015fd25877!2sDra%20J%C3%BAlia%20Vieira%20de%20S%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1746447730508!5m2!1spt-BR!2sbr',
} as const

export const reviews = {
  eyebrow: 'Avaliações',
  title: 'Sua opinião faz parte do cuidado.',
  description:
    'As avaliações no Google ajudam outras pessoas a encontrarem um atendimento em que possam confiar. Se você já passou pelo consultório, sua experiência pode orientar quem está chegando agora.',
  primaryCta: 'Ver avaliações no Google',
  secondaryCta: 'Deixar minha avaliação',
} as const

export const instagram = {
  eyebrow: 'Instagram',
  title: 'Acompanhe o consultório de perto.',
  description:
    'Bastidores, orientações de saúde bucal e novidades do consultório — tudo com a linguagem próxima de quem acompanha a Dra. Júlia.',
  qr: '/img/instagram-qr.png',
} as const

export const finalCta = {
  eyebrow: 'Agendamento',
  title: 'Seu cuidado começa com uma conversa.',
  description:
    'Entre em contato para conhecer as opções de atendimento e verificar os horários disponíveis.',
  cta: 'Agendar pelo WhatsApp',
  footnote: 'Atendimento em João Pessoa — PB · Consultas particulares',
} as const

export const legal = {
  privacyTitle: 'Política de privacidade',
  privacyIntro:
    'Este site tem caráter informativo e não realiza coleta automática de dados pessoais. As informações preenchidas em contato são utilizadas apenas para responder à sua solicitação.',
  privacySections: [
    {
      title: 'Quais dados são tratados',
      body: 'Ao entrar em contato por WhatsApp, Instagram ou telefone, você pode compartilhar nome, telefone e informações sobre a sua necessidade de atendimento. Esses dados são usados exclusivamente para agendar e conduzir a consulta.',
    },
    {
      title: 'Como os dados são utilizados',
      body: 'Os dados são utilizados para responder ao contato, organizar a agenda e prestar o atendimento solicitado. Não são vendidos, cedidos ou utilizados para finalidades diferentes sem o seu consentimento.',
    },
    {
      title: 'Armazenamento e segurança',
      body: 'As informações ficam restritas à equipe do consultório e aos serviços de mensagem utilizados no contato. São adotadas medidas para proteger esses dados contra acesso não autorizado.',
    },
    {
      title: 'Seus direitos',
      body: 'Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar acesso, correção ou exclusão dos seus dados. Para isso, entre em contato pelo WhatsApp informado neste site.',
    },
  ],
  demoNote:
    'Prévia de redesign — conteúdo demonstrativo. Informações, textos e registros profissionais devem ser validados pela Dra. Júlia antes da publicação.',
  credit: 'Design e desenvolvimento: JessK_Design',
} as const
