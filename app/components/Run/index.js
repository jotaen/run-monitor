'use strict'

import React from 'react'
import Heading from './heading'
import Distance from '../distance'
import Pace from '../pace'
import Intensity from '../intensity'
import Time from '../time'
require('./style.scss')

const Run = ({run}) => (
  <div className='run'>
    <Heading date={run.date} route={run.route} />
    <Distance actualValue={run.distance} targetValue={run.targetDistance} />
    <Pace actualValue={run.pace} targetValue={run.targetPace} />
    <Time actualValue={run.time} targetValue={run.targetTime} estimatedValue={run.estimatedTime} />
    <Intensity percentValue={run.intensity} />
  </div>
)

Run.propTypes = {
  run: React.PropTypes.shape({
    targetPace: React.PropTypes.number.isRequired,
    pace: React.PropTypes.number.isRequired,
    intensity: React.PropTypes.number.isRequired,
    date: React.PropTypes.instanceOf(Date).isRequired,
    distance: React.PropTypes.number.isRequired,
    estimatedTime: React.PropTypes.number.isRequired,
    route: React.PropTypes.array.isRequired
  })
}

module.exports = Run
