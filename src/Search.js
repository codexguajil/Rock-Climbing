import React, { Component } from 'react';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
  }

  updatingSearch = (e) => {
    console.log(e.target.value)
    this.setState({value:(e.target.value)})
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.props.search(this.state.value)
  }

  render() {
    return (
      <form>
      <input id="search-input"
             type="text"
             value={this.state.name}
             onChange={this.updatingSearch}
      />
      <button className="search-submit" onClick={this.submitSearch}>SEARCH</button>
      </form>
    )
  }

}

//set search to each key:value
//search trail or area
//name, grade, type, general areas
//if typeof is number or string, fuzzy search/autocomplete
//where to update search display???