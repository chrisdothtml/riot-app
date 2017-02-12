import { _selectFolder, _selectNote } from './_utils.js'
import { getNoteIndex } from '../../common/utils.js'

/**
 * @returns {objext} state
 */
function createNote (state) {
  let { notes } = state
  const id = notes.length + 1
  const note = {
    userId: 1,
    id,
    title: 'New note title',
    body: '',
    deleted: false
  }

  // add note
  notes = [note].concat(notes)
  state = { ...state, notes }

  state = _selectNote(state, id)
  return state
}

/**
 * @returns {objext} state
 */
function deleteNote (state, action) {
  const { notes } = state
  const noteIndex = getNoteIndex(state, action.id)

  if (noteIndex > -1) {
    // mark note as deleted
    notes[noteIndex].deleted = true
    state = { ...state, notes }

    // select first note
    state = _selectNote(state, 'first')
  }

  return state
}

/**
 * @returns {objext} state
 */
function populateNotes (state, action) {
  let { notes } = state

  // add notes
  notes = notes.concat(action.notes)
  state = { ...state, notes }

  state = _selectNote(state, 'first')
  return state
}

/**
 * @returns {objext} state
 */
function restoreNote (state, action) {
  const { notes } = state
  const noteIndex = getNoteIndex(state, action.id)

  if (noteIndex > -1) {
    let { id } = notes[noteIndex]

    // mark note as not deleted
    notes[noteIndex].deleted = false
    state = { ...state, notes }

    state = _selectFolder(state, 'Active')
    state = _selectNote(state, id)
  }

  return state
}

/**
 * @returns {object} state
 */
export default function (state, action) {
  let result = state
  let reducer

  switch (action.type) {
    case 'create-note':
      reducer = createNote
      break
    case 'delete-note':
      reducer = deleteNote
      break
    case 'populate-notes':
      reducer = populateNotes
      break
    case 'restore-note':
      reducer = restoreNote
      break
  }

  if (reducer) {
    result = reducer(state, action)
  }

  return result
}
