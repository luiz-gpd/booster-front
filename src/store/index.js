import Vue from 'vue';
import Vuex from 'vuex';
import variables from '../variables';
import LocalstorageStore from '../plugins/localStorage.store.plugin';

import AuthModule from './modules/authStore';

const storeUserPlugin = LocalstorageStore.create(
  'auth/setUser',
  variables.auth.userdetais,
  state => state.auth.user,
);
const storeTokenPlugin = LocalstorageStore.create(
  'auth/setToken',
  variables.auth.appToken,
  state => state.auth.token,
);

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [storeUserPlugin, storeTokenPlugin],
  modules: {
    auth: AuthModule,
  },
});