import { createReducer, on } from '@ngrx/store';
import { setToken, clearToken } from '../auth/auth.actions';
import { initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,
  on(setToken, (state, { token }) => ({ ...state, token })),
  on(clearToken, state => ({ ...state, token: null }))
);