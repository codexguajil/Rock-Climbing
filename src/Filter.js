import React, { Component } from 'react';
import Hiker from "./assets/hiker.png"

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      setMax: 50,
      types: [],
      areas: [],
      areasPick: [],
      typesPick: []
    }
  }

  changeType = event => {
    let type = Object.keys(this.props.climb).reduce((acc, area) => {
      if(this.props.climb[area].milesFromDenver <= event.target.value){
        this.props.climb[area].typesOfClimbing.forEach((type) => {
          if(!acc.includes(type)){
            acc.push(type)
          }
        })
      }
      return acc;
    }, [])
    this.setState({
      setMax: event.target.value,
      types: type
    })
    this.changeArea()
  }

  changeArea = event => {
    debugger 
    let types = []
    document.querySelectorAll('input[name="types"]:checked').forEach((type) => {
      types.push(type.value)
    })
    let areas = Object.keys(this.props.climb).reduce((acc, area) => {
      if(this.props.climb[area].milesFromDenver <= this.state.setMax){
        types.forEach((type) => {
          if(this.props.climb[area].typesOfClimbing.includes(type) && !acc.includes(area)){
            acc.push(area)
          }
        })
      }
      return acc;
    }, [])
    this.setState({
      areas: areas,
      typesPick: types
    })
  }

  UpdateAreasPick = () => {
    let areas = []
    document.querySelectorAll('input[name="areas"]:checked').forEach((type) => {
      areas.push(type.value)
    })
    this.setState({
      areasPick: areas
    })
  }

  submitFilter = event => {
    event.preventDefault()
    console.log('submit button')
    this.props.updateFromFilter(this.state.areasPick, this.state.typesPick)
  }


  render() {
    return (
      <form onSubmit={this.submitFilter} className="filter-section"> 
        <h2>Pick Your Next Plan</h2>
        <h3>Distance From Denver</h3>
        <div className="filter-range-section">
          <p>{this.state.setMax} miles away</p>
          <img className="hiker-image" src={Hiker} alt="hiker"/> 
          <input className="range" type="range" onChange={this.changeType} min="1" max="400" ></input>
        </div>
        <h3>Type</h3>
        <div className="filter-type-section">
          {
            this.state.types.map((type) => {
              return (
                <label class="container">
                  <input className="types-checkbox" onChange={this.changeArea} name="types" type="checkbox" value={type}/>  
                  <span class="checkmark">{type}</span>
                </label>
              )
            })
          }
        </div>
        <h3>Areas</h3>
        <div className="filter-area-section">
          {
            this.state.areas.map((area) => {
              return (
                <label class="container">
                  <input onChange={this.UpdateAreasPick} name="areas" type="checkbox" value={area}/> 
                  <span class="checkmark">{area}</span>
                </label>
              )
            })
          }
        </div>
        <input class="filter-submit-button" type="submit" value="Climb"></input>
      </form>
    )
  }
}