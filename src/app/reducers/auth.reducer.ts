import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/auth.actions';
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  token?: string;
}

const initialState: AuthState = { isLoggedIn: false };


const reducerFunction = createReducer(
  initialState,
  on(actions.loginFailed, actions.logOutRequested, actions.loginRequested, () => initialState),
  on(actions.loginSucceeded, (state, action) => ({
    isLoggedIn: true,
    userName: action.username,
    token: action.token
  })
  ));

export function reducer(state: AuthState, action: Action): AuthState {
  return reducerFunction(state, action);
}
