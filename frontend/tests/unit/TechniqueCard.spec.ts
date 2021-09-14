import { mount } from '@vue/test-utils';
import TechniqueCard from '@/components/TechniqueCard.vue';
import router from '@/router';
import state from '../mockedState';
import mutations from '@/store/mutations';
describe('Given a TechniqueCard component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the calss "techniqueList__card"', () => {
            const wrapper = mount(TechniqueCard, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      getters: {
                        isTechniqueInFavorites: false,
                      },
                      actions: {
                        createNewReview: jest.fn(),
                      },
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
                    props: {
                        name: "",
                        type: "",
                        goal: "",
                        ilustration: "",
                        _id: "",
                      }
                  },
                },
              })
            expect(wrapper.html()).toContain('<section class="techniqueList__card">')
        })
        test('Then should render a button with the text "Ver Detalles"', () => {
            const wrapper = mount(TechniqueCard, {
                global: {
                  plugins: [router],
                  mocks: {
                    $store: {
                      state,
                      getters: {
                        isTechniqueInFavorites: false,
                      },
                      actions: {
                        createNewReview: jest.fn(),
                      },
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
                    props: {
                        name: "",
                        type: "",
                        goal: "",
                        ilustration: "",
                        _id: "",
                      }
                  },
                },
              })
            expect(wrapper.text()).toContain('Ver Detalles')
        })
    })
})