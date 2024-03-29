import { mount } from '@vue/test-utils';
import TechniqueDetails from '@/views/TechniqueDetails.vue';
import router from '@/router';
import state from '../mockedState';
describe('Given a TechniqueDetails component', () => {
  describe('When is rendered', () => {
    test('Then should render a h3 with the text "Reseñas"', () => {
      const wrapper = mount(TechniqueDetails, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              getters: {
                isTechniqueInFavorites: false,
              },
              dispatch: jest.fn(),
            }
          }
        }
      })
      expect(wrapper.text()).toContain('Reseñas')
    })

    describe('And the technique is not in favorites yet', () => {
      test('Then should render a button with <i class="far fa-heart">', () => {
        const wrapper = mount(TechniqueDetails, {
            global: {
              plugins: [router],
              mocks: {
                $store: {
                  state,
                  getters: {
                    isTechniqueInFavorites: false,
                  },
                  dispatch: jest.fn(),
                }
              }
            }
          })
        expect(wrapper.html()).toContain('<i class="far fa-heart">')
      })
    })
      
    describe('And addTechniqueToFavorite button is triggered', () => {
      test('Then should call handleAddToFavoriteTechniques', async () => {
        const wrapper = mount(TechniqueDetails, {
          global: {
            plugins: [router],
            mocks: {
              $store: {
                state,
                getters: {
                  isTechniqueInFavorites: false,
                },
                dispatch: jest.fn(),
              }
            }
          }
        })
        const addToFavoriteTechniques = jest.fn();
        addToFavoriteTechniques();
        const buttonAddToFavoriteTechniques = wrapper.get('[data-test="addTechniqueToFavorite__button"]');
        await buttonAddToFavoriteTechniques.trigger('click')
          
        expect(addToFavoriteTechniques).toHaveBeenCalled()
      })
    })

    describe('When the technique is in favorites', () => {
  
      describe('And deleteTechniqueFromFavorite button is triggered', () => {
        test('Then should call handleDeleteTechniqueFromFavorites', async () => {
          const wrapper = mount(TechniqueDetails, {
            global: {
              plugins: [router],
              mocks: {
                $store: {
                  state,
                  getters: {
                    isTechniqueInFavorites: true,
                  },
                  dispatch: jest.fn(),
                }
              }
            }
          })
          const deleteTechniqueFromFavorite = jest.fn();
          deleteTechniqueFromFavorite();
          const buttonDeleteTechniqueFromFavorite = wrapper.get('[data-test="deleteTechniqueFromFavorite__button"]');
          await buttonDeleteTechniqueFromFavorite.trigger('click')
            
          expect(deleteTechniqueFromFavorite).toHaveBeenCalled()
        })
      })
    })  
  })
})