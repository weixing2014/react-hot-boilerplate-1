import noteReducer from '../notes'
import { expect } from 'chai'

describe('NotesReducer', function () {
  it('has a default value', function () {
    expect(noteReducer(undefined, {})).to.be.eql([]);
  });

  it('adds a new note', function() {
    const notes = noteReducer(
      undefined,
      {
        type: 'ADD_NOTE',
        payload: 'new note',
      }
    )

    expect(notes).to.have.lengthOf(1)
    expect(notes[0].content).to.be.eql('new note')
    expect(notes[0].isEditing).to.be.eql(false)
    expect(notes[0].id).to.be.ok
  })

  it('deletes a note', function() {
    const notes = noteReducer(
      [
        {
          id: '1',
          isEditing: true,
          content: 'Hello, World!'
        }
      ],
      {
        type: 'DELETE_NOTE',
        payload: '1',
      }
    )

    expect(notes).to.have.lengthOf(0)
  })

  it('edits a note', function() {
    const notes = noteReducer(
      [
        {
          id: '1',
          isEditing: false,
          content: 'Hello, World!'
        }
      ],
      {
        type: 'EDIT_NOTE',
        payload: '1',
      }
    )

    expect(notes).to.have.lengthOf(1)
    expect(notes[0]).to.be.eql(
      {
        id: '1',
        isEditing: true,
        content: 'Hello, World!',
      }
    )
  })

  it('saves a note', function() {
    const notes = noteReducer(
      [
        {
          id: '1',
          isEditing: true,
          content: 'Hello, World!'
        }
      ],
      {
        type: 'SAVE_NOTE',
        payload: {
          noteId: '1',
          content: 'Hello',
        },
      }
    )

    expect(notes).to.have.lengthOf(1)
    expect(notes[0]).to.be.eql(
      {
        id: '1',
        isEditing: false,
        content: 'Hello',
      }
    )
  })

  it('updates a note', function() {
    const notes = noteReducer(
      [
        {
          id: '1',
          isEditing: true,
          content: 'Hello, World!'
        }
      ],
      {
        type: 'UPDATE_NOTE_CONTENT',
        payload: {
          noteId: '1',
          content: 'Hello',
        },
      }
    )

    expect(notes).to.have.lengthOf(1)
    expect(notes[0]).to.be.eql(
      {
        id: '1',
        isEditing: true,
        content: 'Hello',
      }
    )
  })

});
