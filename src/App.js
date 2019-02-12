import React, { Component } from 'react';
import canyon from './assets/boulderCanyon.jpg';
import './App.css';
import Header from './Header';

export default class App extends Component {
  constructor() {
    super();
  }

  //methods go here
  

  render() {
    return (
      <div className="App">
          <Header />
          <img src={canyon} className="App-logo" alt="boulder canyon" />
          
      </div>
    );
  }
}
