import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from '@ngrx/store';

import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export interface AuthState {
  user: User;
}

export const initialAuthState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    console.log("calling Login reducer");
    // debugger;
    return {
      user: action.user
    }
  })
);
