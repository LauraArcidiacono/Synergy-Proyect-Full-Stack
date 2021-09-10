import axios from 'axios';
import { ActionContext } from 'vuex';
import {
  Technique,
  FavoriteTechniques,
  UserWithToken,
  UserRegisterData,
  UserLoginData,
  NewReview,
  State, 
} from '@/types/interfaces';

const actions: any = {
    async register({dispatch}: ActionContext<State, State>, userData: UserRegisterData):  Promise<void> {
        const {data} = await axios.post("http://localhost:5000/synergy/auth/signup", userData);
        dispatch("login", {email: data.user.email, password: data.user.password});
    },
  
    async login({ dispatch }: ActionContext<State, State>, userData: UserLoginData):  Promise<void> {
        const {data} = await axios.post("http://localhost:5000/synergy/auth/login", userData);
        dispatch("userLogedFromApi", data);
    },

    getUserFromLocalStorage({dispatch}: ActionContext<State, State>)  {
      const localStorageUser = JSON.parse(localStorage.getItem("userData") || "")
      dispatch("login", {email: localStorageUser.email, password: localStorageUser.password});
    },

    async userLogedFromApi({commit, dispatch}: ActionContext<State, State>, {user, token, refreshToken}: UserWithToken):  Promise<void> { 
      const { data } = await axios({
          method: 'GET',
          url: `http://localhost:5000/synergy/users/${user._id}`,
          headers: { Authorization: `Bearer ${token}` }
        });
        data.token = token;
        data.refreshToken = refreshToken;
        localStorage.setItem("userData", JSON.stringify({email: data.email, password: data.password}));
        commit("loginUser", data);
        commit('loadUser', data);
        dispatch("fetchCurrentUserTechniquesProvided", user._id);
      },

    deleteDataFromLocalStorage({commit}: ActionContext<State, State>) {
        localStorage.setItem("userData", JSON.stringify(""));
        const logedOutUser = {token: "", refreshToken: ""};
        commit("logoutUser", logedOutUser)
    },

    async fetchTechniquesFromApi({commit, state}:ActionContext<State, State>):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:5000/synergy/technique',
          headers: { Authorization: `Bearer ${state.token}` }
        });
        commit('loadTechniques', data);
      },
  
    async fetchOneTechniqueFromApi({commit, state}: ActionContext<State, State>, id: string):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:5000/synergy/technique/${id}`,
          headers: { Authorization: `Bearer ${state.token}` }
        }); 
        commit('loadOneTechnique', data);
        
      },

    async fetchCurrentUserTechniquesProvided({commit, state}: ActionContext<State, State>, id: string) {
        const { data } = await axios({
          method: 'GET',
          url: `http://localhost:5000/synergy/technique/userprovider/${id}`,
          headers: { Authorization: `Bearer ${state.token}` }
        })
      commit("loadCurrentUserTechniquesProvided", data)

    },
  
    async createNewTechnique({ commit, state}: ActionContext<State, State>, newTechnique: Technique):  Promise<void> {
      const { data } = await axios({
        method: 'POST',
        url: 'http://localhost:5000/synergy/technique', 
        headers: { Authorization: `Bearer ${state.token}`},
        data: newTechnique
      });
      commit("updateUserTechniquesProvided", data)
    },

    async putOnUserFavoriteTechniques({ commit, state }: ActionContext<State, State>, favoriteTechnique: FavoriteTechniques): Promise<void> {
      const { data } = await axios({
        method: 'PUT',
        url: `http://localhost:5000/synergy/users/favoriteTechniques/${favoriteTechnique.userId}`, 
        headers: { Authorization: `Bearer ${state.token}`},
        data: {_id: favoriteTechnique.techniqueId}
      });
      commit("updateUserFavoriteTechniques", data.favoriteTechniques[data.favoriteTechniques.length-1])
    },

    async createNewReview({dispatch, state}:ActionContext<State, State>, newReview: NewReview):  Promise<void> {
      const { data} = await axios({
        method: 'POST',
        url: 'http://localhost:5000/synergy/review',
        headers: { Authorization: `Bearer ${state.token}`},
        data: newReview
      });
      dispatch("getNewReview", data._id)
    },

    async getNewReview({commit, state}:ActionContext<State, State>, reviewId: string):  Promise<void> {
      const {data} = await axios({
        method: 'GET',
        url: `http://localhost:5000/synergy/review/${reviewId}`,
        headers: { Authorization: `Bearer ${state.token}`},
      })
      console.log("esto es data", data)
      commit("loadTechniqueReview", data);
    },

    async fetchResourcesFromApi({commit, state}: ActionContext<State, State>):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:5000/synergy/resource',
          headers: { Authorization: `Bearer ${state.token}`}
        });
        commit('loadResources', data);
      },
  
  
}
export default actions;