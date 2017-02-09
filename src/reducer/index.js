import config from '../config.json'

const defaultState = {
  view: {
    note: 0,
    folder: config.folders[0]
  }
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'update-folder':
      return { ...state, view: { folder: action.folder } }
  }

  return state
}
