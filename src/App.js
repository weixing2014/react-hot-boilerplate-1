import React, { Component } from 'react'
import BookList from './containers/book-list'
import BookDetail from './containers/book-detail'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import SearchBarContainer from './containers/search-bar-container'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
