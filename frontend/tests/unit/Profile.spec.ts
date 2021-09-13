import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';
import router from '@/router';
import state from '../mockedState';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
describe('Given a Profile component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "container__userTechniques"', () => {
            const wrapper = mount(Profile, {
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
                        handleDeleteTechniqueProvided: jest.fn(),
                        mounted: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.html()).toContain(' <article class="container__userTechniques">')
        })
        test('Then should render a button with the text "Crear Técnica"', () => {
            const wrapper = mount(Profile, {
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
                        handleDeleteTechniqueProvided: jest.fn(),
                        mounted: jest.fn(),
                        this: jest.fn(),
                    }, 
                    data: jest.fn(),
                  },
                },
              })
            expect(wrapper.text()).toContain('Crear Técnica')
        })
    })
})