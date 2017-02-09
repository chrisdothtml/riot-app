/**
 * @returns {object} view
 */
function selectFolder (view, action) {
  return { ...view, folder: action.folder }
}

/**
 * @returns {object} view
 */
function selectNote (view, action) {
  return { ...view, note: action.id }
}

export default function (state, action) {
  let result = state
  let reducer

  switch (action.type) {
    case 'select-folder':
      reducer = selectFolder
      break
    case 'select-note':
      reducer = selectNote
      break
  }

  if (reducer) {
    let view = reducer(state.view, action)

    result = { ...state, view }
  }

  return result
}
