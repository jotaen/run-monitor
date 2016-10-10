'use strict'

import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Time from '../../app/components/time'

describe('<Time />', () => {
  it('should have its rest position at 0 deg', () => {
    const wrapper = shallow(<Time actualValue={60} targetValue={120} estimatedValue={120} />)
    const element = wrapper.find('.pie__fill')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.get(0).props.style.strokeDasharray, '50 100')
  })

  it('should not exceed chart boundaries', () => {
    const wrapper = shallow(<Time actualValue={130} targetValue={120} estimatedValue={120} />)
    const element = wrapper.find('.pie__fill')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.get(0).props.style.strokeDasharray, '100 100')
  })
})
