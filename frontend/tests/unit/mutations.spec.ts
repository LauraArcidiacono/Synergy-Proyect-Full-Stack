import mutations from '@/store/mutations';
import { State } from '@/types/interfaces';
import stateMock from '../mockedState';

let mockedState: State;

describe('Given a mutations file', () => {  
    beforeEach(() => {
    mockedState = stateMock;
  });    
  describe('When loginUser is commited with payload', () => {
        describe('Then state must be updated', () => {
            test('State.isUserAuthenticate should be true', () => {
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
    
                mutations.loginUser(mockedState, payload);
    
                expect(mockedState.isUserAuthenticate).toBe(true)
            })
    
            test('State.token must be updated', () => {
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
    
                mutations.loginUser(mockedState, payload);
    
                expect(mockedState.token).toBe( "hfdkisdfoisdfk490323423hj423")
            })

            test('State.refreshToken must be updated', () => {
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
        describe('Then state must be updated', () => {
            test('State.isUserAuthenticate must be updated', () => {
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
    
                mutations.logoutUser(mockedState, payload);
    
                expect(mockedState.isUserAuthenticate).toBe(false)
            })
        })

            describe('Then state must be updated', () => {
                test('State.token must be updated', () => {
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
        
                    mutations.logoutUser(mockedState, payload);
        
                    expect(mockedState.token).toBe("")
                })
            })
            describe('Then state must be updated', () => {
                test('State.refreshToken must be updated', () => {
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
    
                    mutations.logoutUser(mockedState, payload);
            
                    expect(mockedState.refreshToken).toBe("")
                })
            })
        })

        describe('When updateUserTechniquesProvided is commited with payload', () => {
            describe('Then state must be updated', () => {
                test('State.currentUser.techniquesProvided', () => {
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
        
                    expect(mockedState.currentUser.techniquesProvided).toEqual([{
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

})