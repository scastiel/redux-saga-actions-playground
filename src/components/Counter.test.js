import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

describe('Counter component', () => {
  it('renders with counter value 0', () => {
    const wrapper = shallow(<Counter counter={0} />)
    expect(wrapper.find('.counterValue').text()).toEqual('0')
  })
  it('renders with counter value 10', () => {
    const wrapper = shallow(<Counter counter={10} />)
    expect(wrapper.find('.counterValue').text()).toEqual('10')
  })
  it('calls increment callback when increment button is clicked', () => {
    const increment = jest.fn()
    const wrapper = shallow(<Counter counter={1} increment={increment} />)
    wrapper.find('.incrementButton').simulate('click')
    expect(increment).toHaveBeenCalled()
  })
  it('calls incrementAsync callback when incrementAsync button is clicked', () => {
    const incrementAsync = jest.fn()
    const wrapper = shallow(
      <Counter counter={1} incrementAsync={incrementAsync} />
    )
    wrapper.find('.incrementAsyncButton').simulate('click')
    expect(incrementAsync).toHaveBeenCalled()
  })
})
