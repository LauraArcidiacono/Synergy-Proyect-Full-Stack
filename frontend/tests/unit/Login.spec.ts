import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Given a Login component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "login__userData"', () => {
            const wrapper = mount(Login)
            expect(wrapper.html()).toContain('<div class="login__userData">')
        })
        test('Then should render a h3 with the text "Login"', () => {
            const wrapper = mount(Login)
            expect(wrapper.text()).toContain('Login')
        })
    })
})