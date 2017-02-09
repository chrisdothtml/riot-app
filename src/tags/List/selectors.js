import { createSelector } from 'reselect'

export const notes = createSelector(
  state => state.notes,
  notes => ({ notes })
)

export const selectedNote = createSelector(
  state => state.view.note,
  note => ({ selectedNote: note })
)
