import React from "react";
import Description from "./Description"
import { shallow } from "enzyme";

const mockObjectData = {
    "name": "Undertow",
    "id": 2,
    "grade": "5.10a",
    "type": ["trad", "aid", "alpine"],
    "link": "https://www.mountainproject.com/route/106200712/undertow"
}


describe("Description", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <Description matchedType={mockObjectData} 
        />
    );
  });

  it("shold have a default state of false for toggle", () => {
      expect(wrapper.state()).toEqual({ showDescription: false})
  });

  it("should have a non expanded snapshot", () => {
      expect(wrapper).toMatchSnapshot()
  })

  it("should invoke the toggle function when list element is click", () => {
    expect(wrapper.state()).toEqual({ showDescription: false})
    wrapper.find('li').simulate('click')
    expect(wrapper.state()).toEqual({ showDescription: true})
  })

  it("should have a expanded sanpshot when funciton is invoke", () => {
    wrapper.find('li').simulate('click')
    expect(wrapper).toMatchSnapshot()
  })

});