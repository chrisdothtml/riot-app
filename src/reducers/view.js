export default function (view, action) {
  switch (action.type) {
    case 'select-note':
      return { ...view, note: action.id }
    case 'select-folder':
      return { ...view, folder: action.folder }
  }

  return view
}
