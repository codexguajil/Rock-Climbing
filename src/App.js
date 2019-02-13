import React, { Component } from 'react';
import canyon from './assets/boulderCanyon.jpg';
import Header from './Header';
import Filter from './Filter';
import ListContainer from './ListContainer';
import { coloradoClimbingAreas, distanceFromDenverGroupings } from './data';
import './Master.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: coloradoClimbingAreas,
      distances: distanceFromDenverGroupings,
      filterAreas: [],
      filterTypes: []
    }
  }

  updateFromFilter = (areas, types) => {
    this.setState({
      filterAreas: areas,
      filterTypes: types
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Filter climb={this.state.areas}
                  updateFromFilter={this.updateFromFilter}/>
          <ListContainer distances={this.state.distances}/>
      </div>
    );
  }
}
