'use strict'

import React from 'react'
import Label from '../Label'
import { fullPercent } from '../../lib/number'
import { strokeDasharray } from '../../lib/styleProp'
require('./style.scss')

const Distance = ({actualValue, targetValue}) => {
  const relation = fullPercent(actualValue / targetValue)
  return (
    <div title='Distance' className='run__widget'>
      <Label value={actualValue.toFixed(1)} element='distance' modifier='actual' />
      <Label value={targetValue.toFixed(1)} element='distance' modifier='target' />
      <svg viewBox='0 0 32 32' className='donut'>
        <circle r='16' cx='16' cy='16' className='donut__ground' style={strokeDasharray(101)} />
        <circle r='16' cx='16' cy='16' className='donut__fill' style={strokeDasharray(relation)} />
      </svg>
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
