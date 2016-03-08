import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    const { book } = this.props;

    if (book) {
      return (
        <div>
          { book.title }
        </div>
      )
    } else {
      return false
    }
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail)
