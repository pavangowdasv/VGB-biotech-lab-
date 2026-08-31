export interface BananaVariety {
  id: string;
  name: string;
  botanicalName: string;
  category: string;
  tagline: string;
  bunchWeight?: string;
  duration?: string;
  spacingRecommended?: string;
  characteristics: string[];
  idealFor: string;
  image: string;
}

export interface TechnologyStage {
  step: string;
  title: string;
  phase: 'LABORATORY' | 'GREENHOUSE' | 'BANANA FIELD';
  subtitle: string;
  description: string;
  duration: string;
  scienceFocus: string;
  image: string;
}

export interface InfrastructureItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  spec: string;
  image: string;
}

export interface QualityStep {
  step: string;
  title: string;
  metric: string;
  description: string;
  protocol: string;
}

export interface FarmerSupportTopic {
  id: string;
  title: string;
  description: string;
  guideline: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'LABORATORY' | 'PLANTLETS' | 'GREENHOUSE' | 'HARDENING' | 'PLANTATION' | 'FIELD GROWTH' | 'INFRASTRUCTURE';
  caption: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface EnquiryFormState {
  name: string;
  phone: string;
  email: string;
  location: string;
  variety: string;
  plantCount: string;
  message: string;
}
