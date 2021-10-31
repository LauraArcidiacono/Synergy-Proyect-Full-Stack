import axios from 'axios';
import { ActionContext } from 'vuex';
import {
  Technique,
  FavoriteTechniques,
  TechniqueProvidedToDelete,
  TechniqueId,
  UserWithToken,
  UserId,
  UserRegisterData,
  UserLoginData,
  NewReview,
  State, 
} from '@/types/interfaces';

const actions: any = {
    async register({dispatch}: ActionContext<State, State>, userData: UserRegisterData):  Promise<void> {
      const {data} = await axios.post(process.env.VUE_APP_DDBB_URL_SIGNUP, userData);
      dispatch("login", {email: data.user.email, password: data.user.password});
    },
  
    async login({ dispatch }: ActionContext<State, State>, userData: UserLoginData):  Promise<void> { 
      const {data} = await axios.post(process.env.VUE_APP_DDBB_URL_LOGIN, userData);
      dispatch("userLogedFromApi", data);
    },

    getUserFromLocalStorage({dispatch}: ActionContext<State, State>)  {
      const localStorageUser = JSON.parse(localStorage.getItem("userData") || "")
      dispatch("login", {email: localStorageUser.email, password: localStorageUser.password});
    },

    async userLogedFromApi({commit, dispatch}: ActionContext<State, State>, {user, token, refreshToken}: UserWithToken):  Promise<void> { 
      const { data } = await axios({
          method: 'GET',
          url: `${process.env.VUE_APP_DDBB_URL}/users/${user._id}`,
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
          url: `${process.env.VUE_APP_DDBB_URL}/technique`,
          headers: { Authorization: `Bearer ${state.token}` }
        });
        commit('loadTechniques', data);
        commit('loadFilteredTechniques', data);
      },

    filterTechniques({commit, state}: ActionContext<State, State>, filterValue: string) {
      const filteredTechniques = state.techniques.filter(technique => technique.type.toLocaleLowerCase() === filterValue);
      commit('loadFilteredTechniques', filteredTechniques);
    },

    searchTechniques({commit, state}: ActionContext<State, State>, searchValue: string) {
      const searchedTechnique = state.techniques.filter((technique) => {
        const stateTechniques = technique.name.toLowerCase();
        if (stateTechniques.includes(searchValue)) {
          return technique;
        }
      });
      commit('loadFilteredTechniques', searchedTechnique);
    },
  
    async fetchOneTechniqueFromApi({dispatch, commit, state}: ActionContext<State, State>, id: string):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: `${process.env.VUE_APP_DDBB_URL}/technique/${id}`,
          headers: { Authorization: `Bearer ${state.token}` }
        }); 
        commit('loadOneTechnique', data);
        dispatch("fetchReviewsFromApi", id)
      },

    async fetchCurrentUserTechniquesProvided({commit, state}: ActionContext<State, State>, id: string) {
      const { data } = await axios({
          method: 'GET',
          url: `${process.env.VUE_APP_DDBB_URL}/technique/userprovider/${id}`,
          headers: { Authorization: `Bearer ${state.token}` }
        })
      commit("loadCurrentUserTechniquesProvided", data)
    },
  
    async createNewTechnique({ commit, state}: ActionContext<State, State>, newTechnique: Technique):  Promise<void> {
      const { data } = await axios({
        method: 'POST',
        url: `${process.env.VUE_APP_DDBB_URL}/technique`, 
        headers: { Authorization: `Bearer ${state.token}`},
        data: newTechnique
      });
      commit("updateUserTechniquesProvided", data)
      commit("updateTechniquesProvidedByThisUser", {_id: data._id, ilustration: data.ilustration, name: data.name})
      },

    deleteTechniqueProvided({ commit, dispatch, state }: ActionContext<State, State>, techniqueToDelete: TechniqueProvidedToDelete) {
      const techniqueId = techniqueToDelete.techniqueId;
      const updateProvided = state.currentUserTechniquesProvided.filter((techniqueItem) => techniqueItem._id !== techniqueId)
      commit("updateTechniquesProvidedByThisUser", updateProvided)
      commit("loadCurrentUserTechniquesProvided", updateProvided)
      dispatch("deleteProvidedTechniqueFromApi", techniqueId)
    },  

    async deleteProvidedTechniqueFromApi({state}: ActionContext<State, State>, techniqueId:  TechniqueId): Promise<void> {
      await axios({
        method:'DELETE',
        url: `${process.env.VUE_APP_DDBB_URL}/technique/${techniqueId}`,
        headers: { Authorization: `Bearer ${state.token}`},
      })
    },

    async putOnUserFavoriteTechniques({ commit, state }: ActionContext<State, State>, favoriteTechnique: FavoriteTechniques): Promise<void> {
      const { data } = await axios({
        method: 'PUT',
        url: `${process.env.VUE_APP_DDBB_URL}/users/favoriteTechniques/${favoriteTechnique.userId}`, 
        headers: { Authorization: `Bearer ${state.token}`},
        data: {_id: favoriteTechnique.techniqueId}
      });
      commit("updateUserFavoriteTechniques", data.favoriteTechniques[data.favoriteTechniques.length-1])
    },

    deleteTechniqueFromFavorite({ commit, dispatch, state }: ActionContext<State, State>, favoriteTechnique: FavoriteTechniques) {
      const techniqueId = favoriteTechnique.techniqueId;
      const userId = favoriteTechnique.userId;
      const updatedFavorites = state.currentUser.favoriteTechniques.filter((techniqueItem) => techniqueItem._id !== techniqueId)
      commit("updateFavoriteTechniques", updatedFavorites)
      dispatch("deleteFevoriteTechniquesFromApi", userId)
    },

    async deleteFevoriteTechniquesFromApi({ state }: ActionContext<State, State>, userId:  UserId): Promise<void> {
      await axios({
        method: 'PUT',
        url: `${process.env.VUE_APP_DDBB_URL}/users/${userId}`,
        headers: { Authorization: `Bearer ${state.token}`},
        data: {favoriteTechniques: state.currentUser.favoriteTechniques}
      })
    },


    async createNewReview({state}:ActionContext<State, State>, newReview: NewReview):  Promise<void> {
      await axios({
        method: 'POST',
        url: `${process.env.VUE_APP_DDBB_URL}/review`,
        headers: { Authorization: `Bearer ${state.token}`},
        data: newReview
      });
    },

    async fetchReviewsFromApi({commit, dispatch, state}:ActionContext<State, State>, id: string):  Promise<void> {
      const { data } = await axios({
        method: 'GET',
        url: `${process.env.VUE_APP_DDBB_URL}/review`,
        headers: { Authorization: `Bearer ${state.token}`},
      })
      commit("loadReviews", data)
      dispatch("filterTechniqueReview", id)
    },

    filterTechniqueReview({commit, state}:ActionContext<State, State>, id: string){
      const currentTechniqueReviews = state.reviews.filter((reviewItem) => reviewItem.technique === id);
      commit("loadCurrentTechniqueReviews", currentTechniqueReviews)
    },

    async fetchResourcesFromApi({commit, state}: ActionContext<State, State>):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: `${process.env.VUE_APP_DDBB_URL}/resource`,
          headers: { Authorization: `Bearer ${state.token}`}
        });
        commit('loadResources', data);
      },
  
  
}
export default actions;