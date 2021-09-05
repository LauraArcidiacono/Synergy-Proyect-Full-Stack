import { mount } from '@vue/test-utils';
import Techniques from '@/views/Techniques.vue';
import router from '@/router';

describe('Given a Techniques component', () => {
    describe('When is rendered', () => {
        test('Then should render a section with the class "techniquesList__search"', () => {
            const wrapper = mount(Techniques, {
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
            })
            expect(wrapper.attributes().class).toBe('techniquesList__search')
        })

    })
})