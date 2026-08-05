export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  tag: string;
  highlightQuote: string;
  comment: string;
  treatmentType: 'Presencial' | 'Online';
  location?: string;
  googleVerified: boolean;
}

export interface InstagramPost {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  commentsCount: number;
  date: string;
  url: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Consulta' | 'Planos' | 'Atendimento' | 'Pagamento';
}

export interface ServiceArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  iconName: string;
  idealFor: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface HowItWorksStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  duration?: string;
  deliverables: string[];
}
