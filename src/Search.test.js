import React from 'react';
import Search from './Search';
import { shallow, mount } from 'enzyme';

const handleSearchMock = jest.fn();


describe('Search', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Search
        search={handleSearchMock}
      />
    );
  });

  it('should have the proper default state', () => {

    expect(wrapper.state()).toEqual({ value: '' })

  });

  it('should invoke handleSearch when button is clicked', () => {

    wrapper.find('.search-submit').simulate('click', {preventDefault: () => {}})
    
    expect(handleSearchMock).toBeCalled();

  });

  it('should update the input value on input change', () => {

    expect(wrapper.state('value')).toEqual('');
    
    wrapper.find('#search-input').simulate('change', {target: {value: 'my search input'}})
    
    expect(wrapper.state('value')).toEqual('my search input');
    
  })
});