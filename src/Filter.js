import React, { Component } from 'react';

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      setMax: 50,
      types: [],
      areas: []
    }
  }

  changeType = event => {
   ;let type = Object.keys(this.props.climb).reduce((acc, area) => {
      if(this.props.climb[area].milesFromDenver < event.target.value){
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
  }


  render() {
    return (
      <form className="filter-section"> 
        <h2>Pick Your Next Plan</h2>
        <p>distance from denver</p>
        <p>{this.state.setMax} miles away</p>
          <input className="range" type="range" onChange={this.changeType} min="1" max="400" ></input>
        
        <p>type</p>
        {
          this.state.types.map((type) => {
            return (
              <div>
                <input type="checkbox"/> {type}
              </div>
            )
          })
        }
        <p>areas</p>
        

        <input type="submit" value="submit"></input>
      </form>
    )
  }
}