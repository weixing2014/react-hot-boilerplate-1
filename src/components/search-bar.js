import React, {Component} from 'react'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    const {updateTerm} = this.props

    updateTerm(e.target.value)
  }

  render() {
    const {term} = this.props

    return (<input placeholder="Search notes…" value={term} onChange={this.handleInputChange}/>)
  }
}
