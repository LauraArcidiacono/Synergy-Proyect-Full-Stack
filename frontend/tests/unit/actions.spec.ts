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
                    data: {user: mockedState.currentUser},
                  });
              
                  const userData = {email: mockedState.currentUser.email, password: mockedState.currentUser.password};
              
                  await actions.register(configActionContextDispatch(dispatch), userData);
              
                  expect(axios.post).toHaveBeenCalled();
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

        describe('And the action getUserFromLocalStorag is executed successfully', () => {
            test('Action getUserFromLocalStorage should call dispatch', async () => {
                     
                await actions.deleteDataFromLocalStorage(configActionContext (commit), user);

                expect(commit).toHaveBeenCalled();
            })
        })

        ////////////////////falla
        describe('And the action userLogedFromApi is executed successfully', () => {
            
            test('Then userLogedFromApi should call axios.get', async () => {
                mockedAxios.mockResolvedValue({
                    data: {user: mockedState.currentUser},
                });  
     
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), user);

                expect(axios.get).toHaveBeenCalled();
                
            })
            test('Then userLogedFromApi should call dispatch', async () => {
                mockedAxios.mockResolvedValue({
                    data: {},
                });  
     
                await actions.userLogedFromApi(configActionContextDispatch(dispatch), user);

                expect(dispatch).toHaveBeenCalled();
            })

            ////////////////////falla
            test('userLogedFromApi should call commit', async () => {
                
                mockedAxios.mockResolvedValue({
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
                mockedAxios.mockResolvedValue({});
              
              
                await actions.userLogedFromApi(configActionContext(commit), user);

                expect(commit).toHaveBeenCalledWith('loadUser');
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

    })
}) 