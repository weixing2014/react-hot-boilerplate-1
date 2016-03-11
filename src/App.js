import React, { Component } from 'react'
import NoteListContainer from './containers/note-list-container'
import NoteInputContainer from './containers/note-input-container'
import SearchBarContainer from './containers/search-bar-container'

export default class App extends Component {
  render() {
    return (
      <div>
        <NoteInputContainer />
        <NoteListContainer />
        <SearchBarContainer />
      </div>
    );
  }
}
