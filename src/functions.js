/* globals window, IntersectionObserver */

export function initIntersectionObserver(el, options) {
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
        handleIntersection(entries, isIntersectionsDisabled)
      })
    }
    else {
      handleIntersection(entries, isIntersectionsDisabled)
    }
  }, sourceOfTruth)

  // There we have pointer to our observable element
  observer.observe(el)
}

function handleIntersection(entries, isIntersectionsDisabled) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('this is showed', entry) //eslint-disable-line
      // logic to showed/visible component and remove intersection
      if (isIntersectionsDisabled) {
        disableIntersection()
      }
    }
  })
}

function disableIntersection() {
  console.log('disablingIntersections') // eslint-disable-line
  // Logic with deleting intersection observer when showed element
}
