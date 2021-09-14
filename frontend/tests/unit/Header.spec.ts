import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router';
describe('Given a Header component', () => {
    describe('When is rendered', () => {
        test('Then should render the logo', () => {
            const wrapper = mount(Header, {
                global: {
                    plugins: [router],
                    mocks: {
                        $store: {
                            state: {
                                techniques: [],
                                isAuthenticate: true,
                            },
                            methods: {
                                handleLogout: jest.fn(),
                                mounted: jest.fn(),
                                this: jest.fn(),
                            },
                        }
                    }
                },

            });
            expect(wrapper.attributes().class).toBe('header')
        })

    
    })
})