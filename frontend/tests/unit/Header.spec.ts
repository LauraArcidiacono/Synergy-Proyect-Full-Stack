import { mount, shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router';
import state from '../mockedState';
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
                            }
                        }
                    }
                },

            });
            expect(wrapper.attributes().class).toBe('header')
        })

    
    })
})