import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    const { books, handleSelectBook } = this.props;

    return (
      books.map((book) => {
        return (
          <li
            key={book.title}
            onClick={()=> {
              handleSelectBook(book)
            }}
            >
            {book.title}
          </li>
        )
      })
    )
  }

  render() {
    return (
      <ul>
        { this.renderList() }
      </ul>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ handleSelectBook: selectBook }, dispatch)
}

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
