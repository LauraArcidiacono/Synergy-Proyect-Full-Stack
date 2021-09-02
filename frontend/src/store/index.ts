import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    techniques: [],
  },
  mutations: {
    loadTechniques(state, payload) {
      state.techniques = payload;
    }
  },
  actions: {
    async fetchTechniquesFromApi({commit}) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDYwMzU2MCwiZXhwIjoxMjE2MzA2MDM1NjB9.1m-3zHE5SpSW6NkpdBOrOJCivrQYmAtZUiKm_O9FJhM'
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
