import { createSelector } from 'reselect'

export const stateView = createSelector(
  state => state.view,
  ({ folder, note }) => ({
    selectedFolder: folder,
    selectedNote: note
  })
)
