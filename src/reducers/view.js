import { _selectFolder, _selectNote } from './_utils.js'

/**
 * @returns {object} state
 */
function selectFolder (state, action) {
  state = _selectFolder(state, action.folder)
  state = _selectNote(state, 'first')

  return state
}

/**
 * @returns {object} state
 */
function selectNote (state, action) {
  return _selectNote(state, action.id)
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
