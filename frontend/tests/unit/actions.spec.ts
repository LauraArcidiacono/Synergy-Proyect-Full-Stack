import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { UserWithToken, UserRegisterData } from '@/types/interfaces';
import axios from 'axios';
import {
  configActionContextAndState,
  configActionContext,
  configActionContextDispatch,
  localStorageMock,
} from '../test-utils';

import mockedState from '../mockedState';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest. MockedFunction<Commit>;
const dispatch = jest.fn() as jest. MockedFunction<Dispatch>;


describe('Given an object of actions', () => {
    
    describe('When is invoqued with one action', () => {
        
        describe('And the action register is executed successfully', () => {
            test('Register should call dispatch', async () => {

                mockedAxios.post.mockResolvedValue({
                    data: {user: mockedState.currentUser},
                  });
              
                  const userData = {email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                  await actions.register(configActionContextDispatch(dispatch), userData);
              
                  expect(axios.post).toHaveBeenCalled();
            })
        })

        describe('And the action login is executed successfully', () => {
            test('Login should call dispatch', async () => {
                mockedAxios.post.mockResolvedValue({
                    data: {user: mockedState.currentUser},
                });

                const userData ={email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                await actions.login(configActionContextDispatch(dispatch), userData);

                expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action getUserFromLocalStorage is executed successfully', () => {
            test('Action getUserFromLocalStorage should call dispatch', async () => {
                const userData ={email: mockedState.currentUser.email, password: mockedState.currentUser.password};
                
                const localStorageMock = localStorage.getItem: jest.fn()
                .mockReturnValue(JSON.parse("userData") || "")
     
                await actions.getUserFromLocalStorage(configActionContextDispatch(dispatch), userData);

                expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action userLogedFromApi is executed successfully', () => {
            test('userLogedFromApi should call dispatch', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: 
                        {
                            _id: "612cdf2cfa97f2e5c4f1f107",
                            name:"Jordi",
                            profession: "Sensei",
                            city: "Vic",
                            avatar: "https://i.ibb.co/GPnrGDw/Default-profile-picture-avatar-photo-placeholder-Vector-illustration.jpg",
                            email: "jordi.sensei@gmail.com",
                            password: "jordi1234",
                            favoriteTechniques: [
                                "613140ccf8aab565c3e56081",
                            ],
                            techniquesProvided: [],
                    },
                });
              

                const userData = mockedState.currentUser;
              
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), userData);

                expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action getUserFromLocalStorag is executed successfully', () => {
            test('Action getUserFromLocalStorage should call dispatch', async () => {
                const userData = "";
                
                localStorageMock.setItem.mockReturnValue(JSON.stringify("userData") || "")
     
                await actions.deleteDataFromLocalStorage(configActionContext (commit), userData);

                expect(commit).toHaveBeenCalled();
            })
        })

        describe('And the action fetchTechniquesFromApi is executed successfully', () => {
            test('Action fetchTechniquesFromApi should call commit', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {
                      techniques: [{ }]
                    }
                  });
              
                  const techniqueData = mockedState.techniques
              
                  await actions.fetchTechniquesFromApi(configActionContext(commit), techniqueData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

    })
}) 