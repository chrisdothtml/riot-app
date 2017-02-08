/* global riot */

import * as actions from './actions.js'
import initialStore from './initial-store.json'
import { includes } from 'lodash'

/**
 * Triggers a state action with the provided data
 *
 * @returns {boolean} success
 */
function publish (action, data = {}) {
  if (typeof action === 'string') {
    const actionNames = Object.keys(actions)

    if (includes(actionNames, action)) {
      actions[action].call(this, data)
      return true
    }
  }

  console.error('invalid action', action)
  return false
}

riot.mixin('state', {
  init () {
    this.store = initialStore
    this.publish = publish.bind(this)
  }
})
