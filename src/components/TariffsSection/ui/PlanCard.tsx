import { FC } from 'react';
import cn from 'classnames';
import { PlanSelectButton } from './PlanSelectButton';
import { PlanCardProps } from '../TariffsSection.types';
import {
  priceValueBase,
  priceWrapperBase,
  priceWrapperHidden,
  priceWrapperVisible,
  oldPriceBase,
} from '../TariffsSection.constants';

export const PlanCard: FC<PlanCardProps> = ({ plan, active, onSelect, isOfferActive }) => (
  <PlanSelectButton
    planId={plan.id}
    active={active}
    onSelect={onSelect}
    className="flex p-0 w-full h-[118px] min-[376px]:h-[130px] min-[1024px]:h-[190px]"
    activeClassName="border-[#FDB056] shadow-[0_0_0_1px_rgba(246,178,95,0.4)]"
  >
    <div className="w-full flex flex-col">
      <div className="flex justify-end gap-4 pr-3 min-[1025px]:justify-between min-[1025px]:pl-11">
        <div
          className={cn(
            priceWrapperBase,
            isOfferActive ? priceWrapperVisible : priceWrapperHidden,
          )}
        >
          <span className="bg-[#FD5656] text-white px-1 py-[1px] min-[376px]:p-[3px_0.5rem] min-[376px]:text-base rounded-b-sm text-[20px] inline-block">
            {plan.discount}
          </span>
        </div>
        <span className="text-sm text-[#FDB056] pt-1">хит!</span>
      </div>

      <div className="flex gap-12 min-[1025px]:gap-8 p-[0_10px_20px_20px] min-[376px]:p-[0_22px_20px_30px] min-[1025px]:p-[0_80px_20px_122px]">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <span className="text-sm min-[321px]:text-[18px] lg:text-[26px]">{plan.label}</span>
          </div>
          <span
            className={cn(
              priceValueBase,
              active ? 'text-[#FDB056]' : 'text-white/70',
            )}
          >
            {isOfferActive ? plan.price : plan.oldPrice}
          </span>
          <div
            className={cn(
              'flex justify-end',
              priceWrapperBase,
              isOfferActive ? priceWrapperVisible : priceWrapperHidden,
            )}
          >
            <span className={oldPriceBase}>
              {plan.oldPrice}
            </span>
          </div>
        </div>

        <div className={cn('flex pt-4', isOfferActive ? 'items-center' : 'items-end')}>
          <p className="text-[12px] min-[1024px]:text-[16px] text-white/70">
            {plan.note}
          </p>
        </div>
      </div>
    </div>
  </PlanSelectButton>
);
