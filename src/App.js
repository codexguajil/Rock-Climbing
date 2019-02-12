import React, { Component } from 'react';
import canyon from './assets/boulderCanyon.jpg';
import Header from './Header';
import Filter from './Filter';
import ListContainer from './ListContainer';
import './Master.scss';

export default class App extends Component {
  constructor() {
    super();
  }

  //methods go here
  //learn fetch/catch

  render() {
    return (
      <div className="App">
          <Header />
          <Filter />
          <ListContainer />
      </div>
    );
  }
}
