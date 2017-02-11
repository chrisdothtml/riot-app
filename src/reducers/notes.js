/**
 * @returns {objext} state
 */
function createNote (state) {
  let { notes, view } = state
  const id = notes.length + 1
  const note = {
    userId: 1,
    id,
    title: 'New note title',
    body: '',
    deleted: false
  }

  notes = [note].concat(notes)
  view = { ...view, note: id }
  return { ...state, notes, view }
}

/**
 * @returns {objext} state
 */
function populateNotes (state, action) {
  let { notes, view } = state

  notes = notes.concat(action.notes)
  view = { ...view, note: notes[0].id }
  return { ...state, notes, view }
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
