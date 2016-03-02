import React, { Component } from 'react'
import BookList from './containers/book-list'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export default class App extends Component {
  render() {
    return (
      <BookList />
    );
  }
}
