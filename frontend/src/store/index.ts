import { createStore } from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';


export default createStore({
  state,
  mutations: {
    
    loginUser(state, payload) {
      state.isUserAuthenticate = true;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },
    
    loadUser(state, payload) {
      state.currentUser = payload;
    },

    logoutUser(state, payload) {
      state.isUserAuthenticate = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
    },

    updateUserTechniquesProvided(state, payload) {
      state.currentUser.techniquesProvided.push(payload);
    },

    updateUserFavoriteTechniques(state, payload) {
      state.currentUser.favoriteTechniques.push(payload);
    },

    loadTechniques(state, payload) {
      state.techniques = payload;
    },

    loadOneTechnique(state, payload) {
      state.currentTechnique = payload;
    },

    loadCurrentUserTechniquesProvided(state, payload) {
      state.currentUserTechniquesProvided = payload;
    },

    loadResources(state, payload) {
      state.resources = payload;
    },
  },
  actions,
  getters: {
    // isTechniqueInFavorites:
    // (state) => (id: Technique) => state.currentUser.favoriteTechniques
    //   .some(favoriteTechniquesId => favoriteTechniquesId === id),
  
    isTechniqueInFavorites(state) {
      const favorita = state.currentUser.favoriteTechniques.some((favoriteTechnique) => favoriteTechnique._id === state.currentTechnique._id);
      console.log("esto es favorita", favorita);
      return favorita;
      
    }
  
  },
  modules: {
  },
});
