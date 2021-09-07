import axios from 'axios';
import { ActionContext } from 'vuex';
import {
  UserWithToken,
  UserRegisterData,
  UserLoginData,
  State,  
} from '@/types/interfaces';

const actions = {
    async register({dispatch}: ActionContext<State, State>, userData: UserRegisterData):  Promise<void> {
        const {data} = await axios.post("http://localhost:5000/synergy/auth/signup", userData);
        dispatch("login", {email: data.user.email, password: data.user.password});
    },
  
    async login({ dispatch }: ActionContext<State, State>, userData: UserLoginData):  Promise<void> {
        const {data} = await axios.post("http://localhost:5000/synergy/auth/login", userData);
        dispatch("userLogedFromApi", data);
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
  
    async userLogedFromApi({commit}: ActionContext<State, State>, {user, token}: UserWithToken):  Promise<void> { 
      const { data } = await axios({
          method: 'GET',
          url: `http://localhost:5000/synergy/users/${user._id}`,
          headers: { Authorization: `Bearer ${token}` }
        });
        commit("loginUser", data);
        commit('loadUser', data);
      },
  
    async fetchResourcesFromApi({commit, state}: ActionContext<State, State>,):  Promise<void> {
        const { data } = await axios({
          method: 'GET',
          url: 'http://localhost:5000/synergy/resource',
          headers: { Authorization: `Bearer ${state.token}`}
        });
        commit('loadResources', data);
      },
  
  
}
export default actions; 