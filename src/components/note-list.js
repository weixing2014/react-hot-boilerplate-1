import React, { Component } from 'react'
import Note from './note'

export default class NoteList extends Component {
  renderList() {
    const { notes, deleteNote, editNote, saveNote, updateNoteContent } = this.props

    return notes.map((note) => {
      return (
        <li key={ note.id }>
          <Note id={ note.id }
            isEditing={ note.isEditing }
            content={ note.content }
            onDeleteNote={ deleteNote }
            onEditNote={ editNote }
            onSaveNote={ saveNote }
            onUpdateNoteContent= { updateNoteContent }
            />
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
