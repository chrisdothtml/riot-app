/**
 * @returns {array} notes
 */
// TODO: this needs to also update state.view.note
function createNote (notes) {
  const note = {
    userId: 1,
    id: notes.length + 1,
    title: 'New note title',
    body: ''
  }

  return notes.concat([note])
}

/**
 * @returns {array} notes
 */
function populateNotes (notes, action) {
  return notes.concat(action.notes)
}

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
    const notes = reducer(state.notes, action)

    result = { ...state, notes }
  }

  return result
}
