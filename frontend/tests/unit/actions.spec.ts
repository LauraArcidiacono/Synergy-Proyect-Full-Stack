import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { User, UserWithToken, UserRegisterData } from '@/types/interfaces';
import axios from 'axios';
import {
  configActionContextAndState,
  configActionContext,
  configActionContextDispatch,
} from '../test-utils';
import mockedState from '../mockedState';

jest.mock('axios');
const mockedAxios = axios as unknown as jest.Mock;
const commit = jest.fn() as jest.MockedFunction<Commit>;
const dispatch = jest.fn() as jest.MockedFunction<Dispatch>;


let user = {
    user: {
        _id: "612cdf2cfa97f2e5c4f1f107",
        name: "Jordi",
        profession: "Sensei",
        city: "Vic",
        avatar: "https://i.ibb.co/jh5JVzY/Jordi1.jpg",
        email: "jordi.sensei@gmail.com",
        password: "jordi1234",
        favoriteTechniques: [],
        techniquesProvided: [],
        __v: 0,
    },
    token: "48943895kjyjry895645h43",
    refreshToken: "409534509gdgfoihf09wutrfidj"
} as UserWithToken;
describe('Given an object of actions', () => {
    
    describe('When is invoqued with one action', () => {
        
        describe('And the action register is executed successfully', () => {
            test('Register should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {name: "",
                        profession: "",
                        city: "",
                        avatar: "", 
                        email: "",
                        password: "",
                        favoriteTechniques: [],
                        techniquesProvided: []}
                  });
                  const userData = {email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                  await actions.register(configActionContextDispatch(dispatch), userData);
              
                  expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action login is executed successfully', () => {
            test('Login should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {},
                });

                const userData ={email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                await actions.login(configActionContextDispatch(dispatch), userData);

                expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action getUserFromLocalStorage is executed successfully', () => {
            test('Action getUserFromLocalStorage should call dispatch', async () => {
                     
                await actions.getUserFromLocalStorage(configActionContextDispatch(dispatch), {});

                expect(dispatch).toHaveBeenCalled();
            })
        })
   
        describe('And the action userLogedFromApi is executed successfully', () => {
            
            test('Then userLogedFromApi should call axios.get', async () => {
                mockedAxios.mockResolvedValue({
                    data: {user: mockedState.currentUser},
                });  
     
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), user);

                expect(axios).toHaveBeenCalled();
                
            })
            test('Then userLogedFromApi should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {},
                });  
     
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), user);

                expect(dispatch).toHaveBeenCalled();
            })

            test('userLogedFromApi should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {},
                });
                
                await actions.userLogedFromApi(configActionContext(commit), user);

                expect(commit).toHaveBeenCalled();
            })

            test('userLogedFromApi should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                });
              
              
                await actions.userLogedFromApi(configActionContext(commit), user);

                expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action deleteDataFromLocalStorage is executed successfully', () => {
            test('Action deleteDataFromLocalStorage should call dispatch', async () => {
                     
                await actions.deleteDataFromLocalStorage(configActionContext (commit), user);

                expect(commit).toHaveBeenCalled();
            })
        })
        describe('And the action fetchTechniquesFromApi is executed successfully', () => {
            test('Action fetchTechniquesFromApi should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const techniqueData = mockedState.techniques
              
                  await actions.fetchTechniquesFromApi(configActionContextAndState(commit, mockedState), techniqueData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action fetchOneTechniqueFromApi is executed successfully', () => {
            test('Action fetchOneTechniqueFromApi should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const techniqueData = mockedState.currentTechnique
              
                  await actions.fetchOneTechniqueFromApi(configActionContextAndState(commit, mockedState), techniqueData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action fetchCurrentUserTechniquesProvided is executed successfully', () => {
            test('Action fetchCurrentUserTechniquesProvided should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const techniqueData = mockedState.currentUserTechniquesProvided
              
                  await actions.fetchCurrentUserTechniquesProvided(configActionContextAndState(commit, mockedState), techniqueData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action getNewReview is executed successfully', () => {
            test('Action getNewReview should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const reviewData = mockedState.currentTechnique.reviews
              
                  await actions.getNewReview(configActionContextAndState(commit, mockedState), reviewData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action fetchResourcesFromApi is executed successfully', () => {
            test('Action fetchResourcesFromApi should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const resourceData = mockedState.resources
              
                  await actions.fetchResourcesFromApi(configActionContextAndState(commit, mockedState), resourceData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

    })
}) 