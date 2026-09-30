export type PurchaseMode = 'hardware_only' | 'turnkey_installed';

export interface ProductDetailGroup {
  title: string;
  description?: string;
  items: string[];
}

export interface ProductDetailHighlight {
  label: string;
  value: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  badge?: string;
  headline: string;
  imageVisual: string;
  imageUrl: string;
  specs: string[];
  technicalNote?: string;
  recommendedFor: string;
  voltageInfo: string;
  includedTurnkey: string[];
  detailHighlights?: ProductDetailHighlight[];
  detailGroups?: ProductDetailGroup[];
  detailRequirements?: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  code: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ComparisonRow {
  aspect: string;
  informal: string;
  informalRisk: 'high' | 'medium';
  horizon: string;
}
