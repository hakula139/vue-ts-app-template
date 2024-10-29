import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';

import type { State } from '@/types';

export const key: InjectionKey<Store<State>> = Symbol('store');

export const store: Store<State> = createStore<State>({
  state: {},

  getters: {},

  mutations: {
    initStore(state) {
      const session = localStorage.getItem('session');
      if (session) {
        try {
          this.replaceState(Object.assign(state, JSON.parse(session)));
        } catch (err) {
          console.error(`invalid session: ${session}, err: ${err}`);
          localStorage.removeItem('session');
        }
      }
    },
  },
});

store.subscribe((_mutation, state) => {
  localStorage.setItem('session', JSON.stringify(state));
});

export const useStore = (): Store<State> => baseUseStore(key);
