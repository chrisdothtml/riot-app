/*
 * Notes
 */
export function createNote () {
  return {
    type: 'create-note'
  }
}

export function deleteNote (id) {
  return {
    type: 'delete-note',
    id
  }
}

export function populateNotes (notes = []) {
  return {
    type: 'populate-notes',
    notes
  }
}

export function restoreNote (id) {
  return {
    type: 'restore-note',
    id
  }
}

/*
 * View
 */
export function selectFolder (folder = '') {
  return {
    type: 'select-folder',
    folder
  }
}

export function selectNote (id = 0) {
  return {
    type: 'select-note',
    id
  }
}
