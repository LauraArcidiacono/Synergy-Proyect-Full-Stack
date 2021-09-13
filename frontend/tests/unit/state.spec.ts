import state from '@/store/state';

describe('Given a state', () => {
    test('State call', () => {
        expect(state).toEqual({
            techniques: [],

            currentTechnique: {},
        
            currentUserTechniquesProvided: [],
        
            currentUser: {},
        
            isUserAuthenticate: false,
        
            token: "",
        
            refreshToken: "",
        
            resources: [],
        })
    })
})