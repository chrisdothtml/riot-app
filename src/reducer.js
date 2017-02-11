import config from './config.json'
import importAll from './common/import-all.js'

const reducers = importAll(require.context('./reducers'))
const defaultState = {
  notes: [],
  view: {
    note: 0,
    folder: config.folders[0]
  }
}

export default function (state = defaultState, action) {
  let result = state
  let reducer

  switch (action.type) {
    case 'create-note':
    case 'delete-note':
    case 'populate-notes':
    case 'restore-note':
      reducer = 'notes'
      break
    case 'select-folder':
    case 'select-note':
      reducer = 'view'
      break
  }

  if (reducer) {
    result = reducers[reducer](state, action)
  }

  return result
}
