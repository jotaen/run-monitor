'use strict'

import React from 'react'
import Label from '../label'
import { compose, multiply } from 'ramda'
import { cutHigh, cutLow } from '../../lib/number'
import { width } from '../../lib/styleProp'
require('./style.scss')

const makeFullPercent = compose(multiply(100), cutHigh(1), cutLow(0))

const Intensity = ({percentValue}) => {
  const value = makeFullPercent(percentValue)
  return (
    <div title='Intensity' className='run__widget'>
      <Label value={value.toFixed(0)} element='intensity' />
      <div className='progressbar'>
        <div style={width(value)} className='progressbar__gauge' />
      </div>
    </div>
  )
}

Intensity.propTypes = {
  // percentValue: number between 0 and 1 (inclusive)
  percentValue: React.PropTypes.number.isRequired
}

module.exports = Intensity
