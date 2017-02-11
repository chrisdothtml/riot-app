import { createSelector } from 'reselect'

export const notes = createSelector(
  state => state.notes,
  notes => ({ notes })
)

export const stateView = createSelector(
  state => state.view,
  ({ folder, note }) => ({
    selectedFolder: folder,
    selectedNote: note
  })
)
