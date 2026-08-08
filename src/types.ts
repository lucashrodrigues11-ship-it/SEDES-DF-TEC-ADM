export interface Flashcard {
  id: string;
  subject: string;
  question: string;
  answer: string;
  difficulty?: 'easy' | 'good' | 'hard' | 'again';
  nextInterval?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PlanOffer {
  id: 'gerais' | 'tecnico';
  title: string;
  badge?: string;
  subtitle: string;
  cardQuantity: string;
  originalPrice: number;
  promoPrice: number;
  popular?: boolean;
  subjects: string[];
  features: string[];
}

export interface OfferConfig {
  productName: string;
  authorName: string;
  cardQuantity: string;
  rolesCovered: string;
  subjectsCovered: string[];
  accessPeriod: string;
  deliveryMethod: string;
  originalPrice: number;
  promoPrice: number;
  pixDiscountPercent: number;
  canEditFiles: string;
  plans: PlanOffer[];
}
