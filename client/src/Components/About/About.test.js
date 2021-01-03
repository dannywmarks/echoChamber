import React from "react";
import { shallow } from "enzyme";
import About from "./About";
import { findByTestAttr } from '../../utils/testUtils'

const setUp = (props={}) => {
  const component = shallow(<About {...props} />)
  return component 
}

describe('Home Component', () => {

  let component;
  beforeEach(() => {
    component = setUp()
  })

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, 'aboutComponent')
    expect(wrapper.length).toBe(1)
  });
  it('Should render a title', () => {
    const wrapper = findByTestAttr(component, 'aboutComponent-title')
    expect(wrapper.length).toBe(1)
  })
})