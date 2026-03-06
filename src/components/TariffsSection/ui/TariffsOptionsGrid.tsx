import { FC } from 'react';
import ExclamationMark from '../../icons/ExclamationMark';
import { TariffsOptionsGridProps } from '../TariffsSection.types';
import { PlanOptionCard } from './PlanOptionCard';

export const TariffsOptionsGrid: FC<TariffsOptionsGridProps> = ({
  plans,
  selectedPlan,
  onSelect,
  isOfferActive,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
    {plans.map((plan) => (
      <PlanOptionCard
        key={plan.id}
        plan={plan}
        active={selectedPlan === plan.id}
        onSelect={onSelect}
        isOfferActive={isOfferActive}
      />
    ))}

    <div className="lg:col-span-2">
      <p className="rounded-2xl bg-[#2D3233] px-[20px] py-[16px] inline-flex items-start gap-4 w-full text-white/80">
        <span className="mt-[2px] shrink-0">
          <ExclamationMark />
        </span>

        <span className="text-sm min-[1024px]:text-base">
          Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат,
          чем за 1 месяц
        </span>
      </p>
    </div>
  </div>
);
