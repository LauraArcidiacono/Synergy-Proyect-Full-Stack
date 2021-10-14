import { mount } from '@vue/test-utils';
import TechniqueCard from '@/components/TechniqueCard.vue';
import state from '../mockedState';
describe('Given a TechniqueCard component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the calss "techniqueList__card"', () => {
            const wrapper = mount(TechniqueCard, {
                global: {
                  mocks: {
                    $store: {
                      state,
                      dispatch: jest.fn(),
                    }
                  }
                }
              })
            expect(wrapper.html()).toContain('<section class="techniqueList__card">')
        })
        test('Then should render a button with the text "Ver Detalles"', () => {
            const wrapper = mount(TechniqueCard, {
              global: {
                mocks: {
                  $store: {
                    state,
                    dispatch: jest.fn(),
                  }
                }
              }
            })
            expect(wrapper.text()).toContain('Ver Detalles')
        })
    })
})