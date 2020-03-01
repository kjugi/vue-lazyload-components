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
    const wrapper = mount(VueLazyComponent)

    expect(wrapper.isVueInstance()).toBe(true)
    expect(wrapper.html()).toBe(`<section><span>
        Loading...
      </span></section>`)
  })

  it('Should mount component with custom template', () => {
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

    expect(wrapper.html()).toBe(`<div>
  <section><span>
        Loading...
      </span></section>
</div>`)
  })

  it('Should change main tag of component when pass option', () => {
    const wrapper = mount(VueLazyComponent, {
      propsData: {
        mainTag: 'div'
      }
    })

    expect(wrapper.props().mainTag).toBeDefined()
    expect(wrapper.props().mainTag).toBe('div')

    expect(wrapper.html()).toBe(`<div><span>
        Loading...
      </span></div>`)
  })

  it('Content should be visible on render', () => {
    const wrapper = mount(VueLazyComponent, {
      propsData: {
        isLoaded: true
      },
      slots: {
        default: '<span>Testing slot content</span>'
      }
    })

    expect(wrapper.props().isLoaded).toBeDefined()
    expect(wrapper.props().isLoaded).toBe(true)

    expect(wrapper.html()).toBe(`<section><span>Testing slot content</span></section>`)
    expect(wrapper.text()).toBe('Testing slot content')
  })

  it('Should emit event when component is intersected', () => {
    const wrapper = mount(VueLazyComponent)

    wrapper.vm.$emit('custom-lazy-component', 1)
    expect(wrapper.emitted('custom-lazy-component')).toBeDefined()
    expect(wrapper.emitted('custom-lazy-component')[0][0]).toBe(1)
  })

  it('Should take eventName option defined by user', () => {
    const wrapper = mount(VueLazyComponent, {
      propsData: {
        eventName: 'our-event'
      }
    })

    wrapper.vm.$emit('our-event', 1)
    expect(wrapper.emitted('our-event')).toBeDefined()
    expect(wrapper.emitted('our-event')[0][0]).toBe(1)
  })

  it('Should be possible to set custom options', () => {
    const wrapper = mount(VueLazyComponent, {
      propsData: {
        options: {
          root: true,
          rootMargin: '10px',
          threshold: 0.5
        }
      }
    })

    expect(wrapper.props().options).toBeDefined()
    expect(wrapper.props().options.root).toBe(true)
    expect(wrapper.props().options.rootMargin).toBe('10px')
    expect(wrapper.props().options.threshold).toBe(0.5)
  })
})
