import { mount } from '@vue/test-utils';
import Register from '@/components/Register.vue';
import router from '@/router';
import state from '../mockedState';
describe('Given a Register component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "register__userData"', () => {
            const wrapper = mount(Register, {
                global: {
                    plugins: [router],
                    mocks: {
                        $store: {
                            state,
                            methods: {
                                handleSubmit: jest.fn(),
                                this: jest.fn(),
                            },
                        }
                    }
                },

            })
            expect(wrapper.html()).toContain('<div class="register__userData">')
        })
        test('Then should render a h3 with the text "Regístrate"', () => {
            const wrapper = mount(Register, {
                global: {
                    plugins: [router],
                    mocks: {
                        $store: {
                            state,
                            methods: {
                                handleSubmit: jest.fn(),
                                this: jest.fn(),
                            },
                        }
                    }
                },

            })
            expect(wrapper.text()).toContain('Regístrate')
        })
    })
})