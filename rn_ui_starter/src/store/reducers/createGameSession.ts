import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GolfCourse, GameRuleSet, GameRuleSpecial } from '@graphql/types';
import { PlayerListItem } from 'models/playerListItem';

export type StoredPlayer = PlayerListItem & {
  tee?: string;
  teeColor?: string;
  assignedTeam?: string;
};

export type CreateSessionGame = GameRuleSet & {
  game2ndWager?: GameRuleSet & {
    selectedFBWager?: number;
    selected18Wager?: number;
    has18AutoPress?: boolean;
    hasFBAutoPress?: boolean;
    isOverall18?: boolean;
    selectedWager?: number;
    hasAutoPress?: boolean;
    /// value of Pod Mode
    podMode?: string;
  };
  selectedFBWager?: number;
  selected18Wager?: number;
  has18AutoPress?: boolean;
  hasFBAutoPress?: boolean;
  selectedSpecials?: GameRuleSpecial[];
  /// value of Set BET or not
  didSetBet?: boolean;
  /// display order
  displayOrder?: number;
  /// value of global wager
  selectedWager?: number;
  hasAutoPress?: boolean;
  /// value of Pod Mode
  podMode?: string;
  isOverall18?: boolean;

  /// Value for SelectedSpecials
  selectedSpecialWager?: number;
  selectedSpecialIsTeam?: boolean;
};

export type CreateGameSessionState = {
  selectedCourse: GolfCourse | undefined;
  selectedUser: StoredPlayer | undefined;
  selectedUserSearchVariables:
    | { firstName: string; lastName: string; state: string }
    | undefined;
  selectedUsers: Record<string, StoredPlayer>;
  selectedGames: CreateSessionGame[] | [];
  selectedGame: CreateSessionGame | undefined;
  selected2ndPlayers: string[];
};

export const initialState: CreateGameSessionState = {
  selectedCourse: undefined,
  selectedUser: undefined,
  selectedUserSearchVariables: undefined,
  selectedUsers: {},
  selectedGames: [],
  selectedGame: undefined,
  selected2ndPlayers: [],
};

export const createGameSessionSlice = createSlice({
  name: 'createGameSession',
  initialState,
  reducers: {
    setCourseSelected(state, action: PayloadAction<GolfCourse | undefined>) {
      state.selectedCourse = action.payload;
    },
    setSelectedPlayer(
      state,
      action: PayloadAction<PlayerListItem | undefined>,
    ) {
      state.selectedUser = action.payload;
    },
    setSelectedUserSearchVariables(
      state,
      action: PayloadAction<
        CreateGameSessionState['selectedUserSearchVariables']
      >,
    ) {
      state.selectedUserSearchVariables = action.payload;
    },
    setUserSelected(
      state,
      action: PayloadAction<{ id: string; value: StoredPlayer | undefined }>,
    ) {
      const { id, value } = action.payload;

      if (value) {
        state.selectedUsers[id] = value;
      } else if (state.selectedUsers[id]) {
        delete state.selectedUsers[id];
      }
    },
    setSelectedUsers(
      state,
      action: PayloadAction<Record<string, StoredPlayer>>,
    ) {
      state.selectedUsers = action.payload;
    },
    setSelectedGames(state, action: PayloadAction<CreateSessionGame[]>) {
      state.selectedGames = action.payload;
    },
    set2ndPlayers(state, action: PayloadAction<string[]>) {
      state.selected2ndPlayers = action.payload;
    },
    setSelectedGame(state, action: PayloadAction<CreateSessionGame>) {
      state.selectedGame = action.payload;
    },
    updateSpecial(
      state,
      action: PayloadAction<{
        index: number;
        specials: GameRuleSpecial[];
        specialWager: number;
      }>,
    ) {
      const { index, specials, specialWager } = action.payload;
      const newGame = {
        ...state.selectedGames[index],
        selectedSpecials: specials,
        selectedSpecialWager: specialWager,
      };
      state.selectedGames[index] = newGame;
    },
    updateGame(state, action: PayloadAction<{ resetGame: boolean }>) {
      const { resetGame } = action.payload;

      var gamesAry: CreateSessionGame[] = state.selectedGames;
      const gameIdMap = gamesAry.map(game => {
        return game.id;
      });

      let selectedGameId = state.selectedGame?.id ?? '';
      if (selectedGameId && state.selectedGame) {
        let gameIndex = gameIdMap.indexOf(selectedGameId);
        state.selectedGames[gameIndex] = state.selectedGame;
      }

      if (resetGame) {
        state.selectedGame = undefined;
      }
    },
  },
});

export const { actions, name } = createGameSessionSlice;
