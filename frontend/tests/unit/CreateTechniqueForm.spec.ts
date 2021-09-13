import { mount } from '@vue/test-utils';
import CreateTechniqueForm from '@/views/CreateTechniqueForm.vue';
import router from '@/router';
import state from '../mockedState';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
describe('Given a CreateTechniqueForm component', () => {
    describe('When is rendered', () => {
        test('Then should render a article with the class "profile__info"', () => {
            const wrapper = mount(CreateTechniqueForm, {
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
                      handleSaveNewTechnique: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.html()).toContain('<h2>')
        })
        test('Then should render a span with the text "Completa todos los campos"', () => {
            const wrapper = mount(CreateTechniqueForm, {
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
                        handleSaveNewReview: jest.fn(),
                        mounted: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.text()).toContain('Completa todos los campos')
        })
    })
})