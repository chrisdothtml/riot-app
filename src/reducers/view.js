import { filterNotes } from '../common/utils.js'

/**
 * @returns {object} state
 */
function selectFolder (state, action) {
  let { view } = state
  let notes

  // update selected folder
  view = { ...view, folder: action.folder }
  state = { ...state, view }

  // update selected note
  notes = filterNotes(state)
  view = { ...view, note: notes[0].id }

  return { ...state, view }
}

/**
 * @returns {object} state
 */
function selectNote (state, action) {
  let { view } = state

  view = { ...view, note: action.id }
  return { ...state, view }
}

/**
 * @returns {object} state
 */
export default function (state, action) {
  let result = state
  let reducer

  switch (action.type) {
    case 'select-folder':
      reducer = selectFolder
      break
    case 'select-note':
      reducer = selectNote
      break
  }

  if (reducer) {
    result = reducer(state, action)
  }

  return result
}
