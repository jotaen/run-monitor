'use strict'

import React from 'react'
import Label from '../Label'
import { fullPercent } from '../../lib/number'
require('./style.scss')

const timeString = (minutes) => {
  const h = Math.floor(minutes / 60)
  const mm = ('0' + Math.round(minutes % 60)).substr(-2)
  return h + ':' + mm
}

const stroke = (part, full) => ({
  strokeWidth: '50%',
  strokeDasharray: `${part.toFixed(0)}% ${full.toFixed(0)}%`
})

const Time = ({actualValue, targetValue, estimatedValue}) => {
  const radius = 0.25
  const radFactor = radius * 2 * 3.14159
  const partCircle = radFactor * fullPercent(actualValue / targetValue)
  const fullCircle = radFactor * 100
  return (
    <div title='Time' className='run__widget'>
      <Label value={timeString(actualValue)} element='time' modifier='actual' />
      <Label value={timeString(targetValue)} element='time' modifier='target' />
      <Label value={timeString(estimatedValue)} element='time' modifier='estimated' />
      <div className='pie'>
        <svg className='pie__container' width='100%' height='100%'>
          <circle
            r={`${radius * 100}%`}
            cx='50%'
            cy='50%'
            className='pie__fill'
            style={stroke(partCircle, fullCircle)}
          />
        </svg>
      </div>
    </div>
  )
}

Time.propTypes = {
  // actualValue: number greater than 0
  actualValue: React.PropTypes.number.isRequired,
  // targetValue: number greater than 0
  targetValue: React.PropTypes.number.isRequired,
  // estimatedValue: number greater than 0
  estimatedValue: React.PropTypes.number.isRequired
}

module.exports = Time
