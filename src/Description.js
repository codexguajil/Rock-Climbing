import React, { Component } from 'react';

export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      showDescription: false

    }
  }
  

  toggleDescription = () =>  {
    this.setState({showDescription: !this.state.showDescription })
  }

  render() {

    return (
      <li onClick={this.toggleDescription}>
        <p> {this.props.matchedType.name} </p>
        
        { this.state.showDescription && 
        <div>  
        <p>{this.props.matchedType.grade}</p>
        <p> {this.props.matchedType.type}</p>
        <p> {this.props.matchedType.link}</p>
        </div> 
      }
      </li>
    )
  }
}
