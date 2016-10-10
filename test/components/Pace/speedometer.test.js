'use strict'

import assert from 'assert'
import React from 'react'
import { shallow } from 'enzyme'
import Speedometer from '../../../app/components/pace/speedometer'

describe('<Speedometer />', () => {
  it('should consist of an Arrow and a Scale', () => {
    const wrapper = shallow(<Speedometer />)
    assert.strictEqual(wrapper.find('Arrow').length, 1)
    assert.strictEqual(wrapper.find('Scale').length, 1)
  })

  it('should calculate the correct Arrow rotation', () => {
    const wrapper = shallow(<Speedometer deviation={-0.5} />)
    assert.strictEqual(wrapper.find('Arrow').length, 1)
    assert.strictEqual(wrapper.find('Arrow').prop('rotation'), -45)
  })
})
