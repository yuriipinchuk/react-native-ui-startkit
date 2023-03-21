import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Location } from 'components/locationService';

export type AppState = {
  mode: 'light' | 'dark';
  sessionId: string;
  token: string;
  location: Location | undefined;
};

export const initialState: AppState = {
  mode: 'light',
  sessionId: '',
  token: '',
  location: undefined,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setGameSessionId(state, action: PayloadAction<string>) {
      state.sessionId = action.payload;
    },
    setMode(state, action: PayloadAction<'light' | 'dark'>) {
      state.mode = action.payload;
    },
    setLocation(state, action: PayloadAction<Location>) {
      state.location = action.payload;
    },
  },
});

export const { actions, name } = appSlice;
