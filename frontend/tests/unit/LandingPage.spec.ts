import { mount } from '@vue/test-utils';
import LandingPage from '@/views/LandingPage.vue';
import router from '@/router/index';
import state from '../mockedState';
describe('Given a LandingPage component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "fundamentals__info"', () => {
            const wrapper = mount(LandingPage, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.html()).toContain('<div class="fundamentals__info">')
        })
        test('Then should render a h3 with the text "Cómo funciona la página"', () => {
            const wrapper = mount(LandingPage, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.text()).toContain('Cómo funciona la página')
        })
    })
})