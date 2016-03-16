import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote, editNote, saveNote, updateNoteContent } from '../actions/notes'
import { bindActionCreators } from 'redux'
import NoteList from '../components/note-list'

class NoteListContainer extends Component {
  render() {
    return (
      <NoteList {...this.props} />
    )
  }
}

function mapStateToProps(state) {
  return {
    notes: state.query ?
           state.notes.filter(
             note => note.content.indexOf(state.query) > -1
           )
           : state.notes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteNote,
    editNote,
    saveNote,
    updateNoteContent,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer)
