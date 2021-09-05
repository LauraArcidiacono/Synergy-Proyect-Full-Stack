import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    techniques: [],
    currentTechnique: {},
    currentUser: {},
    resources: [],
    isAuthenticate: false,
  },
  mutations: {
    loadTechniques(state, payload) {
      state.techniques = payload;
    },

    loadOneTechnique(state, payload) {
      state.currentTechnique = payload;
    },

    loadOneUser(state, payload) {
      state.currentUser = payload;
    },

    loadResources(state, payload) {
      state.resources = payload;
    },

    changeIsAuthenticate(state) {
      state.isAuthenticate = !state.isAuthenticate;
    }
  },
  actions: {
    async fetchTechniquesFromApi({commit}) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDg0OTAwMiwiZXhwIjoxMjE2MzA4NDkwMDJ9.t_rHvJjmgHKDtD-vRWeujhl9f7tj_MCpSHSoxGfP3_M'
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:5000/synergy/technique',
        headers: { Authorization: `Bearer ${token}` }
      }); 
      commit('loadTechniques', data);
    },

    async fetchOneTechniqueFromApi({commit}, id) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDg0OTAwMiwiZXhwIjoxMjE2MzA4NDkwMDJ9.t_rHvJjmgHKDtD-vRWeujhl9f7tj_MCpSHSoxGfP3_M'
      const { data } = await axios({
        method: 'GET',
        url: `http://localhost:5000/synergy/technique/${id}`,
        headers: { Authorization: `Bearer ${token}` }
      }); 
      commit('loadOneTechnique', data);
      console.log(data)
    },

    async fetchOneUserFromApi({commit}) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDg0OTAwMiwiZXhwIjoxMjE2MzA4NDkwMDJ9.t_rHvJjmgHKDtD-vRWeujhl9f7tj_MCpSHSoxGfP3_M'
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:5000/synergy/users/6134eec9c158ae21f6cd95d4',
        headers: { Authorization: `Bearer ${token}` }
      }); 
      commit('loadOneUser', data);
    },

    async fetchResourcesFormApi({commit}) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYxMmU1NmM4NTdiZmE5Mjc0NjUzZWYyNCIsImVtYWlsIjoibGF1cmFAZ21haWwuY29tIn0sImlhdCI6MTYzMDg0OTAwMiwiZXhwIjoxMjE2MzA4NDkwMDJ9.t_rHvJjmgHKDtD-vRWeujhl9f7tj_MCpSHSoxGfP3_M'
      const { data } = await axios({
        method: 'GET',
        url: 'http://localhost:5000/synergy/resource',
        headers: { Authorization: `Bearer ${token}`}
      });
      commit('loadResources', data);
    },


  },
  modules: {
  },
});
