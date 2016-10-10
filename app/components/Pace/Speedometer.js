'use strict'

import React from 'react'
import Arrow from './arrow'
import Scale from './scale'
import { convertToDegrees } from './util'

const frameStyle = () => ({
  position: 'relative',
  height: '56px',
  width: '112px',
  borderRadius: '90px 90px 0 0',
  borderWidth: '3px',
  borderStyle: 'solid'
})

const Speedometer = ({deviation}) => (
  <div style={frameStyle()} className='pace-speedometer'>
    <Scale />
    <Arrow rotation={convertToDegrees(deviation)} />
  </div>
)

Speedometer.propTypes = {
  // deviation: must be something between -1 and 1 (inclusive)
  deviation: React.PropTypes.number
}

Speedometer.defaultProps = {
  deviation: 0
}

export default Speedometer
