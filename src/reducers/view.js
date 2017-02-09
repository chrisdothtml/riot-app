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

export default function (view, action) {
  let result = view
  let handle

  switch (action.type) {
    case 'select-folder':
      handle = selectFolder
      break
    case 'select-note':
      handle = selectNote
      break
  }

  if (handle) {
    result = handle(view, action)
  }

  return result
}
