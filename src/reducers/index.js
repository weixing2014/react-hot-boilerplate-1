import { combineReducers } from 'redux'
import BooksReducer from './books'
import ActiveBookReducer from './active-book'

export default combineReducers({
  activeBook: ActiveBookReducer,
  books: BooksReducer,
})
