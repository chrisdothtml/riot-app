import { _selectFolder, _selectNote } from './_utils.js'

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

  // select new note
  state = _selectNote(state, id)

  return state
}

/**
 * @returns {objext} state
 */
function populateNotes (state, action) {
  let { notes, view } = state

  // add notes
  notes = notes.concat(action.notes)
  state = { ...state, notes }

  // select first note
  state = _selectNote(state, 'first')

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
    case 'populate-notes':
      reducer = populateNotes
      break
  }

  if (reducer) {
    result = reducer(state, action)
  }

  return result
}
