import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { setSelectedPlan, tick } from '@/store/pricingSlice';
import { fetchTariffs } from '@/store/tariffs/tariffsAction';

export const useMainData = () => {
  const dispatch = useAppDispatch();

  const { selectedPlan, offerSecondsLeft } = useAppSelector(
    (state) => state.pricing,
  );
  const { items: tariffs, status } = useAppSelector((state) => state.tariffs);

  useEffect(() => {
    const id = setInterval(() => dispatch(tick()), 1000);
    return () => clearInterval(id);
  }, [dispatch]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTariffs());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (!tariffs.length || selectedPlan) return;

    const foreverTariff = tariffs.find((t) => t.period === 'Навсегда');
    const initial = foreverTariff ?? tariffs[0];

    if (initial) {
      dispatch(setSelectedPlan(initial.id));
    }
  }, [dispatch, tariffs, selectedPlan]);

  return {
    selectedPlan,
    offerSecondsLeft,
    tariffs,
    status,
  };
};

