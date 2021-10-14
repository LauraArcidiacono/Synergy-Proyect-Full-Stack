import { mount } from '@vue/test-utils';
import CreateTechniqueForm from '@/views/CreateTechniqueForm.vue';
import router from '@/router';
import state from '../mockedState';
describe('Given a CreateTechniqueForm component', () => {
  describe('When is rendered', () => {
    test('Then should render a article with the class "profile__info"', () => {
        const wrapper = mount(CreateTechniqueForm)
        expect(wrapper.html()).toContain('<h2>')
    })
    test('Then should render a span with the text "Completa todos los campos"', () => {
        const wrapper = mount(CreateTechniqueForm)
        expect(wrapper.text()).toContain('Completa todos los campos')
    })

  describe('And submit is call', () => {
    test('Then should call handleSaveNewTechnique', async () => {
      const wrapper = mount(CreateTechniqueForm, {
        global: {
          plugins: [router],
          mocks: {
            $store: {
              state,
              dispatch: jest.fn(),
            },
            methods: {
              handleSaveNewTechnique: jest.fn(),
            },
          },
        },
      })
      const submitForm = jest.fn();
      submitForm();
      const formCreateTechnique = wrapper.get('[data-test="createTechniqueForm__submit"]');
      await formCreateTechnique.trigger('submit')
        
      expect(submitForm).toHaveBeenCalled()
    })
  })
  })
})