import React, { Component } from 'react'

export default class SearchBarContainer extends Component {
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
    e.preventDefault()
    
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
