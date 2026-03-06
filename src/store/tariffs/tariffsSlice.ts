import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTariffs } from './tariffsAction';
import { Tariff } from '@/utils/types';

interface TariffsState {
  items: Tariff[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: TariffsState = {
  items: [],
  status: 'idle',
  error: null,
};

const tariffsSlice = createSlice({
  name: 'tariffs',
  initialState,
  reducers: {
    setTariffs(state, action: PayloadAction<Tariff[]>) {
      state.items = action.payload;
      state.status = 'succeeded';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTariffs.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTariffs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTariffs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Ошибка загрузки тарифов';
      });
  },
});

export const { setTariffs } = tariffsSlice.actions;
export default tariffsSlice.reducer;
