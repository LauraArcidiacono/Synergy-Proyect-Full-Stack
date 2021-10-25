import {State} from '@/types/interfaces';

const state = {
    techniques: [],

    currentTechnique: {},

    currentUserTechniquesProvided: [],

    currentTechniqueReviews: [],

    currentUser: {},

    isUserAuthenticate: false,

    token: "",

    refreshToken: "",

    resources: [],

    reviews: [], 
};

export default state as unknown as State; 