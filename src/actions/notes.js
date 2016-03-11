export function addNote(note) {
  return {
    type: 'ADD_NOTE',
    payload: note,
  }
}

export function deleteNote(noteId) {
  return {
    type: 'DELETE_NOTE',
    payload: noteId,
  }
}
