import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import router from '@/router';
import state from '../mockedState';
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

        describe('And the form is submited', () => {
            test('Then handleSubmit should be call', () => {
                const wrapper = mount(Login, {
                    global: {
                        plugins: [router],
                        mocks: {
                            $store: {
                                state,
                                dispatch: jest.fn(),
                            }
                        }
                    },

                })
                const handleSubmit = jest.fn();
                handleSubmit();
                const loginButton = wrapper.get('[data-test="handleSubmit__login"]');
                loginButton.trigger('submit')
                
                expect(handleSubmit).toHaveBeenCalled()
            })
        })
    })
})
