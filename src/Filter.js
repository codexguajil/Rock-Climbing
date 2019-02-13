import React, { Component } from 'react';
import Type from "./Type"
import Routes from "./Routes"

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      setMin: 200,
      setMax: 200,
      areas: []
    }
  }

  changeMin = event => {
    this.setState({
      setMin: event.target.value
    })
  }
  
  changeMax = event => {
    this.setState({
      setMax: event.target.value
    })
  }

  render() {
    return (
      <form className="filter-section"> 
        <h2>Pick Your Next Plan</h2>
        <p>distance from denver</p>
        <p> {this.state.setMin} mile - {this.state.setMax} mile</p>
        <div className="range-section">
          <input className="range-min" type="range" onChange={this.changeMin} min="1" max="400" ></input>
          <input className="range-max" type="range" onChange={this.changeMax} min="1" max="400" ></input>
        </div>
        <p>type</p>
        <Type />
        <p>areas</p>
        <Routes />
        <input type="submit"></input>
      </form>
    )
  }
}