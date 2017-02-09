export default function (notes, action) {
  switch (action.type) {
    case 'populate-notes':
      return notes.concat(action.notes)
  }

  return notes
}
