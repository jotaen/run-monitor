'use strict'

import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Pace from '../../app/components/pace'

describe('<Pace />', () => {
  it('should have its rest position at 0 deg', () => {
    const wrapper = shallow(<Pace actualValue={10} targetValue={10} />)
    const element = wrapper.find('.clock-needle')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.get(0).props.style.transform, 'rotate(0deg)')
  })

  it('should stop rotation at -90° when actualValue << targetValue', () => {
    const wrapper = shallow(<Pace actualValue={0} targetValue={10} />)
    const element = wrapper.find('.clock-needle')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.get(0).props.style.transform, 'rotate(-90deg)')
  })

  it('should stop rotation at 90° when actualValue >> targetValue', () => {
    const wrapper = shallow(<Pace actualValue={20} targetValue={10} />)
    const element = wrapper.find('.clock-needle')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.get(0).props.style.transform, 'rotate(90deg)')
  })
})
