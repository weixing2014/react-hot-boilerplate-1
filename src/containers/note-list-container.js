import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions/index'
import { bindActionCreators } from 'redux'

class NoteListContainer extends Component {
  renderList() {
    const { notes } = this.props

    return notes.map((note) => {
      return (
        <li key={ note.id }>
          { note.content }
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

function mapStateToProps(state) {
  return {
    notes: state.notes,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteNote,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteListContainer)
