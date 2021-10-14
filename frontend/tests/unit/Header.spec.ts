import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router';
import state from '../mockedState'
describe('Given a Header component', () => {
        describe('When is rendered', () => {
            test('Then should render the logo', () => {
                const wrapper = mount(Header, {
                    global: {
                        plugins: [router],
                        mocks: {
                            $store: {
                                state,
                                dispatch: jest.fn(),
                            }
                        }
                    },

                });
                expect(wrapper.attributes().class).toBe('headerContainer')
            })

        describe('And button logout is pressed', () => {
            test('@click button "Logout" should call handleLogout', async () => {
                const wrapper = mount(Header, {
                    global: {
                        plugins: [router],
                        mocks: {
                            $store: {
                                state: {
                                    currentUser: {},
                                    isUserAuthenticate: true,
                                },
                                dispatch: jest.fn(),
                            }
                        }
                    },
                });
                const handleLogout = jest.fn();
                handleLogout();
                const logoutButton = wrapper.find('#logout__button');
                await logoutButton.trigger('click')
                
                expect(handleLogout).toHaveBeenCalled()
            })
        })
    })
})