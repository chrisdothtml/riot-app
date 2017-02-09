export function addNotes (notes = []) {
  return {
    type: 'add-notes',
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
