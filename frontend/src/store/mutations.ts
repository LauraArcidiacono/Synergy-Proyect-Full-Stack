import { UserWithToken, Technique, TechniquesProvided, Review, State } from '@/types/interfaces';

const mutations = {
    loginUser(state: State, payload: UserWithToken) {
        state.isUserAuthenticate = true;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
      },
      
      loadUser(state: State, payload: any) {
        state.currentUser = payload;
      },
  
      logoutUser(state: State, payload: UserWithToken) {
        state.isUserAuthenticate = false;
        state.token = payload.token;
        state.refreshToken = payload.refreshToken;
      },
  
      updateUserTechniquesProvided(state: State, payload: Technique) {
        state.currentUserTechniquesProvided.push(payload);        
      },

      updateTechniquesProvidedByThisUser(state: State, payload: TechniquesProvided) {
        state.currentUser.techniquesProvided.push(payload);
      },
        
      loadCurrentUserTechniquesProvided(state: State, payload: Array<Technique> ) {
        state.currentUserTechniquesProvided = payload;
      },
  
      updateUserFavoriteTechniques(state: State, payload: Technique) {
        state.currentUser.favoriteTechniques.push(payload);
      },
  
      updateFavoriteTechniques(state: State, payload: any) {
        state.currentUser.favoriteTechniques = payload;
      },
  
      loadTechniques(state: State, payload: Array<Technique>) {
        state.techniques = payload;
      },
      
      loadFilteredTechniques(state: State, payload: Array<Technique>) {
        state.filteredTechniques = payload;
      },

      loadOneTechnique(state: State, payload: Technique) {
        state.currentTechnique = payload;
      },

      loadReviews(state: State, payload: Array<Review>) {
        state.reviews = payload;
      },

      loadCurrentTechniqueReviews(state: State, payload: Array<Review>) {
        state.currentTechniqueReviews = payload; 
      },

      loadResources(state: State, payload: any) {
        state.resources = payload;
      },


}

export default mutations;