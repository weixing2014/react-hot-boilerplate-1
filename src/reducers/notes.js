import uuid from 'node-uuid'

export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: uuid.v4(),
          content: action.payload,
        }
      ]

    case 'DELETE_NOTE':
      const index = state.findIndex((note) => note.id === action.payload)
      return index > -1 ? state.filter((_, i) => i !== index) : state

    default:
      return state
  }
}
