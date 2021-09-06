import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    techniques: [],
    currentTechnique: {},
    currentUser: {},
    isUserAuthenticate: false,
    token: "",
    refreshToken: "",
    resources: [],
  },
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
      state.currentUser = payload.user;
    },
    
    loadUser(state, payload) {
      state.currentUser = payload;
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

    async userLogedFromApi({commit}, currentUser) {
      console.log(currentUser.token);
      const {token} = currentUser;
      const {userId} = currentUser;
      console.log(userId);
      const { data } = await axios({
        method: 'GET',
        url: `http://localhost:5000/synergy/users/${userId}`,
        headers: { Authorization: `Bearer ${token}` }
      });
      commit('loadUser', data);
    },

    async fetchResourcesFromApi({commit}, token) {
      console.log("este es el token", token)
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
