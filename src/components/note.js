import React, {Component} from 'react'

export default class Note extends Component {
  renderEditingNote() {
    const {id, content, onSaveNote} = this.props

    return (
      <div id={id}>
        <input value={content} onChange={(e) => {
          onUpdateNoteContent.call(this, {
            noteId: id,
            content: e.target.value
          })
        }} onBlur={(e) => {
          onSaveNote.call(this, {
            noteId: id,
            content: e.target.value
          })
        }} onKeyDown={(e) => {
          if (e.keyCode == 13)
            onSaveNote.call(this, {
              noteId: id,
              content: e.target.value
            })
        }}/>
      </div>
    )
  }

  renderPlainNote() {
    const {content, onDeleteNote, onEditNote, id} = this.props

    return (
      <div>
        <span onClick={onEditNote.bind(this, id)}>{content}</span>
        <span onClick={onDeleteNote.bind(this, id)}>X</span>
      </div>
    )
  }

  render() {
    const {isEditing} = this.props

    return (isEditing
      ? this.renderEditingNote()
      : this.renderPlainNote())
  }
}
