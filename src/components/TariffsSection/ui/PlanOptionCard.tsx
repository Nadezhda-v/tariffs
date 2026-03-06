import { FC } from 'react';
import cn from 'classnames';
import { PlanSelectButton } from './PlanSelectButton';
import { PlanOptionCardProps } from '../TariffsSection.types';
import {
  priceValueBase,
  priceWrapperBase,
  priceWrapperHidden,
  priceWrapperVisible,
  oldPriceBase,
} from '../TariffsSection.constants';

export const PlanOptionCard: FC<PlanOptionCardProps> = ({
  plan,
  active,
  onSelect,
  isOfferActive,
}) => (
  <PlanSelectButton
    planId={plan.id}
    active={active}
    onSelect={onSelect}
    className="h-[118px] min-[375px]:h-[130px] min-[1025px]:h-[320px]"
  >
    <div className="flex flex-col">
      <div
        className={cn(
          priceWrapperBase,
          isOfferActive ? priceWrapperVisible : priceWrapperHidden,
        )}
      >
        <div className="flex justify-end min-[1025px]:justify-between px-3 text-sm pl-11 pr-6">
          <span className="bg-[#FD5656] text-[20px]px-1 py-[1px] min-[376px]:p-[3px_0.5rem] min-[376px]:text-base rounded-b-sm text-white">
            {plan.discount}
          </span>
        </div>
      </div>

      <div className="flex gap-12 min-[1025px]:block p-[0_10px_20px_20px] min-[376px]:p-[0_22px_20px_30px] min-[1025px]:p-[0_18px_38px_18px]">
      <div className="flex flex-col items-center min-[1025px]:flex-col min-[1025px]:m-[36px_0_40px_0]">
        <span className="text-sm min-[321px]:text-[18px] lg:text-[26px] min-[1025px]:mb-3">{plan.label}</span>
        <div className="flex flex-col items-end">
          <span
            className={cn(
              priceValueBase,
              active ? 'text-[#FDB056]' : 'text-white',
            )}
          >
            {isOfferActive ? plan.price : plan.oldPrice}
          </span>
          <div
            className={cn(
              priceWrapperBase,
              isOfferActive ? priceWrapperVisible : priceWrapperHidden,
            )}
          >
            <span className={oldPriceBase}>
              {plan.oldPrice}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-end pl-5 min-[1024px]:pl-0">
      <p className="text-[12px] min-[376px]:text-[14px] min-[1024px]:text-[16px] text-white/70 h-[42px]">
        {plan.note}
      </p>
      </div>
      </div>
    </div>
  </PlanSelectButton>
);
