import React, { Component } from 'react';
import Linkify from "react-linkify"

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
    let icon = ' + ';

    if(this.state.showDescription) {
      icon = ' - ';
    }

    return (
      <li class="description-box"onClick={this.toggleDescription}>
        <h4 class="info">Route Name: {this.props.matchedType.name}</h4>
        <p class=" info toggle">{icon}</p>
        { this.state.showDescription && 
        <div class="info-box">  
          <p>Route Grade: {this.props.matchedType.grade}</p>
          <p>Route Type: {this.props.matchedType.type.join(" - ")}</p>
          <Linkify class="link" properties={{target: "_blank", style: {color: "#fff"}}}>
          {this.props.matchedType.link}
          </Linkify>
        </div> 
      }
      </li>
    )
  }
}
