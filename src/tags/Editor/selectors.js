import { createSelector } from 'reselect'

export const selectedNote = createSelector(
  state => state.view.note,
  selectedNote => ({ selectedNote })
)
