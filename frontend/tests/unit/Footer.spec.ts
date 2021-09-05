import { mount } from '@vue/test-utils';
import Footer from '../../src/components/Footer.vue';

describe('Given a Footer component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "footer__logos"', () => {
            const wrapper = mount(Footer);
            expect(wrapper.html()).toContain('<div class="footer__logos">') 
        })
        test('Then should render a h3 with the text "by Laura Arcidiacono"', () => {
            const wrapper = mount(Footer);
            expect(wrapper.text()).toContain('by Laura Arcidiacono') 
        })
    })
})