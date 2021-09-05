import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';

describe('Given a Profile component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "container__userTechniques"', () => {
            const wrapper = mount(Profile)
            expect(wrapper.html()).toContain(' <article class="container__userTechniques">')
        })
        test('Then should render a button with the text "Crear Técnica"', () => {
            const wrapper = mount(Profile)
            expect(wrapper.text()).toContain('Crear Técnica')
        })
    })
})