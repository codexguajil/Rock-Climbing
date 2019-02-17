import React from 'react';
import ListContainer from './ListContainer';
import { shallow } from 'enzyme';

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


describe('Search', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ListContainer filterAreas={mockFilterAreas}
                            areasAndRoutes={mockColoradoClimbingAreas}
                            filterTypes={mockFilterTypes}/>
        );
    });

    it('should produce a collection of climbing routes if user selects type & area', () => {
        expect()
    });

    it('should produce a list of climbing routes that are within the area that the user types in the search', () => {
        expect()
    })

});
