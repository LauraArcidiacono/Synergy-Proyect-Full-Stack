import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    techniques: [],
    isAuthenticate: false,
  },
  mutations: {
    loadTechniques(state, payload) {
      state.techniques = payload;
    },

    changeIsAuthenticate(state) {
      state.isAuthenticate = !state.isAuthenticate;
    }
  },
  actions: {
    async fetchTechniquesFromApi({commit}) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDYxNzExOCwiZXhwIjoxMjE2MzA2MTcxMTh9.xd8eCKBmycHw8PthB4WTm0rIfG1ypH0wGw2QR39LXes'
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:5000/synergy/technique',
        headers: { Authorization: `Bearer ${token}` }
      });
      commit('loadTechniques', data);
    },

  },
  modules: {
  },
});
