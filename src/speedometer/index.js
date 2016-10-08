'use strict'

import React from 'react'
import Arrow from './arrow'

const percentToDegrees = percent => percent * 90

class Speedometer extends React.Component {
  render() {
    return <Arrow rotation={percentToDegrees(this.props.deviation)}/>
  }
}

Speedometer.propTypes = {
  deviation: React.PropTypes.number
}

Speedometer.defaultProps = {
  deviation: 0
}

module.exports = Speedometer
