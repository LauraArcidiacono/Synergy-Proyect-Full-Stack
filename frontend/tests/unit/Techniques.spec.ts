import { mount } from '@vue/test-utils';
import Techniques from '@/views/Techniques.vue';
import router from '@/router';
import state from '../mockedState';

describe('Given a Techniques component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the class "techniquesList__search"', () => {
            const wrapper = mount(Techniques, {
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
            expect(wrapper.text()).toContain('Lista de Técnicas disponibles')
        })
    })
})