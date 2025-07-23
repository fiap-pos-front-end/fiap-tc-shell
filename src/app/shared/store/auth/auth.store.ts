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
    getUserEmail(): string {
      return parseJwt(store.token())?.email || '';
    },

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

// Source: https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
const parseJwt = (localToken: string) => {
  const base64Url = localToken.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(''),
  );

  return JSON.parse(jsonPayload);
};
