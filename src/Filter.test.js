import React from 'react';
import Filter from './Filter';
import { shallow } from 'enzyme';

describe('Filter', () => {

  let wrapper;


  const mockFilterAreas = ["Canon City", "Boulder Canyon"];

  const mockFilterTypes = ["toprope"];

  const mockColoradoClimbingAreas = {
    "Canon City": {
        "milesFromDenver": 119,
        "id": 34,
        "typesOfClimbing": ["trad", "sport", "toprope", "boulder"],
        "classicRoutes": [
            {
                "name": "Enterprise",
                "id": 35,
                "grade": "5.09+",
                "type": ["sport"],
                "link": "https://www.mountainproject.com/route/105824687/enterprise"
            },
            {
                "name": "Trick-or-Treat",
                "id": 42,
                "grade": "5.11a/b",
                "type": ["toprope"],
                "link": "https://www.mountainproject.com/route/105759012/trick-or-treat"
            }
        ]
    },
    "Boulder Canyon": {
        "milesFromDenver": 31.5,
            "id": 12,
            "typesOfClimbing": ["trad", "sport", "toprope", "boulder", "aid"],
            "classicRoutes": [
                {
                    "name": "North Face Center",
                    "id": 13,
                    "grade": "5.07+",
                    "type": ["trad"],
                    "link": "https://www.mountainproject.com/route/105748093/north-face-center"
                },
                {
                    "name": "Empor",
                    "id": 14,
                    "grade": "5.07+",
                    "type": ["trad"],
                    "link": "https://www.mountainproject.com/route/105748142/empor"
                }
            ]
        }
    }

  const mockFilterTypesSearch = [];
  const mockFilterAreasSearch = ["Boulder Canyon"];


  beforeEach(() => {
    wrapper = shallow(
      <Filter/> 
      )
  })

  it('should test the states', () => {
    expect(wrapper.state()).toEqual({setMax: 50, types: [], areas: [], areasPick: [], typesPick: []
    }
  })

  it('should change type', () => {
    // setting defualt state 
    //  invoke changeType
    // Test setMax and types 
    // 
  })

  it('should change Area', () => {
    // areas: areas,
      // typesPick: types
  })

  it('should Update Area', () => {
    // areasPick
  })

  it('should submit filter', () => {
    // simulate click
  })

  it('render with snapshot', () => {

  })
}