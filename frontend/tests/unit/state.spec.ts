import state from '@/store/state';

describe('Given a state', () => {
    test('State call', () => {
        expect(state).toEqual({
            techniques: [],

            filteredTechniques: [],

            currentTechnique: {},

            currentUserTechniquesProvided: [],

            currentTechniqueReviews: [],

            currentUser: {},

            isUserAuthenticate: false,

            token: "",

            refreshToken: "",

            resources: [],

            reviews: [],
        })
    })
})