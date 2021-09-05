import { mount } from '@vue/test-utils';
import CreateTechniqueForm from '@/components/CreateTechniqueForm.vue';

describe('Given a CreateTechniqueForm component', () => {
    describe('When is rendered', () => {
        test('Then should render a article with the class "profile__info"', () => {
            const wrapper = mount(CreateTechniqueForm)
            expect(wrapper.html()).toContain('<article class="profile__info">')
        })
        test('Then should render a span with the text "Completa todos los campos"', () => {
            const wrapper = mount(CreateTechniqueForm)
            expect(wrapper.text()).toContain('Completa todos los campos')
        })
    })
})