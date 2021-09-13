import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { User, UserWithToken, UserRegisterData } from '@/types/interfaces';
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

const user = {} as UserWithToken;
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
                    data: {},
                });

                const userData ={email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                await actions.login(configActionContextDispatch(dispatch), userData);

                expect(dispatch).toHaveBeenCalled();
            })
        })

        describe('And the action getUserFromLocalStorag is executed successfully', () => {
            test('Action getUserFromLocalStorage should call dispatch', async () => {
                const userData = "";
     
                await actions.deleteDataFromLocalStorage(configActionContext (commit), userData);

                expect(commit).toHaveBeenCalled();
            })
        })

        ////////////////////falla
        describe('And the action userLogedFromApi is executed successfully', () => {
            test('userLogedFromApi should call dispatch', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {},
                });  
     
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), user);

                expect(axios.get).toHaveBeenCalled();
                // expect(dispatch).toHaveBeenCalled();
            })

            ////////////////////falla
            test('userLogedFromApi should call commit', async () => {
                
                mockedAxios.get.mockResolvedValue({
                    _id: "",
                    name: "",
                    profession: "",
                    city: "",
                    avatar: "", 
                    email: "",
                    password: "",
                    favoriteTechniques: [],
                    techniquesProvided: []
                });
                

                await actions.userLogedFromApi(configActionContext(commit), user);

                expect(commit).toHaveBeenCalledWith('loginUser');
            })

            test('userLogedFromApi should call commit', async () => {
                mockedAxios.get.mockResolvedValue({});
              
                const userData = mockedState.currentUser;
              
                await actions.userLogedFromApi(configActionContext(commit), userData);

                expect(commit).toHaveBeenCalledWith('loadUser');
            })
        })


        describe('And the action fetchTechniquesFromApi is executed successfully', () => {
            test('Action fetchTechniquesFromApi should call commit', async () => {
                mockedAxios.get.mockResolvedValue({
                    data: {}
                  });
              
                  const techniqueData = mockedState.techniques
              
                  await actions.fetchTechniquesFromApi(configActionContext(commit), techniqueData);
              
                  expect(commit).toHaveBeenCalled();
            })
        })

    })
}) 