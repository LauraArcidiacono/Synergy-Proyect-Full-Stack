import { State } from '@/types/interfaces';
import { Commit, Dispatch } from 'vuex';

const configActionContextAndState = (commit: Commit, state: State): any => ({
  commit,
  state,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContext = (commit: Commit): any => ({
  commit,
  dispatch: jest.fn(),
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const configActionContextDispatch = (dispatch: Dispatch): any => ({
  commit: jest.fn(),
  dispatch,
  getters: jest.fn(),
  rootState: {} as State,
  rootGetters: jest.fn(),
});

const localStorageMock = ()=> ({
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
});


export {
  configActionContext,
  configActionContextAndState,
  configActionContextDispatch,
  localStorageMock,
};

function key(key: any): string {
    throw new Error('Function not implemented.');
  }
