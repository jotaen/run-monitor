'use strict'

import React from 'react'
import Speedometer from '../speedometer'

class Run extends React.Component {
  render() {
    return <Speedometer />
  }
}

Run.propTypes = {
  deviation: React.PropTypes.number
}

Run.defaultProps = {
  deviation: 0
}

module.exports = Run
