import { mount } from '@vue/test-utils'
import MainComponent from '@/MainComponent.vue'

describe('Testing structure', () => {
  beforeEach((() => {
    global.IntersectionObserver = jest.fn(function() {
      this.observe = jest.fn()
      this.unobserve = jest.fn()
      this.disconnect = jest.fn()
    })
  }))

  it('Renders Vue instance', () => {
    expect(mount(MainComponent).isVueInstance()).toBeTruthy()
  })
})
