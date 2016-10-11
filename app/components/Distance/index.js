'use strict'

import React from 'react'
import Label from '../Label'
import PieChart from '../PieChart'
require('./style.scss')

const Distance = ({actualValue, targetValue}) => {
  return (
    <div title='Distance' className='run__widget'>
      <Label value={actualValue.toFixed(1)} element='distance' modifier='actual' />
      <Label value={targetValue.toFixed(1)} element='distance' modifier='target' />
      <PieChart radius={0.5} stroke={0.30} percent={1} modifier='targetDistance' />
      <PieChart radius={0.5} stroke={0.30} percent={actualValue / targetValue} modifier='actualDistance' />
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
