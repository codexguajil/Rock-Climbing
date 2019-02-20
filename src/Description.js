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
    let icon = ' + ';

    if(this.state.showDescription) {
      icon = ' - ';
    }

    return (
      <li class="description-box"onClick={this.toggleDescription}>
        <h3 class="info">Area: Estes Park Valley </h3> 
        <h4 class="info">Route Name: {this.props.matchedType.name}</h4>
        <p class=" info toggle">{icon}</p>
        { this.state.showDescription && 
        <div class="info-box">  
          <p>Route Grade: {this.props.matchedType.grade}</p>
          <p>Route Type: {this.props.matchedType.type}</p>
          
          <a class="link" href="{this.props.matchedType.link}">click here for more information on {this.props.matchedType.name} </a>
        </div> 
      }
      </li>
    )
  }
}
