import { filterNotes } from '../../common/utils.js'

/**
 * Updates state.view.folder to the provided folder
 *
 * @returns {object} state
 */
export function _selectFolder (state, folder) {
  let { view } = state

  view = { ...view, folder }
  return { ...state, view }
}

/**
 * Updates state.view.note to the provided note id. If
 * `first` is provided, updated id will reflect first
 * note in current folder
 *
 * @returns {object} state
 */
export function _selectNote (state, id) {
  let { notes, view } = state

  // find first note id
  if (id === 'first') {
    notes = filterNotes(state)
    id = notes[0].id
  }

  view = { ...view, note: id }
  return { ...state, view }
}
