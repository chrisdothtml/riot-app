/**
 * @returns {array} notes
 */
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

export default function (notes, action) {
  let result = notes
  let handle

  switch (action.type) {
    case 'create-note':
      handle = createNote
      break
    case 'populate-notes':
      handle = populateNotes
      break
  }

  if (handle) {
    result = handle(notes, action)
  }

  return result
}
