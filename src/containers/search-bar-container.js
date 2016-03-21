import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateQuery} from '../actions/query'
import SearchBar from '../components/search-bar'

class SearchBarContainer extends Component {
  render() {
    return (<SearchBar {...this.props}/>)
  }
}

function mapStateToProps(state) {
  return {term: state.query}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateTerm: updateQuery
  }, dispatch,)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer)
