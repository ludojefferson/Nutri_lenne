import { Review, InstagramPost, FAQItem, ServiceArea, Differential, HowItWorksStep } from '../types';

import heroImg from '../assets/images/hero_nutri_lane_1785971615198.jpg';
import aboutImg from '../assets/images/about_nutri_lane_1785971629005.jpg';
import officeImg from '../assets/images/clinic_office_1785971639333.jpg';
import mealImg from '../assets/images/healthy_meal_plate_1785971652285.jpg';

export const ASSETS = {
  hero: heroImg,
  about: aboutImg,
  office: officeImg,
  meal: mealImg,
};

export const CLINIC_INFO = {
  name: "Nutri Lane",
  title: "Nutricionista Clínica e Comportamental",
  crn: "CRN-3 48.912/SP",
  whatsappNumber: "5511999998888", // Mock WhatsApp phone number formatted for API
  whatsappDisplay: "(11) 99999-8888",
  instagram: "@nutri.lane",
  instagramUrl: "https://instagram.com/nutri.lane",
  email: "contato@nutrilane.com.br",
  address: {
    street: "Rua Salvador Gianetti, 850",
    suite: "Sala 42 - Centro Empresarial Guaianases",
    neighborhood: "Guaianases",
    city: "São Paulo",
    state: "SP",
    cep: "08410-000",
    googleMapsUrl: "https://maps.google.com/?q=Rua+Salvador+Gianetti+850+Guaianases+Sao+Paulo+SP",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.489304128103!2d-46.4150123!3d-23.5412891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6431f4c5401d%3A0x8e2f89f77e2311b0!2sRua%20Salvador%20Gianetti%2C%20850%20-%20Guaianases%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
  },
  hours: [
    { days: "Segunda a Sexta", time: "08:00 - 19:00" },
    { days: "Sábado", time: "08:00 - 13:00" }
  ]
};

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Camila Ribeiro",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 2 semanas",
    tag: "Emagrecimento",
    highlightQuote: "Melhor nutricionista que já passei.",
    comment: "Eu já tinha tentado dezenas de dietas malucas e sempre desistia. A Dra. Lane entendeu a minha rotina corrida, incluiu os alimentos que eu amo e me ensinou a comer sem culpa. Eliminei 9kg em 3 meses de forma leve e definitiva!",
    treatmentType: "Presencial",
    location: "Guaianases - SP",
    googleVerified: true
  },
  {
    id: "rev-2",
    name: "Rodrigo Mendonça",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 1 mês",
    tag: "Performance & Saúde",
    highlightQuote: "Atendimento extremamente humano.",
    comment: "A escuta atenciosa e a empatia da Dra. Lane fazem toda a diferença. Ela não entrega uma folha impressa genérica, mas constrói o plano alimentar junto com você. Minha disposição no dia a dia e nos treinos triplicou!",
    treatmentType: "Presencial",
    location: "São Paulo - SP",
    googleVerified: true
  },
  {
    id: "rev-3",
    name: "Mariana Alcantara",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 3 semanas",
    tag: "Reeducação Alimentar",
    highlightQuote: "Plano alimentar que realmente funciona.",
    comment: "Sem terrorismo nutricional! Posso comer pão de manhã, jantar com a minha família e ainda assim ter resultados incríveis. O aplicativo que ela disponibiliza com as receitas facilita muito o meu dia a dia.",
    treatmentType: "Online",
    location: "São José dos Campos - SP",
    googleVerified: true
  },
  {
    id: "rev-4",
    name: "Fernanda Costa",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 1 mês",
    tag: "Qualidade de Vida",
    highlightQuote: "Profissional muito atenciosa.",
    comment: "Tira todas as dúvidas pelo WhatsApp entre as consultas, é atenciosa até nos mínimos detalhes. Melhorei meus exames de sangue, reduzi colesterol e minha digestão mudou da água para o vinho.",
    treatmentType: "Presencial",
    location: "Guaianases - SP",
    googleVerified: true
  },
  {
    id: "rev-5",
    name: "Lucas Vasconcelos",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 2 meses",
    tag: "Ganho de Massa",
    highlightQuote: "Excelente acompanhamento.",
    comment: "Pela primeira vez consegui ter hipertrofia mantendo a saúde e o percentual de gordura baixo. O acompanhamento bioimpedância no consultório de Guaianases é super preciso e motivador.",
    treatmentType: "Presencial",
    location: "Itaquera - SP",
    googleVerified: true
  },
  {
    id: "rev-6",
    name: "Patricia Siqueira",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    date: "Há 2 semanas",
    tag: "Saúde da Mulher",
    highlightQuote: "Acolhimento impecável.",
    comment: "Fui diagnosticada com SOP e ansiedade alimentar. A Nutri Lane me acolheu com um carinho ímpar. Em poucas semanas diminui o inchaço e regularizei meu ciclo. Indico para de olhos fechados!",
    treatmentType: "Online",
    location: "Atendimento Online - BR",
    googleVerified: true
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    id: "diff-1",
    title: "Plano Alimentar Personalizado",
    description: "Montado em tempo real durante a consulta respeitando seus gostos, cultura, horários e orçamento.",
    iconName: "UtensilsCrossed"
  },
  {
    id: "diff-2",
    title: "Acompanhamento Próximo",
    description: "Suporte contínuo via WhatsApp para tirar dúvidas, avaliar pratos e manter você motivado a cada dia.",
    iconName: "MessageCircleHeart"
  },
  {
    id: "diff-3",
    title: "Alimentação sem Terrorismo",
    description: "Sem proibições radicais ou alimentos caros e inacessíveis. Aprenda a comer de tudo com equilíbrio.",
    iconName: "Smile"
  },
  {
    id: "diff-4",
    title: "Mudança de Hábitos",
    description: "Estratégias comportamentais para tratar a raiz do problema, controle da ansiedade e beliscos.",
    iconName: "Brain"
  },
  {
    id: "diff-5",
    title: "Atendimento Humanizado",
    description: "Escuta ativa e sem julgamentos. Um espaço seguro onde suas dores e objetivos são prioridade.",
    iconName: "Heart"
  },
  {
    id: "diff-6",
    title: "Resultados Sustentáveis",
    description: "Foco no emagrecimento ou ganho de saúde duradouro, evitando o efeito sanfona para sempre.",
    iconName: "Sparkles"
  }
];

export const HOW_IT_WORKS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Agendamento Rápido",
    subtitle: "Primeiro passo sem fricção",
    description: "Escolha a modalidade (Presencial em Guaianases ou Online) e o melhor dia via WhatsApp. Receberá um questionário pré-consulta simples.",
    deliverables: ["Confirmação imediata", "Acesso ao aplicativo", "Anamnese inicial digital"]
  },
  {
    number: 2,
    title: "Consulta e Avaliação",
    subtitle: "Conhecendo sua história",
    description: "Consulta de 1 hora com escuta detalhada da sua rotina, sintomas, exames laboratoriais e avaliação de composição corporal (bioimpedância no presencial).",
    duration: "60 minutos",
    deliverables: ["Análise de exames de sangue", "Avaliação de bioimpedância", "Investigação metabólica"]
  },
  {
    number: 3,
    title: "Plano Alimentar Único",
    subtitle: "Desenvolvido com você",
    description: "Seu cardápio é estruturado na hora com substituições práticas, receitas fáceis e lista de compras diretamente no app no seu celular.",
    deliverables: ["Plano no app com fotos", "Guia de substituições inteligentes", "Receitas práticas e saborosas"]
  },
  {
    number: 4,
    title: "Acompanhamento Ativo",
    subtitle: "Você nunca estará sozinho",
    description: "Contato quinzenal pelo WhatsApp, ajustes de cardápio sempre que necessário e retornos planejados para celebrar cada evolução.",
    deliverables: ["Suporte direto no WhatsApp", "Ajustes sem custo adicional", "Mapeamento de progresso e métricas"]
  }
];

export const SERVICES: ServiceArea[] = [
  {
    id: "serv-1",
    title: "Emagrecimento Saudável",
    subtitle: "Perda de gordura sem passar fome",
    description: "Estratégia nutricional focada na queima de gordura preservando massa magra. Redução de medidas e controle da saciedade sem restringir grupos alimentares inteiros.",
    benefits: [
      "Perda de peso consistente sem efeito sanfona",
      "Estratégia para controle de doces e compulsão",
      "Preservação do metabolismo ativo",
      "Cardápio com alimentos do seu cotidiano"
    ],
    iconName: "Flame",
    idealFor: "Para quem quer perder peso com saúde e manter os resultados no longo prazo."
  },
  {
    id: "serv-2",
    title: "Reeducação Alimentar",
    subtitle: "Paz com a comida e autonomia",
    description: "Aprenda a fazer escolhas conscientes em restaurantes, festas e viagens. Desmistifique o prato e descubra o prazer de comer de maneira equilibrada.",
    benefits: [
      "Fim do terrorismo nutricional",
      "Autonomia para montar seus próprios pratos",
      "Adequação para a rotina de toda a família",
      "Melhora da relação emocional com a comida"
    ],
    iconName: "Apple",
    idealFor: "Ideal para quem está cansado de dietas da moda e quer liberdade alimentar com saúde."
  },
  {
    id: "serv-3",
    title: "Performance & Hipertrofia",
    subtitle: "Energia, disposição e ganho de massa",
    description: "Nutrição esportiva ajustada ao seu treino para acelerar a recuperação muscular, otimizar energia e aumentar a definição e massa magra.",
    benefits: [
      "Cálculo preciso de macronutrientes",
      "Estratégia de pré e pós-treino eficiente",
      "Suplementação baseada em evidências científicas",
      "Aumento significativo de rendimento nos treinos"
    ],
    iconName: "Zap",
    idealFor: "Praticantes de musculação, corrida e esportes que buscam máxima performance física."
  },
  {
    id: "serv-4",
    title: "Qualidade de Vida & Exames",
    subtitle: "Disposição e saúde gastrointestinal",
    description: "Tratamento nutricional para gastrite, refluxo, intestino preso, diabetes, colesterol alto, gordura no fígado e síndrome do intestino irritável.",
    benefits: [
      "Adequação de parâmetros em exames de sangue",
      "Diminuição marcante de estufamento e azia",
      "Regularização da saúde intestinal",
      "Aumento da imunidade e vitalidade"
    ],
    iconName: "HeartPulse",
    idealFor: "Para quem busca tratar dores, desconfortos digestivos e equilibrar exames de sangue."
  },
  {
    id: "serv-5",
    title: "Hábitos & Saúde da Mulher",
    subtitle: "Equilíbrio hormonal e fases da vida",
    description: "Atendimento especializado para Síndrome dos Ovários Policísticos (SOP), TPM, endometriose, ansiedade e emagrecimento feminino.",
    benefits: [
      "Redução de retenção de líquidos e inchaço",
      "Modulação hormonal e controle de acne",
      "Manejo da ansiedade por doces no período menstrual",
      "Estratégias específicas para o metabolismo feminino"
    ],
    iconName: "Sparkles",
    idealFor: "Mulheres que desejam alinhar a alimentação às variações hormonais e emocionais."
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: "insta-1",
    imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80",
    caption: "🥦 Pão engorda? A resposta é NÃO! O segredo está na combinação com boas fontes de proteína e fibras. Arraste para o lado e veja 3 combinações perfeitas!",
    likes: 428,
    commentsCount: 39,
    date: "Ontem",
    url: "https://instagram.com/nutri.lane"
  },
  {
    id: "insta-2",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&auto=format&fit=crop&q=80",
    caption: "✨ Transformação real da paciente C. R. que eliminou 9kg em 3 meses mantendo o cafezinho e a jantinha com a família em Guaianases. Orgulho!",
    likes: 812,
    commentsCount: 74,
    date: "Há 3 dias",
    url: "https://instagram.com/nutri.lane"
  },
  {
    id: "insta-3",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&auto=format&fit=crop&q=80",
    caption: "🥑 5 sinais de que o seu intestino precisa de atenção imediata. Dica 3 é a mais negligenciada pelos pacientes!",
    likes: 560,
    commentsCount: 42,
    date: "Há 5 dias",
    url: "https://instagram.com/nutri.lane"
  },
  {
    id: "insta-4",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    caption: "🍓 Receitinha rápida: Mousse de morango proteico com 3 ingredientes para matar a vontade de doce à noite!",
    likes: 1240,
    commentsCount: 118,
    date: "Há 1 semana",
    url: "https://instagram.com/nutri.lane"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Quanto tempo dura a consulta?",
    answer: "A primeira consulta dura aproximadamente 60 minutos. É um momento de escuta dedicada e profunda para entendermos toda a sua história de saúde, hábitos, rotina e preferências alimentares, saindo com o plano montado.",
    category: "Consulta"
  },
  {
    id: "faq-2",
    question: "A Nutri Lane aceita convênio médico?",
    answer: "Trabalhamos na modalidade de atendimento particular para garantir o tempo e o carinho que você merece. No entanto, emitimos Nota Fiscal e relatório detalhado para você solicitar o REEMBOLSO total ou parcial junto ao seu plano de saúde (Bradesco, SulAmérica, Amil, Porto Seguro, Unimed, etc.).",
    category: "Pagamento"
  },
  {
    id: "faq-3",
    question: "Como funciona o retorno nutricional?",
    answer: "O retorno ocorre geralmente entre 30 e 45 dias após a consulta inicial para reavaliarmos os resultados, medirmos as evoluções na bioimpedância e fazermos todas as adaptações necessárias no seu plano alimentar.",
    category: "Consulta"
  },
  {
    id: "faq-4",
    question: "Como funciona o atendimento online?",
    answer: "A consulta online tem exatamente a mesma qualidade e duração do atendimento presencial! É realizada por videochamada privada no aplicativo. Você recebe o plano alimentar na hora no aplicativo com orientações de medição simples para acompanharmos seus resultados em qualquer lugar do Brasil ou exterior.",
    category: "Atendimento"
  },
  {
    id: "faq-5",
    question: "Como posso agendar minha consulta?",
    answer: "O agendamento é feito de maneira rápida e intuitiva clicando em qualquer botão de WhatsApp deste site. Você conversa diretamente com nossa equipe, escolhe o melhor dia e horário e tira todas as suas dúvidas antes mesmo de agendar.",
    category: "Consulta"
  },
  {
    id: "faq-6",
    question: "Onde fica o consultório presencial?",
    answer: "Nosso consultório presencial está localizado no Centro Empresarial de Guaianases na Rua Salvador Gianetti, 850 - Sala 42, com fácil acesso perto da estação de trem de Guaianases em São Paulo, com estacionamento e acessibilidade.",
    category: "Atendimento"
  }
];
