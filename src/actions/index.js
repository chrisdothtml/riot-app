export function updateFolder (data = {}) {
  return {
    type: 'update-folder',
    folder: data.folder
  }
}
