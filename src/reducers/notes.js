export default function (notes, action) {
  switch (action.type) {
    case 'add-notes':
      return notes.concat(action.notes)
  }

  return notes
}
