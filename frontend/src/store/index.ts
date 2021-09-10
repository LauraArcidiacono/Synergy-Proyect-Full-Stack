import { createStore } from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
import mutations from '@/store/mutations';

export default createStore({
  state,
  mutations,
  actions,
  getters: {
    isTechniqueInFavorites(state) {
      const favorita = state.currentUser.favoriteTechniques.some((favoriteTechnique) => favoriteTechnique._id === state.currentTechnique._id);
      return favorita;
    }
    },
  modules: {
  },
});
