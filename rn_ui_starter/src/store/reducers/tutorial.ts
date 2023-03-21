import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TutorialState = {
  isTutorialEnabled: boolean;
  passedPages: Record<string, boolean>;
};

export const initialState: TutorialState = {
  isTutorialEnabled: true,
  passedPages: {},
};

export const tutorialSlice = createSlice({
  name: 'tutorial',
  initialState,
  reducers: {
    setShownPage(state, action: PayloadAction<string>) {
      state.passedPages[action.payload] = true;
    },
    setTutorialEnabled(state, action: PayloadAction<boolean>) {
      state.isTutorialEnabled = action.payload;
    },
  },
});

export const { actions, name } = tutorialSlice;
