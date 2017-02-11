/**
 * Filters notes based on currently selected folder
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
 * Finds note with provided id
 *
 * @returns {object|undefined}
 */
export function findNote (state, id) {
  const { notes } = state
  let result

  for (let i = 0; i < notes.length; i++) {
    let note = notes[i]

    if (note.id === id) {
      result = note
      break
    }
  }

  return result
}
