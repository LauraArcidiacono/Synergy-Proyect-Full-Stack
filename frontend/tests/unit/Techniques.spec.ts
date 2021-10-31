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

    describe('And a category is choosen', () => {
      test('Then should setData with the choosen category', () => {
        const wrapper = mount(Techniques, {
          global: {
            plugins: [router],
            mocks: {
              $store: {
                state,
                dispatch: jest.fn(),
              },
            },
          },
        })

        wrapper.setData({filterValue: 'confianza'})

        expect(wrapper.vm.filterValue).toBe('confianza') 
      })

      test('Then filterTechniques to have been called', () => {
        const wrapper = mount(Techniques, {
          global: {
            plugins: [router],
            mocks: {
              $store: {
                state,
                dispatch: jest.fn(),
              },
            },
          },
        })

        const filterTechniques = jest.fn();
        filterTechniques();
        const dropedCategoryMenu = wrapper.get('[data-test="selectCategory"]');
        dropedCategoryMenu.trigger('change')
        
        expect(filterTechniques).toHaveBeenCalled()
      })
    })
})