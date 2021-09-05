import { mount } from '@vue/test-utils';
import Dashboard from '../../src/views/Dashboard.vue';

describe('Given a Dashboard component', () => {
    describe('When is rendered', () => {
        test('Then should render an article with the class "articles__techniques"', () => {
            const wrapper = mount(Dashboard);
            expect(wrapper.html()).toContain('<article class="articles__techniques">') 
        })
        test('Then should render an article with the tex "Recursos"', () => {
            const wrapper = mount(Dashboard);
            expect(wrapper.text()).toContain('Recursos') 
        })
    })
})