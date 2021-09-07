import {State} from '@/types/interfaces';

const state = {
    techniques: [],
      currentTechnique: {},
      currentUser: {},
      isUserAuthenticate: false,
      token: "",
      refreshToken: "",
      resources: [],
};

export default state as unknown as State; 