import mutations from '@/store/mutations';
import { State } from '@/types/interfaces';
import stateMock from '../mockedState';

let mockedState: State;

describe('Given a mutations module', () => {  
    beforeEach(() => {
        mockedState = stateMock;
    });    
        describe('When loginUser is commited with payload', () => {
            const payload = {
                user: {
                _id: "",
                name:"",
                profession: "",
                city: "",
                avatar: "",
                email: "",
                password: "",
                favoriteTechniques: [],
                techniquesProvided: [],
            },
                token: "hfdkisdfoisdfk490323423hj423",
                refreshToken: "j234kj345bhkj34b6hk34"
            }
            describe('Then state must be updated', () => {
                test('State.isUserAuthenticate should be true', () => {

                    mutations.loginUser(mockedState, payload);

                    expect(mockedState.isUserAuthenticate).toBe(true)
                })

                test('State.token must be updated', () => {

                    mutations.loginUser(mockedState, payload);

                    expect(mockedState.token).toBe( "hfdkisdfoisdfk490323423hj423")
                })

                test('State.refreshToken must be updated', () => {
                        
                    mutations.loginUser(mockedState, payload);

                    expect(mockedState.refreshToken).toBe("j234kj345bhkj34b6hk34")
                })
            })
        })
        describe('When loadUser is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUser must be updated', () => {
                    const payload = {
                        _id: "",
                        name:"Jordi",
                        profession: "",
                        city: "",
                        avatar: "",
                        email: "",
                        password: "",
                        favoriteTechniques: [],
                        techniquesProvided: [],
                        token: "hfdkisdfoisdfk490323423hj423",
                        refreshToken: "j234kj345bhkj34b6hk34"
                    }

                    mutations.loadUser(mockedState, payload);

                    expect(mockedState.currentUser.name).toEqual("Jordi")
                })
            })
        })

        describe('When logoutUser is commited with payload', () => {
            const payload = {
                user: {
                _id: "",
                name:"",
                profession: "",
                city: "",
                avatar: "",
                email: "",
                password: "",
                favoriteTechniques: [],
                techniquesProvided: [],
            },
                token: "",
                refreshToken: ""
            }

            describe('Then state must be updated', () => {
                test('State.isUserAuthenticate must be updated', () => {
                    
                    mutations.logoutUser(mockedState, payload);
        
                    expect(mockedState.isUserAuthenticate).toBe(false)
                })
            })

            describe('Then state must be updated', () => {
                test('State.token must be updated', () => {
                    
                    mutations.logoutUser(mockedState, payload);
        
                    expect(mockedState.token).toBe("")
                })
            })
            describe('Then state must be updated', () => {
                test('State.refreshToken must be updated', () => {
                    
                    mutations.logoutUser(mockedState, payload);
            
                    expect(mockedState.refreshToken).toBe("")
                })
            })
        })

        describe('When updateUserTechniquesProvided is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUserTechniquesProvided', () => {
                    const payload = {
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }
        
                    mutations.updateUserTechniquesProvided(mockedState, payload);
        
                    expect(mockedState.currentUserTechniquesProvided).toContainEqual({
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    })
                })
            })

        describe('When updateTechniquesProvidedByThisUser is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUser.techniquesProvided must be updated with payload data', () => {
                    const payload = {
                        _id: "61314337f8aab565c3e56087",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        name: "¿Te gusta tu compañia?",
                    }
            
                    mutations.updateTechniquesProvidedByThisUser(mockedState, payload);
            
                    expect(mockedState.currentUser.techniquesProvided).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        name: "¿Te gusta tu compañia?",
                    }])
                })
            })
        })
        describe('When loadCurrentUserTechniquesProvided is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUserTechniquesProvided must be updated with payload data', () => {
                    const payload = [{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }]
            
                    mutations.loadCurrentUserTechniquesProvided(mockedState, payload);
            
                    expect(mockedState.currentUserTechniquesProvided).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }])
                })
            })
        })

        describe('When updateUserFavoriteTechniques is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUser.favoriteTechniques must be updated with payload data', () => {
                    const payload = {
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }
            
                    mutations.updateUserFavoriteTechniques(mockedState, payload);
            
                    expect(mockedState.currentUser.favoriteTechniques).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }])
                })
            })
        })

        describe('When updateFavoriteTechniques is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUser.favoriteTechniques must be updated with payload data', () => {
                    const payload = [{
                        _id: "61314337f8aab565c3e56087",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        name: "¿Te gusta tu compañia?",
                    }]
            
                    mutations.updateFavoriteTechniques(mockedState, payload);
            
                    expect(mockedState.currentUser.favoriteTechniques).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        name: "¿Te gusta tu compañia?",
                    }])
                })
            })
        })


        describe('When loadCurrentTechniqueReviews is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentTechniqueReviews must be updated with payload data', () => {
                    const payload =  [{
                        _id: "612deae3ae4b43e9447880fb",
                        technique: "612df3d8dbe5775944437e46",
                        user: "612cdf2cfa97f2e5c4f1f107",
                        description: "Esta técnica es excelente para revisar la organización y priorización de tareas. Los grupos se divierten y debaten fluidamente",
                        score: 5,
                        __v: 0
                    }]
            
                    mutations.loadCurrentTechniqueReviews(mockedState, payload);
            
                    expect(mockedState.currentTechniqueReviews).toStrictEqual([{
                        _id: "612deae3ae4b43e9447880fb",
                        technique: "612df3d8dbe5775944437e46",
                        user: "612cdf2cfa97f2e5c4f1f107",
                        description: "Esta técnica es excelente para revisar la organización y priorización de tareas. Los grupos se divierten y debaten fluidamente",
                        score: 5,
                        __v: 0
                    }])
                })
            })
        })

        describe('When loadTechniques is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.techniques must be updated with payload data', () => {
                    const payload =  [{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }]
            
                    mutations.loadTechniques(mockedState, payload);
            
                    expect(mockedState.techniques).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }])
                })
            })
        })

        describe('When loadFilteredTechniques is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.filteredTechniques must be updated with payload data', () => {
                    const payload =  [{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }]
            
                    mutations.loadFilteredTechniques(mockedState, payload);
            
                    expect(mockedState.filteredTechniques).toStrictEqual([{
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }])
                })
            })
        })

        describe('When loadOneTechnique is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentTechnique must be updated with payload data', () => {
                    const payload =  {
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    }
            
                    mutations.loadOneTechnique(mockedState, payload);
            
                    expect(mockedState.currentTechnique).toStrictEqual({
                        _id: "61314337f8aab565c3e56087",
                        name: "¿Te gusta tu compañia?",
                        type: "Animación",
                        time: 30,
                        goal: "Caldeamiento y animación del grupo.",
                        material: "Sillas en ronda.",
                        task: "Se forma una ronda de sillas y una persona...",
                        workflow: "Dinamiza y anima al grupo, genera muchas...",
                        ilustration: "https://i.ibb.co/qptF73V/Music-Celebrate.png",
                        reviews: [],
                        __v: 0,
                        userProvider: "6134eec9c158ae21f6cd95d4"
                    })
                })
            })
        })


        ///
        describe("When loadReviews is commited with payload", () => {
            describe("Then state must be updated", () => {
                test("State.reviews must be updated with payload data", () => {
                    const payload = [{
                        _id: "ur73373h438",
                        technique: "d83842382902342",
                        user: "jk2o4i2u4h242",
                        description: "Excelente!",
                        score: 5,
                        __v: 0
                    }]

                    mutations.loadReviews(mockedState, payload);

                    expect(mockedState.reviews).toStrictEqual([
                        {
                            _id: "ur73373h438",
                            technique: "d83842382902342",
                            user: "jk2o4i2u4h242",
                            description: "Excelente!",
                            score: 5,
                            __v: 0
                        }
                    ])
                })
            })
        })
        ///
        describe('When loadResources is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.resources must be updated with payload data', () => {
                    const payload =  {
                        _id: "612e614936dee7e13db1db27",
                        title: "Pedagogía de la liberación",
                        author: "Paulo Freire",
                        editorial: "Campana",
                        siteEditorial: "https://editorialCampana.es/",
                        __v: 0
                    }
            
                    mutations.loadResources(mockedState, payload);
            
                    expect(mockedState.resources).toStrictEqual({
                        _id: "612e614936dee7e13db1db27",
                        title: "Pedagogía de la liberación",
                        author: "Paulo Freire",
                        editorial: "Campana",
                        siteEditorial: "https://editorialCampana.es/",
                        __v: 0
                    })
                })
            })
        })
    })
})