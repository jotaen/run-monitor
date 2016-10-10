'use strict'

import React from 'react'
import Heading from '../heading'
import Pace from '../pace'
import Intensity from '../intensity'
require('./style.scss')

const Run = ({run}) => {
  return (
    <div className='run'>
      <Heading date={run.date} route={run.route} />
      <Pace actualValue={run.pace} targetValue={run.targetPace} />
      <Intensity percentValue={run.intensity} />
    </div>
  )
}

Run.propTypes = {
  run: React.PropTypes.shape({
    targetPace: React.PropTypes.number.isRequired,
    pace: React.PropTypes.number.isRequired,
    intensity: React.PropTypes.number.isRequired,
    date: React.PropTypes.instanceOf(Date).isRequired,
    route: React.PropTypes.array.isRequired
  })
}

module.exports = Run
