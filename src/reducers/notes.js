import uuid from 'node-uuid'

export default function(state = [], action) {
  switch(action.type) {
    case 'NOTE_ADDED':
      return [
        ...state,
        {
          id: uuid.v4(),
          content: action.payload,
        }
      ]
    case 'NOTE_DELETED':
      const index = state.findIndex((note) => note.id === action.payload)
      return index > -1 ? state.splice(index, 1) : state
    default:
      return state
  }
}
