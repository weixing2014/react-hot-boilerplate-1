import {
  combineReducers
} from 'redux'
import NotesReducer from './notes'
import QueryReducer from './query'

export default combineReducers({
  notes: NotesReducer,
  query: QueryReducer,
})
