import { mount } from '@vue/test-utils';
import TechniqueDetails from '@/views/TechniqueDetails.vue';
import router from '@/router';
import state from '../mockedState';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
describe('Given a TechniqueDetails component', () => {
    describe('When is rendered', () => {
        test('Then should render a button with the class "button"', () => {
            const wrapper = mount(TechniqueDetails, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      getters: {
                        isTechniqueInFavorites: false,
                      },
                      actions,
                      mutations,
                      commit: jest.fn(),
                      dispatch: jest.fn(),
                    },
                    methods: {
                        handleAddToFavoriteTechniques: jest.fn(),
                        handleDeleteTechniqueFromFavorites: jest.fn(),
                        mounted: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.html()).toContain('<button class="button">')
        })
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
                      actions,
                      mutations,
                      commit: jest.fn(),
                      dispatch: jest.fn(),
                    },
                    methods: {
                        handleAddToFavoriteTechniques: jest.fn(),
                        handleDeleteTechniqueFromFavorites: jest.fn(),
                        mounted: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.text()).toContain('Reseñas')
        })
    })
})