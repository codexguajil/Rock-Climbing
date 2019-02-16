import React from 'react';
import ListContainer from './ListContainer';
import { shallow } from 'enzyme';


describe('Search', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ListContainer />
        );
    });

    it('should produce a collection of climbing routes that match the type and area if user selects type & area', () => {
        expect();
    });

    it('should produce a list of climbing routes that are within the area that the user types in the search', () => {
        expect()
    })

});
