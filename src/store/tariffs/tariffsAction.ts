import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTariffs = createAsyncThunk(
  'tariffs/fetch',
  async () => {
    const response = await fetch('https://t-core.fit-hub.pro/Test/GetTariffs');

    if (!response.ok) {
      throw new Error('Не удалось загрузить тарифы');
    }

    const data = await response.json();
    return data;
  },
);
