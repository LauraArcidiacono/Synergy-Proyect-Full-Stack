import { mount } from '@vue/test-utils';
import Footer from '../../src/components/Footer.vue';

describe('Given a Header component', () => {
    describe('When is rendered', () => {
        test('Then should render the logo', () => {
            const wrapper = mount(Footer);
            expect(wrapper.html()).toContain('<footer class="footer">') 
        })
    })
})