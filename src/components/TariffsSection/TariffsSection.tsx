'use client';

import { FC, useMemo, useState } from 'react';
import { ChecklistCard, PlanCard, TariffsOptionsGrid } from './ui';
import { PlanOption, Tariff, TariffsSectionProps } from './TariffsSection.types';
import { mapTariffToPlanOption } from '@/utils/mapTariffToPlanOption';
import { useAppDispatch } from '@/store/hooks';
import { setSelectedPlan } from '@/store/pricingSlice';

export const TariffsSection: FC<TariffsSectionProps> = ({
  selectedPlan,
  tariffs,
  status,
  offerSecondsLeft,
}) => {
  const [useDefaultHighlight, setUseDefaultHighlight] = useState(true);
  const dispatch = useAppDispatch();
  const isOfferActive = offerSecondsLeft > 0;

  const foreverTariff = useMemo(
    () =>
      (tariffs as Array<{ period?: string }>).find((t) => t.period === 'Навсегда') ??
      null,
    [tariffs],
  );

  const mainPlan: PlanOption | null = useMemo(
    () => (foreverTariff ? mapTariffToPlanOption(foreverTariff as Tariff) : null),
    [foreverTariff],
  );

  const plans: PlanOption[] = useMemo(() => {
    if (!tariffs.length) return [];

    return tariffs
      .filter(
        (tariff) => (tariff as { period?: string }).period !== foreverTariff?.period,
      )
      .map((tariff) => mapTariffToPlanOption(tariff as Tariff))
      .reverse();
  }, [tariffs, foreverTariff]);

  const handlePlanClick = (id: string) => {
    dispatch(setSelectedPlan(id));
    if (useDefaultHighlight) {
      setUseDefaultHighlight(false);
    }
  };

  const isLoading = status === 'loading' && !tariffs.length;

  return (
    <section className="flex-[1.7] flex flex-col gap-3 min-[1025px]:gap-5">
      {!isLoading && mainPlan && (
        <PlanCard
          onSelect={() => handlePlanClick(mainPlan.id)}
          plan={mainPlan}
          active={
            (useDefaultHighlight && mainPlan.active) ||
            selectedPlan === mainPlan.id
          }
          isOfferActive={isOfferActive}
        />
      )}

      {!isLoading && plans.length > 0 && (
        <TariffsOptionsGrid
          plans={plans}
          selectedPlan={selectedPlan}
          onSelect={handlePlanClick}
          isOfferActive={isOfferActive}
        />
      )}

      <ChecklistCard />
    </section>
  )
};

export default TariffsSection;
