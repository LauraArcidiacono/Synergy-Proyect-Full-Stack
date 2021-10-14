import { mount } from '@vue/test-utils';
import Resources from '@/views/Resources.vue';
import router from '@/router';
import state from '../mockedState';

describe('Given a Resources component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the class "resources__items"', () => {
            const wrapper = mount(Resources, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      dispatch: jest.fn(),
                    }
                  }
                }
              })
            expect(wrapper.html()).toContain('<section class="resources__items">')
        })
        test('Then should render a h2 with the text "Resources"', () => {
            const wrapper = mount(Resources, {
              global: {
                plugins: [router],
                mocks: {
                  $store: {
                    state,
                    dispatch: jest.fn(),
                  }
                }
              }
            })
            expect(wrapper.text()).toContain('Recursos')
        })
    })
})