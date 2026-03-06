export interface Tariff {
  id: string;
  period: string;
  price: number;
  full_price: number;
  is_best: boolean;
  text: string;
}

export interface PlanOption {
  id: string;
  label: string;
  price: string;
  oldPrice: string;
  discount: string;
  note: string;
  active: boolean;
}

export interface PlanCardProps {
  plan: PlanOption;
  active: boolean;
  onSelect: (id: string) => void;
  isOfferActive: boolean;
}

export type PlanOptionCardProps = PlanCardProps;

export interface TariffsSectionProps {
  selectedPlan: string;
  tariffs: Tariff[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  offerSecondsLeft: number;
}

export interface TariffsOptionsGridProps {
  plans: PlanOption[];
  selectedPlan: string;
  onSelect: (id: string) => void;
  isOfferActive: boolean;
}

export interface PlanSelectButtonProps {
  planId: string;
  active: boolean;
  onSelect: (id: string) => void;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}
