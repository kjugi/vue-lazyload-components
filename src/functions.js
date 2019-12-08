/* globals window, IntersectionObserver */

export function initIntersectionObserver(Vue, options) {
  const optionKeys = Object.keys(options)
  let sourceOfTruth = {
    // null observes whole document's viewport
    root: null,
    margin: '0px',
    // TODO: add support for threshold advanced list
    threshold: 1.0
  }
  let isIntersectionsDisabled = (optionKeys.find(item => item === 'disableIntersection'))
    ? options.disableIntersection
    : true

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
          observer
        )
      })
    }
    else {
      handleIntersection(
        Vue,
        entries,
        isIntersectionsDisabled,
        observer
      )
    }
  }, sourceOfTruth)

  // There we have pointer to our observable element
  observer.observe(Vue.$el)
}

function handleIntersection(Vue, entries, isDisable, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!Vue.isLoaded) {
        Vue.isLoaded = true
      }

      if (isDisable) {
        observer.unobserve(Vue.$el)
      }
    }
  })
}
