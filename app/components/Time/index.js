'use strict'

import React from 'react'
import Label from '../Label'
import PieChart from '../PieChart'
require('./style.scss')

const timeString = (minutes) => {
  const h = Math.floor(minutes / 60)
  const mm = ('0' + Math.round(minutes % 60)).substr(-2)
  return h + ':' + mm
}

const Time = ({actualValue, targetValue, estimatedValue}) => {
  return (
    <div title='Time' className='run__widget'>
      <Label value={timeString(actualValue)} element='time' modifier='actual' />
      <Label value={timeString(targetValue)} element='time' modifier='target' />
      <Label value={timeString(estimatedValue)} element='time' modifier='estimated' />
      <PieChart radius={0.25} stroke={0.5} percent={actualValue / targetValue} modifier='time' />
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
