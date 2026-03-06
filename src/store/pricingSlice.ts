import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PricingState {
  selectedPlan: string;
  offerSecondsLeft: number;
}

const initialState: PricingState = {
  selectedPlan: '',
  offerSecondsLeft: 2 * 60,
};

const pricingSlice = createSlice({
  name: 'pricing',
  initialState,
  reducers: {
    setSelectedPlan(state, action: PayloadAction<string>) {
      state.selectedPlan = action.payload;
    },
    tick(state) {
      if (state.offerSecondsLeft > 0) state.offerSecondsLeft -= 1;
    },
    resetTimer(state) {
      state.offerSecondsLeft = 2 * 60;
    },
  },
});

export const { setSelectedPlan, tick, resetTimer } = pricingSlice.actions;
export default pricingSlice.reducer;
