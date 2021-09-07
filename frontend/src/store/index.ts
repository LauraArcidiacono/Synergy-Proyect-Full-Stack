import { createStore } from 'vuex';
import actions from '@/store/actions';
import state from '@/store/state';


export default createStore({
  state,
  mutations: {
    loadTechniques(state, payload) {
      state.techniques = payload;
    },

    loadOneTechnique(state, payload) {
      state.currentTechnique = payload;
    },

    loadResources(state, payload) {
      state.resources = payload;
    },

    loginUser(state, payload) {
      state.isUserAuthenticate = !state.isUserAuthenticate;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    
    loadUser(state, payload) {
      state.currentUser = payload;
    }

  },
  actions,
  modules: {
  },
});
