'use strict'

import React from 'react'
import Label from '../label'
import { fullPercent } from '../../lib/number'
import { strokeDasharray } from '../../lib/styleProp'
require('./style.scss')

const timeString = (minutes) => {
  const h = Math.floor(minutes / 60)
  const mm = ('0' + Math.round(minutes % 60)).substr(-2)
  return h + ':' + mm
}

const Time = ({actualValue, targetValue, estimatedValue}) => {
  const relation = fullPercent(actualValue / targetValue)
  return (
    <div title='Time' className='run__widget'>
      <Label value={timeString(actualValue)} element='time' modifier='actual' />
      <Label value={timeString(targetValue)} element='time' modifier='target' />
      <Label value={timeString(estimatedValue)} element='time' modifier='estimated' />
      <svg viewBox='0 0 32 32' className='pie'>
        <circle r='16' cx='16' cy='16' className='pie__fill' style={strokeDasharray(relation)} />
      </svg>
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
