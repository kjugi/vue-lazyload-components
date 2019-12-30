/* globals window, IntersectionObserver */

export function initIntersectionObserver(Vue, options) {
  const optionKeys = Object.keys(options)
  // TODO: rebuild how to manage with options
  let sourceOfTruth = {
    // null observes whole document's viewport
    root: null,
    rootMargin: '0px',
    // TODO: add support for threshold advanced list
    threshold: 1.0
  }
  let isIntersectionsDisabled = (optionKeys.find(item => item === 'disableIntersection'))
    ? options.disableIntersection
    : true
  const eventName = (optionKeys.find(item => item === 'eventName'))
  ? options.eventName
  : 'custom-lazy-component'

  // Merging custom variables with default
  sourceOfTruth = Object.assign(
    sourceOfTruth,
    // TODO: Check for non supported keys
    (optionKeys.find(item => item === 'intersectionOptions'))
      ? options.intersectionOptions
      : {}
  )

  const observer = new IntersectionObserver(entries => {
    // Allow observing only when not blocking main thread if available in browser
    // https://caniuse.com/#search=requestIdleCallback
    if (window && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        handleIntersection(
          Vue,
          entries,
          isIntersectionsDisabled,
          eventName,
          observer
        )
      })
    }
    else {
      handleIntersection(
        Vue,
        entries,
        isIntersectionsDisabled,
        eventName,
        observer
      )
    }
  }, sourceOfTruth)

  // There we have pointer to our observable element
  observer.observe(Vue.$el)
}

function handleIntersection(Vue, entries, isDisable, event, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // TODO: Add support to (update:variable, value) syntax
      Vue.$emit(event)

      if (!Vue.isLoadedData) {
        Vue.isLoadedData = true
      }

      if (isDisable) {
        observer.unobserve(Vue.$el)
      }
    }
  })
}
