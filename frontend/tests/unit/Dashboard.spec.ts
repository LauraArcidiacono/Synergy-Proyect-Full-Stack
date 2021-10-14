import { mount } from '@vue/test-utils';
import Dashboard from '../../src/views/Dashboard.vue';
import state from '../mockedState';

describe('Given a Dashboard component', () => {
  describe('When is rendered', () => {
    test('Then should render an article with the class "articles__techniques"', () => {
      const wrapper = mount(Dashboard, {
        global: {
          mocks: {
            $store: {
              state,
            }, 
          },
        },
      });
      expect(wrapper.html()).toContain('<article class="articles__techniques">') 
    })
    test('Then should render an article with the text "Recursos"', () => {
      const wrapper = mount(Dashboard, {
        global: {
          mocks: {
            $store: {
              state,
            },
          },
        },
      });
      expect(wrapper.text()).toContain('Recursos') 
    })
  })
})