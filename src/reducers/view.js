import { _viewFolder, _viewNote } from './_utils.js'

/**
 * @returns {object} state
 */
function selectFolder (state, action) {
  let notes

  // update folder
  state = _viewFolder(state, action.folder)
  // select first note
  state = _viewNote(state, 'first')

  return state
}

/**
 * @returns {object} state
 */
function selectNote (state, action) {
  return _viewNote(state, action.id)
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
