import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';
import state from '../mockedState';


test('displays message', () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state,
          },
        },
      },
    });
    expect(wrapper.html()).toContain('<header class="header">');
  });