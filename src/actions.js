export function createNote () {
  return {
    type: 'create-note'
  }
}

export function populateNotes (notes = []) {
  return {
    type: 'populate-notes',
    notes
  }
}

export function selectNote (id = 0) {
  return {
    type: 'select-note',
    id
  }
}

export function selectFolder (folder = '') {
  return {
    type: 'select-folder',
    folder
  }
}
