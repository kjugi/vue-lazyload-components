/* globals window, IntersectionObserver */

export function intersectionObserverInit(el, options) {
  // TODO: add support for threshold advanced list
  let sourceOfTruth = {
    // null observes whole document's viewport
    root: null,
    margin: '0px',
    threshold: 1.0
  }
  // Merging custom variables with default
  sourceOfTruth = Object.assign(sourceOfTruth, options)

  const observer = new IntersectionObserver(entries => {
    // Allow observing only when not blocking main thread if available in browser
    // https://caniuse.com/#search=requestIdleCallback
    if (window && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        handleIntersection(entries)
      })
    }
    else {
      handleIntersection(entries)
    }
  }, sourceOfTruth)

  // There we have pointer to our real observable element
  observer.observe(el)
}

function handleIntersection(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('this is showed') //eslint-disable-line
      // logic to showed/visible component
    }
  })
}
