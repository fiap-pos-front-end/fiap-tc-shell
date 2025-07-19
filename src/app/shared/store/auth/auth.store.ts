import { emitEvent, EVENTS } from '@fiap-pos-front-end/fiap-tc-shared';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const TC_TOKEN_KEY = 'TC_TOKEN';

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: localStorage.getItem(TC_TOKEN_KEY) ?? '',
};

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store) => ({
    setToken(token: string): void {
      patchState(store, () => ({ token }));
      localStorage.setItem(TC_TOKEN_KEY, token);
      emitEvent(EVENTS.USER_LOGGED_IN, token);
    },

    clearToken(): void {
      patchState(store, () => ({ token: '' }));
      localStorage.removeItem(TC_TOKEN_KEY);
      emitEvent(EVENTS.USER_LOGGED_OUT, null);
    },
  })),
);
