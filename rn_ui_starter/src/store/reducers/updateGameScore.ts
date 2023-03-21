import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Player, GameRuleSpecial } from '@graphql/types';

export type UpdateScorePlayer = Player & {
  score: number;
  specials: UpdateScoreSpecial[];
  displayIndex: number;
};

export type UpdateScoreMultiplier = {
  multiplier: number;
  specialId: string;
};

export type UpdateScoreSpecial = GameRuleSpecial & {
  multiplier: number;
};

export type UpdateScoreDict = {
  score: {
    speicalIds?: string[];
    playerId: string;
    grossScore?: number;
    specialMultipliers?: UpdateScoreMultiplier[];
  }[];
  index: number;
};

export type PlayerAvatarUrl = {
  id: string;
  url: string;
};

export type UpdateGameScoreState = {
  avatarUrls: PlayerAvatarUrl[];
  holeDict: UpdateScoreDict[];
  needToPost: boolean;
  gameSessionId: string;
  lastPageIndex: number;
  showCountDown: boolean;
};

export const initialState: UpdateGameScoreState = {
  avatarUrls: [],
  holeDict: [],
  needToPost: false,
  gameSessionId: '',
  lastPageIndex: -1,
  showCountDown: false,
};

// return holeDict index from hole index
const getHoleDictByIndex = (ary: UpdateScoreDict[], holeIndex: number) => {
  var index = -1;
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].index === holeIndex) {
      index = i;
      break;
    }
  }

  return index;
};

export const updateGameScoreSlice = createSlice({
  name: 'updateGameScore',
  initialState,
  reducers: {
    setAvatarUrls(state, action: PayloadAction<PlayerAvatarUrl[]>) {
      state.avatarUrls = action.payload;
    },
    setNeedToPost(state, action: PayloadAction<boolean>) {
      state.needToPost = action.payload;
    },
    setGameSessionId(state, action: PayloadAction<string>) {
      state.gameSessionId = action.payload;
    },
    setLastPageIndex(state, action: PayloadAction<number>) {
      state.lastPageIndex = action.payload;
    },
    setShowCountDown(state, action: PayloadAction<boolean>) {
      state.showCountDown = action.payload;
    },
    updateHoleDict(state, action: PayloadAction<UpdateScoreDict>) {
      const dict = action.payload;
      const holeDictIndex = getHoleDictByIndex(state.holeDict, dict.index);
      var temp = [...state.holeDict];
      if (holeDictIndex === -1) {
        temp.push(dict);
      } else {
        temp.splice(holeDictIndex, 1);
        temp.push(dict);
      }
      state.holeDict = temp;
      state.needToPost = true;
    },
    resetHoleDict(state) {
      state.holeDict = [];
    },
  },
});

export const { actions, name } = updateGameScoreSlice;
