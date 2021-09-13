import { mount } from '@vue/test-utils';
import Dashboard from '../../src/views/Dashboard.vue';
import router from '@/router/index';
import state from '../mockedState';

describe('Given a Dashboard component', () => {
    describe('When is rendered', () => {
        test('Then should render an article with the class "articles__techniques"', () => {
            const wrapper = mount(Dashboard, {
              global: {
                plugins: [router],
                mocks: {
                  $store: {
                    state,
                  }, 
                  data: jest.fn(),
                },
              },
            });
            expect(wrapper.html()).toContain('<article class="articles__techniques">') 
        })
        test('Then should render an article with the tex "Recursos"', () => {
            const wrapper = mount(Dashboard, {
              global: {
                plugins: [router],
                mocks: {
                  $store: {
                    state,
                  }, 
                  data: jest.fn(),
                },
              },
            });
            expect(wrapper.text()).toContain('Recursos') 
        })
    })
})