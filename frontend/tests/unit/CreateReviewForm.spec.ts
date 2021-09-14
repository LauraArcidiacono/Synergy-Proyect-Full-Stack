import { mount } from '@vue/test-utils';
import CreateReviewForm from '@/views/CreateReviewForm.vue';
import router from '@/router';
import state from '../mockedState';
import actions from '@/store/actions';
import mutations from '@/store/mutations';


describe('Given a CreateReviewForm component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "createReviewForm__inputs"', async () => {
            const wrapper = mount(CreateReviewForm, {
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
                  },
                },
              })
            
            expect(wrapper.html()).toContain('<div class="createReviewForm__inputs">')
        })
        test('Then should render a h3 with the text "Comparte tu experiencia utilizando ésta técnica"', () => {
            const wrapper = mount(CreateReviewForm, {
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
            expect(wrapper.text()).toContain('Comparte tu experiencia utilizando ésta técnica')
        })

        test('Then @click button "Crear Técnica" should call handleSaveNewReview', async () => {
            const wrapper = mount(CreateReviewForm, {
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

              await wrapper.trigger('click')

        })

        describe('And the form is submit', () => {
          test('Then should submit call handleSaveNewReview', async () => {
            const wrapper = mount(CreateReviewForm, {
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
                  },
                },
              })
              const submitForm = jest.fn();
              submitForm();
              const formCreateReview = wrapper.get('[data-test="createReviewForm__submit"]');
              await formCreateReview.trigger('submit')
              
            expect(submitForm).toHaveBeenCalled()
        })
        })

    })
})