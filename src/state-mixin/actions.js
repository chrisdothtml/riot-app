import { includes } from 'lodash'

/**
 * Changes the currently selected folder
 */
export function selectFolder (data) {
  const folder = data.folder

  if (typeof name === 'string' && includes(this.store.folders, folder)) {
    this.store.selectedFolder = folder
  }
}

/**
 * Changes the currently selected note
 */
export function selectNote (data) {
  if (typeof data.id === 'number') {
    this.store.selectedNote = data.id
  }
}

/**
 * Adds a new note
 */
export function addNote () {
  this.store.notes.push({
    id: 1,
    title: '',
    body: ''
  })
}
