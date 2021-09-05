import { mount } from '@vue/test-utils';
import CreateReviewForm from '@/components/CreateReviewForm.vue';

describe('Given a CreateReviewForm component', () => {
    describe('When is rendered', () => {
        test('Then should render a div with the class "createReviewForm__inputs"', () => {
            const wrapper = mount(CreateReviewForm)
            expect(wrapper.html()).toContain('<div class="createReviewForm__inputs">')
        })
        test('Then should render a h3 with the text "Comparte tu experiencia utilizando ésta técnica"', () => {
            const wrapper = mount(CreateReviewForm)
            expect(wrapper.text()).toContain('Comparte tu experiencia utilizando ésta técnica')
        })
    })
})