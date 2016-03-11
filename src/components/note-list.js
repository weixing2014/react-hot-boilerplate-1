import React, { Component } from 'react'

export default class NoteList extends Component {
  renderList() {
    const { notes, deleteNote } = this.props

    return notes.map((note) => {
      return (
        <li key={ note.id }>
          { note.content }
          <span onClick={ deleteNote.bind(this, note.id) }>
            x
          </span>
        </li>
      )
    })
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}
