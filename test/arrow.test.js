'use strict'

import assert from 'assert'
import React from 'react';
import { shallow } from 'enzyme';
import Arrow from '../src/arrow'

describe('<Arrow />', () => {

  it('should use 0deg as default rotation', () => {
    const wrapper = shallow(<Arrow />)
    const actual = wrapper.find('div').get(0).props.style.transform
    assert.strictEqual(actual, 'rotate(0deg)')
  })

  it('should apply the rotation as CSS style correctly', () => {
    const wrapper = shallow(<Arrow rotation={-78}/>)
    const actual = wrapper.find('div').get(0).props.style.transform
    assert.strictEqual(actual, 'rotate(-78deg)')
  })

})
