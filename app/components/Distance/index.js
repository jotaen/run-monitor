'use strict'

import React from 'react'
import Label from '../Label'
import { fullPercent } from '../../lib/number'
require('./style.scss')

const stroke = (part, full) => ({
  strokeWidth: '30%',
  strokeDasharray: `${part.toFixed(0)}% ${full.toFixed(0)}%`
})

const Distance = ({actualValue, targetValue}) => {
  const radius = 0.5
  const radFactor = radius * 2 * 3.14159
  const partCircle = radFactor * fullPercent(actualValue / targetValue)
  const fullCircle = radFactor * 100
  return (
    <div title='Distance' className='run__widget'>
      <Label value={actualValue.toFixed(1)} element='distance' modifier='actual' />
      <Label value={targetValue.toFixed(1)} element='distance' modifier='target' />
      <div className='donut'>
        <svg className='donut__container donut__container--target' width='100%' height='100%'>
          <circle
            r={`${radius * 100}%`}
            cx='50%'
            cy='50%'
            className='donut__container--target'
            style={stroke(fullCircle, fullCircle)}
          />
        </svg>
      </div>
      <div className='donut'>
        <svg className='donut__container donut__container--actual' width='100%' height='100%'>
          <circle
            r={`${radius * 100}%`}
            cx='50%'
            cy='50%'
            className='donut__container--actual'
            style={stroke(partCircle, fullCircle)}
          />
        </svg>
      </div>
    </div>
  )
}

Distance.propTypes = {
  // actualValue: number greater than 0
  actualValue: React.PropTypes.number.isRequired,
  // targetValue: number greater than 0
  targetValue: React.PropTypes.number.isRequired
}

module.exports = Distance
