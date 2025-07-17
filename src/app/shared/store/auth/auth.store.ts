import { emitEvent } from '@fiap-pos-front-end/fiap-tc-shared';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

const TC_TOKEN_KEY = 'TC_TOKEN';

type AuthState = {
  token: string;
};

const initialState: AuthState = {
  token: localStorage.getItem(TC_TOKEN_KEY) ?? '',
};

// TODO: conectar com localStorage para salvar o token
export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialState),

  withMethods((store) => ({
    setToken(token: string): void {
      patchState(store, () => ({ token }));
      localStorage.setItem(TC_TOKEN_KEY, token);
      emitEvent('user-logged-in', token); // TODO: esse tipo já existe no shared, só preciso gerar novamente
    },

    clearToken(): void {
      patchState(store, () => ({ token: '' }));
      localStorage.removeItem(TC_TOKEN_KEY);
      emitEvent('user-logged-out', null); // TODO: esse tipo já existe no shared, só preciso gerar novamente
    },
  })),
);
