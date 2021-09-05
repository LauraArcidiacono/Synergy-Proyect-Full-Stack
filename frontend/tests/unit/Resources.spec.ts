import { mount } from '@vue/test-utils';
import Resources from '@/views/Resources.vue';

describe('Given a Resources component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the class "resources__items"', () => {
            const wrapper = mount(Resources)
            expect(wrapper.html()).toContain('<section class="resources__items">')
        })
        test('Then should render a h2 with the text "Resources"', () => {
            const wrapper = mount(Resources)
            expect(wrapper.text()).toContain('Resources')
        })
    })
})