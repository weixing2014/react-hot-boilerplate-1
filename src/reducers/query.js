import uuid from 'node-uuid'

export default function(state = '', action) {
  switch(action.type) {
    case 'QUERY_UPDATED':
      return action.payload

    default:
      return state
  }
}
