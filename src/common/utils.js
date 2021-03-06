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

/**
 * Gets note index with provided id
 *
 * @returns {number} index or -1
 */
export function getNoteIndex (state, id) {
  const { notes } = state

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return i
    }
  }

  return -1
}
