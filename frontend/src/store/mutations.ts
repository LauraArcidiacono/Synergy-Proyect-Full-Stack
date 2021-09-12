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
        
      loadCurrentUserTechniquesProvided(state: State, payload: any) {
        state.currentUserTechniquesProvided = payload;
      },
  
      updateUserFavoriteTechniques(state: State, payload: Technique) {
        state.currentUser.favoriteTechniques.push(payload);
      },
  
      updateFavoriteTechniques(state: State, payload: any) {
        state.currentUser.favoriteTechniques = payload;
      },
  
      loadTechniqueReview(state: State, payload: Review) {
        state.currentTechnique.reviews.push(payload);
  },
  
      loadTechniques(state: State, payload: any) {
        state.techniques = payload;
      },
  
      loadOneTechnique(state: State, payload: Technique) {
        state.currentTechnique = payload;
      },

  
      loadResources(state: State, payload: any) {
        state.resources = payload;
      },


}

export default mutations;