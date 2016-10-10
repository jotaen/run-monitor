'use strict'

import React from 'react'
import Speedometer from './speedometer'
import { zoomScale } from './util'
require('./style.scss')

const Pace = ({actualPace, targetPace}) => {
  const deviation = zoomScale(actualPace, targetPace)
  return <Speedometer deviation={deviation} />
}

Pace.propTypes = {
  // actualPace: number greater 0
  actualPace: React.PropTypes.number.isRequired,
  // targetPace: number greater 0
  targetPace: React.PropTypes.number.isRequired
}

module.exports = Pace
