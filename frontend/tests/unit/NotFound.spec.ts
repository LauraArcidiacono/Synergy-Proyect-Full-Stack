import { mount } from '@vue/test-utils';
import NotFound from '@/views/NotFound.vue';

describe('Given a NotFound component', () => {
    describe('When is rendered', () => {
        test('Then should render a button with the class "button"', () => {
            const wrapper = mount(NotFound)
            expect(wrapper.html()).toContain('<button class="button">')
        })
        test('Then should render a h2 with the text "404- Page Not Found"', () => {
            const wrapper = mount(NotFound)
            expect(wrapper.text()).toContain('404- Page Not Found')
        })
    })
})