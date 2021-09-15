import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { UserWithToken } from '@/types/interfaces';
import axios from 'axios';
import {
  configActionContextAndState,
  configActionContextDispatchAndState,
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
                    data: {}
                  });

                  const userData = {
                    name: "",
                    profession: "",
                    city: "",
                    email: "",
                    password: "",
                  };
              
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
                const localStorageUser = {
                    email: '@',
                    passwrod:'123'
                }

                JSON.parse = jest.fn().mockImplementationOnce(() => localStorageUser); 
                 
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

        describe('And the action createNewTechnique is executed successfully', () => {
            test('Action createNewTechnique should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                });
            
                const newTechniqueData = {_id: "2837682672346326437"}
            
                await actions.createNewTechnique(configActionContextAndState(commit, mockedState), newTechniqueData._id);
            
                expect(commit).toHaveBeenCalled();
            })
        })



        describe('And the action deleteTechniqueProvided is executed successfully', () => {
            test('Action deleteTechniqueProvided should call commit', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                });
            
                const updateProvidedTechniques = [{}]
            
                await actions.deleteTechniqueProvided(configActionContextAndState(commit, mockedState), updateProvidedTechniques);
            
                expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action deleteTechniqueProvided is executed successfully', () => {
            test('Action deleteTechniqueProvided should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                });
            
                const techniqueToDeleteId = [{techniqueId: "45734589894735jh"}]
            
                await actions.deleteTechniqueProvided(configActionContextDispatchAndState(dispatch, mockedState), techniqueToDeleteId);
            
                expect(dispatch).toHaveBeenCalled();
            })
        })

    describe('And the action deleteProvidedTechniqueFromApi is executed successfully', () => {
        test('Action deleteProvidedTechniqueFromApi should call axios', async () => {
            mockedAxios.mockResolvedValue({});
        
            const techniqueToDeleteId = {_id: "45734589894735jh"};
        
            await actions.deleteProvidedTechniqueFromApi(mockedState, techniqueToDeleteId);
        
            expect(mockedAxios).toHaveBeenCalled();
        })
    })

    describe('And the action putOnUserFavoriteTechniques is executed successfully', () => {
        test('Action putOnUserFavoriteTechniques should call commit', async () => {
            const favoriteTechnique = {
                userId: "29384jkjerk",
                techniqueId: "23kj4345io345hk"
            }

            mockedAxios.mockResolvedValue({
                data: {}
              });
          
              const favoriteTechniqueToAddToUser = mockedState.currentUser.favoriteTechniques[mockedState.currentUser.favoriteTechniques.length-1]
          
              await actions.putOnUserFavoriteTechniques(configActionContextAndState(commit, mockedState), favoriteTechniqueToAddToUser);
          
              expect(commit).toHaveBeenCalled();
        })
    })


    describe('And the action deleteTechniqueFromFavorite is executed successfully', () => {
        test('Action deleteTechniqueFromFavorite should call commit', async () => {

            const techniqueToDelete = [{}]
        
            await actions.deleteTechniqueFromFavorite(configActionContextAndState(commit, mockedState), techniqueToDelete);
        
            expect(commit).toHaveBeenCalled();
        })
    })

    describe('And the action deleteTechniqueFromFavorite is executed successfully', () => {
        test('Action deleteTechniqueFromFavorite should call dispatch', async () => {

            const techniqueToDelete = [{}]
        
            await actions.deleteTechniqueFromFavorite(configActionContextDispatchAndState(dispatch, mockedState), techniqueToDelete);
        
            expect(dispatch).toHaveBeenCalled();
        })
    })


    describe('And the action deleteFevoriteTechniquesFromApi is executed successfully', () => {
        test('Action deleteFevoriteTechniquesFromApi should call axios', async () => {
            mockedAxios.mockResolvedValue({
                data: {}
              });

            await actions.deleteFevoriteTechniquesFromApi(mockedState, user.user._id);
        
            expect(mockedAxios).toHaveBeenCalled();
        })
    })
        describe('And the action createNewReview is executed successfully', () => {
            test('Action createNewReview should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {}
                  });
              
                  const newReviewData = {_id: "2837682672346326437"}
              
                  await actions.createNewReview(configActionContextDispatchAndState(dispatch, mockedState), newReviewData._id);
              
                  expect(dispatch).toHaveBeenCalled();
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