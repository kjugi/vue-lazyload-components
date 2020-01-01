/* globals window, IntersectionObserver */

const config = {
  intersectionOptions: {
    root: null,
    rootMargin: '0px',
    // TODO: add support for threshold advanced list
    threshold: 1.0
  },
  disableIntersection: true,
  eventName: 'custom-lazy-component'
}

export function initIntersectionObserver(Vue, options) {
  setConfig(options)

  const observer = new IntersectionObserver(entries => {
    // Allow observing only when not blocking main thread if available in browser
    // https://caniuse.com/#search=requestIdleCallback
    if (window && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        handleIntersection(
          Vue,
          entries,
          observer
        )
      })
    }
    else {
      handleIntersection(
        Vue,
        entries,
        observer
      )
    }
  }, config.intersectionOptions)

  // There we have pointer to our observable element
  observer.observe(Vue.$el)

  return observer
}

function setConfig(options) {
  Object.keys(options).forEach(option => {
    switch (option) {
      case 'intersectionOptions':
        // Merging custom variables with default
        Object.assign(
          config.intersectionOptions,
          options.intersectionOptions
        )
      break
      case 'disableIntersection':
        config.disableIntersection = options.disableIntersection
      break
      case 'eventName':
        config.eventName = options.eventName
      break
    }
  })
}

function handleIntersection(Vue, entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      Vue.$emit(config.eventName)

      if (!Vue.isLoadedData) {
        Vue.isLoadedData = true
      }

      if (config.disableIntersection) {
        observer.unobserve(Vue.$el)
      }
    }
  })
}
