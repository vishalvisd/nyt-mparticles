import "@testing-library/jest-dom"

/* CRA alternative to avoid "The current testing environment is not configured to support act(…)" */
/* global globalThis */
Object.defineProperty(globalThis,"IS_REACT_ACT_ENVIRONMENT", {
  get() {
    if (typeof globalThis.self !== 'undefined') {
      // @ts-ignore
        return globalThis.self.IS_REACT_ACT_ENVIRONMENT
    }
  },
  set(value) {
    if (typeof globalThis.self !== 'undefined') {
      // @ts-ignore
        globalThis.self.IS_REACT_ACT_ENVIRONMENT = value
    }
  }
})

// @ts-ignore
globalThis.IS_REACT_ACT_ENVIRONMENT = true