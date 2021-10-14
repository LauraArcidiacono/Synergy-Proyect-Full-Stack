import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';
import state from '../mockedState';


describe('Given a app.vue file', () => {
  describe('When is rendered', () => {
    test('Should mount Header component', () => {
      const wrapper = mount(App, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              getters: {
                isTechniqueInFavorites: false,
              }, 
              commit: jest.fn(),
              dispatch: jest.fn(),
            },
          },
        },
      });
    expect(wrapper.html()).toContain('<header class="headerContainer">');
    })
  })
});