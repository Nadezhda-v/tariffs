import { PlanOption, Tariff } from "@/components/TariffsSection/TariffsSection.types";

export const mapTariffToPlanOption = (tariff: Tariff): PlanOption => {
  const discount =
    tariff.full_price > 0
      ? `-${Math.round((1 - tariff.price / tariff.full_price) * 100)}%`
      : '0%';

  return {
    id: tariff.period,
    label: tariff.period,
    price: `${tariff.price} ₽`,
    oldPrice: `${tariff.full_price} ₽`,
    discount,
    note: tariff.text,
    active: tariff.is_best,
  };
};
