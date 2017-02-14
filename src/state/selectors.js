import { createSelector } from 'reselect'

/*
 * state.notes
 */
export const notes = createSelector(
  state => state.notes,
  notes => ({ notes })
)

/*
 * state.view
 */
export const view = createSelector(
  state => state.view,
  view => ({ view })
)

export const view_folder = createSelector(
  state => state.view.folder,
  folder => ({ view: { folder } })
)

export const view_note = createSelector(
  state => state.view.note,
  note => ({ view: { note } })
)
