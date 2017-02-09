import config from '../config.json'
import importAll from '../common/import-all.js'

const reducers = importAll(require.context('./reducers'))
const defaultState = {
  notes: [],
  view: {
    note: 0,
    folder: config.folders[0]
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'add-notes':
      return {
        ...state,
        notes: reducers.notes(state.notes, action)
      }
    case 'select-note':
    case 'update-folder':
      return {
        ...state,
        view: reducers.view(state.view, action)
      }
  }

  return state
}
