import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addNote } from '../actions/index'


class SearchBarContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleInputChange(e) {
    this.setState({
      term: e.target.value,
    })
  }

  handleFormSubmit(e) {
    const { addNote } = this.props

    e.preventDefault()

    addNote(this.state.term)
    
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.state.term}
          onChange={this.handleInputChange.bind(this)}
          />
        <button type="submit" >Submit</button>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addNote }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBarContainer)
