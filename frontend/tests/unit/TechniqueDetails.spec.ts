import { mount } from '@vue/test-utils';
import TechniqueDetails from '@/views/TechniqueDetails.vue';

describe('Given a TechniqueDetails component', () => {
    describe('When is rendered', () => {
        test('Then should render a button with the class "button"', () => {
            const wrapper = mount(TechniqueDetails)
            expect(wrapper.html()).toContain('<button class="button">')
        })
        test('Then should render a h3 with the text "Reseñas"', () => {
            const wrapper = mount(TechniqueDetails)
            expect(wrapper.text()).toContain('Reseñas')
        })
    })
})