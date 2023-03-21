import { combineReducers, Reducer } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigator } from '../../navigators/RootNavigator';
import { appSlice, AppState } from './app';
import {
  createGameSessionSlice,
  CreateGameSessionState,
} from './createGameSession';

import { updateGameScoreSlice, UpdateGameScoreState } from './updateGameScore';
import { headerSlice, HeaderState } from './header';
import { tutorialSlice, TutorialState } from './tutorial';

export type ApplicationState = {
  app: AppState;
  createGameSession: CreateGameSessionState;
  updateGameScore: UpdateGameScoreState;
  tutorial: TutorialState;
  header: HeaderState;
  nav: ReturnType<typeof createNavigationReducer>;
};

const LOG_OUT = 'LOG_OUT';

const navReducer = createNavigationReducer(RootNavigator);

const combinedReducers = combineReducers<ApplicationState>({
  app: appSlice.reducer,
  createGameSession: createGameSessionSlice.reducer,
  updateGameScore: updateGameScoreSlice.reducer,
  tutorial: tutorialSlice.reducer,
  header: headerSlice.reducer,
  nav: navReducer,
});

const rootReducer: Reducer<ApplicationState> = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined;
  }

  return combinedReducers(state, action);
};

export default rootReducer;
