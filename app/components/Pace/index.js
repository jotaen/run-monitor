'use strict'

import React from 'react'
import Label from '../Label'
import { compose, multiply } from 'ramda'
import { cutHigh, cutLow } from '../../lib/number'
import { rotate } from '../../lib/styleProp'
require('./style.scss')

const makeDegree = compose(multiply(90), cutHigh(1), cutLow(-1))

const tickStyle = (degrees) => ({transform: `rotate(${degrees}deg)`})

const scaledRelation = (actualValue, targetValue) => {
  const factor = 0.6
  const scaledActualPace = actualValue * factor
  const scaledTargetPace = targetValue * factor
  const middle = scaledActualPace - scaledTargetPace
  return 2.5 * middle / scaledTargetPace
}

const Scale = () => (
  <div>
    <div style={tickStyle(-60)} className='clock__tick clock__tick--super-bad' />
    <div style={tickStyle(-30)} className='clock__tick clock__tick--bad' />
    <div style={tickStyle(0)} className='clock__tick clock__tick--neutral' />
    <div style={tickStyle(30)} className='clock__tick clock__tick--good' />
    <div style={tickStyle(60)} className='clock__tick clock__tick--super-good' />
  </div>
)

const Pace = ({actualValue, targetValue}) => {
  const deviation = scaledRelation(actualValue, targetValue)
  return (
    <div title='Pace' className='run__widget'>
      <Label value={actualValue.toFixed(1)} element='pace' modifier='actual' />
      <Label value={targetValue.toFixed(1)} element='pace' modifier='target' />
      <div className='clock'>
        <Scale />
        <div className='clock-needle' style={rotate(makeDegree(deviation))}>
          <div className='clock-needle__origin' />
          <div className='clock-needle__pointer' />
        </div>
      </div>
    </div>
  )
}

Pace.propTypes = {
  // actualValue: number greater 0
  actualValue: React.PropTypes.number.isRequired,
  // targetValue: number greater 0
  targetValue: React.PropTypes.number.isRequired
}

module.exports = Pace
