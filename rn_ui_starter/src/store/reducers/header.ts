import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type HeaderState = {
  loading: boolean;
};

export const initialState: HeaderState = {
  loading: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { actions, reducer } = headerSlice;
