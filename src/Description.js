import React, { Component } from 'react';

export default class Description extends Component {
  constructor() {
    super();
    // create state to toggle show no-show
    this.state = {
        showClimb: false
      }
    // bind it to 'this' component 
    // this.toggleClimb = this.toggleClimb.bind(this);
  };

  // method to toggle climb
  toggleClimb() {
    this.setState({
      showClimb: !this.state.showClimb
    })
  };

// render to page 
  render() {
    // let icon = ' + ';

    // if(this.state.showClimb) {
    //   icon = ' - ';
    // }
// return these props 
    return (
      <div>
        // Climb Name:
        // Type:
        // Grade:
        // Location:
        // Distance:
        // Link:
      </div>    
    );
  }
}
