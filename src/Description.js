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
      <li class="description-box"onClick={this.toggleDescription}>
        <h3>Area: {this.props.matchedType.name} </h3>
        
        { this.state.showDescription && 
        <div class="info-box">  
          <p> {this.props.matchedType.name}</p>
          <p>Route Grade: {this.props.matchedType.grade}</p>
          <p>Route Type: {this.props.matchedType.type}</p>
          <a class="link" href="{this.props.matchedType.link}">More information on {this.props.matchedType.name} </a>
        </div> 
      }
      </li>
    )
  }
}
