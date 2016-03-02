import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    const { books } = this.props;

    return (
      books.map((book) => {
        return (
          <li key={book.title}>{book.title}</li>
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

function mapStateToProps(state) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps)(BookList)
