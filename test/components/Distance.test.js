'use strict'

import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Distance from '../../app/components/Distance'

describe('<Distance />', () => {
  it('should calculate the correct percentage for the PieChart', () => {
    const wrapper = shallow(<Distance actualValue={60} targetValue={120} />)
    const element = wrapper.find({modifier: 'actualDistance'})
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.prop('percent'), 0.5)
  })
})
