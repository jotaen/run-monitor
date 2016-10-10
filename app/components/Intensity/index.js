'use strict'

import React from 'react'
import Label from '../label'
import { fullPercent } from '../../lib/number'
import { width } from '../../lib/styleProp'
require('./style.scss')

const Intensity = ({percentValue}) => {
  const value = fullPercent(percentValue)
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
