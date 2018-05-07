import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const renderComponentHelper = (Component, mountOptions = {}) =>  ({ children, ...props } = {}) => {
  const TestComponent = Component.WrappedComponent ? Component.WrappedComponent : Component
  const wrapper = shallow(
    <TestComponent {...props}>{children}</TestComponent>,
    mountOptions
  )
  return {
    wrapper,
    instance: wrapper.instance(),
    getTree: () => toJson(wrapper),
    getTreeFor: (selectedWrapper) => toJson(selectedWrapper)
  }
}

export default renderComponentHelper
