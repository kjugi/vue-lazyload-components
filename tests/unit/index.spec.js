import { mount } from '@vue/test-utils'
import MainComponent from '@/MainComponent.vue'

describe('Testing structure', () => {
  beforeEach((() => {
    global.IntersectionObserver = class IntersectionObserver {
      constructor(el, options) {
        this.el = el
        this.options = options
        this.observables = []
      }

      observe (el) {
        this.observables.push(el)
      }

      unobserve() {
        return true
      }
    }
  }))

  it('Renders Vue instance', () => {
    expect(mount(MainComponent).isVueInstance()).toBeTruthy()
  })

  it('Should mount component in new Vue instance and have default loading content', () => {
    const wrapper = mount({
      components: {
        MainComponent
      },
      template: `
        <div>
          <main-component></main-component>
        </div>
      `
    })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.html()).toBe(`<div>
  <section><span>
        Loading...
      </span></section>
</div>`)
  })

  // it('Should change main tag of component when pass option', () => {

  // })

  // it('Content should be visible on render', () => {

  // })

  // it('Should emit event when component is intersected', async () => {

  // })

  // it('Should emit event every time when component is intersected', async () => {

  // })

  // it('Should take eventName option defined by user', () => {

  // })

  // it('Should be possible to set custom root property', () => {

  // })

  // it('Should be possible to set custom rootMargin property', () => {

  // })

  // it('Should be possible to set custom threshold property', () => {

  // })
})
