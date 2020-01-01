import { mount } from '@vue/test-utils'
import VueLazyComponent from '@/MainComponent.vue'

describe('Testing base functions', () => {
  beforeEach((() => {
    global.IntersectionObserver = class IntersectionObserver {
      constructor(status, options) {
        this.status = status
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
    expect(mount(VueLazyComponent).isVueInstance()).toBeTruthy()
  })

  it('Should mount component in new Vue instance and have default loading content', () => {
    const wrapper = mount({
      components: {
        VueLazyComponent
      },
      template: `
        <div>
          <vue-lazy-component></vue-lazy-component>
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

  it('Should change main tag of component when pass option', () => {
    const wrapper = mount({
      components: {
        VueLazyComponent
      },
      template: `
        <div>
          <vue-lazy-component main-tag="div"></vue-lazy-component>
        </div>
      `
    })

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.html()).toBe(`<div>
  <div><span>
        Loading...
      </span></div>
</div>`)
  })

  it('Content should be visible on render', async () => {
    const wrapper = mount({
      components: {
        VueLazyComponent
      },
      template: `
        <div>
          <vue-lazy-component :is-loaded="true">Testing slot content</vue-lazy-component>
        </div>
      `
    })

    expect(wrapper.vm._vnode.children[0].componentInstance.observer.observables.length).toBe(1)

    expect(wrapper.vm.$el.outerHTML).toBe(`<div><section>Testing slot content</section></div>`)
    expect(wrapper.vm.$el.textContent).toBe('Testing slot content')
  })

  it('Should emit event when component is intersected', async () => {
    const intersect = jest.fn()
    const wrapper = mount({
      components: {
        VueLazyComponent
      },
      template: `
        <div>
          <vue-lazy-component
            :is-loaded="true"
            v-on:custom-lazy-component="eventCatcher"
          >
            Testing slot content
          </vue-lazy-component>
        </div>
      `,
      methods: {
        eventCatcher: intersect
      }
    })

    wrapper.vm._vnode.children[0].componentInstance.observer.status([{
      isIntersecting: true
    }])

    expect(intersect).toHaveBeenCalledTimes(1)
  })

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
