'use strict'

import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Time from '../../app/components/Time'

describe('<Time />', () => {
  it('should calculate the correct percentage for the PieChart', () => {
    const wrapper = shallow(<Time actualValue={60} targetValue={120} estimatedValue={120} />)
    const element = wrapper.find('PieChart')
    assert.strictEqual(element.length, 1)
    assert.strictEqual(element.prop('percent'), 0.5)
  })
})
