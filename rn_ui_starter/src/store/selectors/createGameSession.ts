import { CourseTeeDetails } from 'models/courseTeeDetails';
import { createSelector } from 'reselect';

import { ApplicationState } from 'store/reducers';

export function selectCreateGameSessionState(state: ApplicationState) {
  return state.createGameSession;
}

export function selectSelectedCoursesState(state: ApplicationState) {
  const createSessionState = selectCreateGameSessionState(state);

  return createSessionState.selectedCourse;
}

export function selectSelectedCourseState(state: ApplicationState) {
  return state.createGameSession.selectedCourse;
}

export const selectSelectedCourseTeeDetails = createSelector(
  [selectSelectedCourseState],
  state => {
    if (!state?.jsonIGolfCourseTeeDetails) {
      return undefined;
    }

    try {
      const result: CourseTeeDetails = JSON.parse(
        state.jsonIGolfCourseTeeDetails,
      );

      return result;
    } catch (e) {
      return undefined;
    }
  },
);

export function selectSelectedUserSearchVariables(state: ApplicationState) {
  return selectCreateGameSessionState(state).selectedUserSearchVariables;
}

export function selectSelectedPlayersState(state: ApplicationState) {
  return selectCreateGameSessionState(state).selectedUsers;
}

export function selectIsPlayerSelected(id: string) {
  return (state: ApplicationState) => {
    const selectedPlayersState = selectSelectedPlayersState(state);

    return !!selectedPlayersState[id];
  };
}
