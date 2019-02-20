import React from 'react';
import Filter from './Filter';
import { shallow } from 'enzyme';

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


  const mockFunction = jest.fn();






describe('Filter', () => {

  let wrapper;


  beforeEach(() => {
    wrapper = shallow(
      <Filter climb={mockColoradoClimbingAreas}
                    updateFromFilter={mockFunction}/>
      )
  })

  it('should test the states', () => {
    expect(wrapper.state()).toEqual({setMax: 50, types: [], areas: [], areasPick: [], typesPick: []
    })
  })

  it('should change type', () => {
    expect(wrapper.state('setMax')).toEqual(50);
    expect(wrapper.state('types')).toEqual([]);
    wrapper.find('.range').simulate('change', {target: {value: 115}});
    expect(wrapper.state('setMax')).toEqual(115);
    expect(wrapper.state('types')).toEqual(["trad", "sport", "toprope", "boulder", "aid"]);
  })

  it.only('should setState for typesPick and areas', () => {
    expect(wrapper.state('typesPick')).toEqual([]);
    expect(wrapper.state('areas')).toEqual([]);
    wrapper.find('.range').simulate('change', {target: {value: 120}});
    wrapper.find('.types-checkbox').at(0).simulate('change', {target: {checked: true}})
    wrapper.instance().changeArea();
    // expect(wrapper.state('typesPick')).toEqual(["trad", "sport", "toprope", "boulder", "aid"]);
    expect(wrapper.state('areas')).toEqual(['Canon City','Boulder Canyon']);
  })

  it('should Update Area', () => {
    // areasPick
    expect.state('areasPick').toEqual([]);
    wrapper.find('.range').simulate('change', {target: {value: 120}});
    expect.state('areasPick').toEqual(['Canon City', 'Boulder Canyon'])
  })


  it('render with snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})