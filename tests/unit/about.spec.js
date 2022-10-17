import { mount, createLocalVue } from '@vue/test-utils'
import About from '../../pages/about.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()

describe('about.vue', () => {

  beforeEach(() => {
    localVue.use(BootstrapVue)
  })

  it('Checks if the About page is rendered', () => {
    const msg = 'The Grand Bargain transparency commitment What is the Grand Bargain?'
    
    const wrapper = mount(About, {
      localVue
    })
    expect(wrapper.text()).toContain(msg)
  })
})
