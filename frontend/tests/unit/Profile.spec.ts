import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';
import router from '@/router';
import state from '../mockedState';
describe('Given a Profile component', () => {
  describe('When is rendered', () => {
      test('Then should render a div with the class "container__userTechniques"', () => {
          const wrapper = mount(Profile, {
              global: {
                mocks: {
                  $store: {
                    state,
                    dispatch: jest.fn(),
                  },
                },
              },
            }              )
          expect(wrapper.html()).toContain(' <article class="container__userTechniques">')
      })
      test('Then should render a button with the text "Crear Técnica"', () => {
          const wrapper = mount(Profile, {
            global: {
              mocks: {
                $store: {
                  state,
                  dispatch: jest.fn(),
                },
              },
            },
          })
          expect(wrapper.text()).toContain('Crear Técnica')
      })


    describe('And button X is triggered', () => {
      test('Then should call handleDeleteTechniqueProvided', async () => {
        const wrapper = mount(Profile, {
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
        const deleteTchniqueProvided = jest.fn();
        deleteTchniqueProvided();
        const buttonBeleteTchniqueProvided = wrapper.get('[data-test="deleteTechniqueProvided__button"]');
        await buttonBeleteTchniqueProvided.trigger('click')
        
        expect(deleteTchniqueProvided).toHaveBeenCalled()
      })
    })
  })
})