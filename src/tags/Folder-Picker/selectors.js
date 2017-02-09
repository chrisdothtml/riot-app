import { createSelector } from 'reselect'

export const selectedFolder = createSelector(
  state => state.view.folder,
  folder => ({ selectedFolder: folder })
)
