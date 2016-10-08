'use strict'

import assert from 'assert'
import React from 'react';
import { mount, shallow } from 'enzyme';
import Speedometer from '../src/speedometer'

describe('<Speedometer />', () => {

  it('should render an Arrow inside', () => {
    const wrapper = shallow(<Speedometer />)
    assert.strictEqual(wrapper.find('Arrow').length, 1)
  })

  it('should calculate the correct Arrow rotation', () => {
    const wrapper = shallow(<Speedometer deviation={-0.5}/>)
    assert.strictEqual(wrapper.find('Arrow').length, 1)
    assert.strictEqual(wrapper.find('Arrow').prop('rotation'), -45)
  })

})
