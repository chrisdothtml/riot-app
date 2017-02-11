/**
 * Filters the notes based on the currently selected folder
 *
 * @returns {array}
 */
export function filterNotes (state) {
  const { notes, view } = state

  return notes.filter(note => {
    const viewingDeleted = view.folder === 'Deleted'
    const shouldShow = note.deleted === viewingDeleted

    return shouldShow
  })
}

/**
 * Finds a note in the provided state by the provided id
 *
 * @returns {object}
 */
export function getNote (state, id) {
  const notes = state.notes
  let result = {}

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i]

    if (note.id === id) {
      result = note
      break
    }
  }

  return result
}
