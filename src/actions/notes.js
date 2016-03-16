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

export function editNote(noteId) {
  return {
    type: 'EDIT_NOTE',
    payload: noteId,
  }
}

export function saveNote({ noteId, content }) {
  return {
    type: 'SAVE_NOTE',
    payload: {
      noteId,
      content,
    },
  }
}
