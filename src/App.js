import React, { Component } from 'react'
import NoteListContainer from './containers/note-list-container.js'
import SearchBarContainer from './containers/search-bar-container'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBarContainer />
        <NoteListContainer />
      </div>
    );
  }
}
