import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import { findByTestAttr} from '../../../utils/testUtils'

const setUp = (props={}) => {
  const component = shallow(<Home {...props} />)
  return component 
}

describe('Home Component', () => {

  let component;
  beforeEach(() => {
    component = setUp()
  })

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, 'homeComponent')
    expect(wrapper.length).toBe(1)
  });
  it('Should render a title', () => {
    const wrapper = findByTestAttr(component, 'homeComponent-title')
    expect(wrapper.length).toBe(1)
  })
})

