import uuid from 'node-uuid'

function findIndex(state = [], noteId) {
  return state.findIndex((note) => note.id === noteId)
}

export default function(state = [], action) {
  let index = -1,
    newState = []

  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state, {
          id: uuid.v4(),
          isEditing: false,
          content: action.payload,
        }
      ]

    case 'DELETE_NOTE':
      index = findIndex(state, action.payload)
      return index > -1 ? state.filter((_, i) => i !== index) : state

    case 'EDIT_NOTE':
      index = findIndex(state, action.payload)
      if (index === -1) return state

      newState = state.slice(0)
      newState[index].isEditing = true
      return newState

    case 'SAVE_NOTE':
      index = findIndex(state, action.payload.noteId)
      if (index === -1) return state

      newState = state.slice(0)
      newState[index].isEditing = false
      newState[index].content = action.payload.content
      return newState

    case 'UPDATE_NOTE_CONTENT':
      index = findIndex(state, action.payload.noteId)
      if (index === -1) return state

      newState = state.slice(0)
      newState[index].content = action.payload.content
      return newState

    default:
      return state
  }
}
