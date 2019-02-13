import React, { Component } from 'react';

export default class Description extends Component {
  constructor() {
    super();
  }

  //toggle display description here

  render() {
    console.log(this.props.distance)
    return (
      <div>
        <p>Hello</p>
      </div>
    )
  }
}