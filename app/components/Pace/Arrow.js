'use strict'

import React from 'react'

const needleStyle = (rotation) => ({
  position: 'absolute',
  left: '54px',
  right: '0',
  bottom: '-2px',
  borderRadius: '2px',
  width: '4px',
  height: '52px',
  transformOrigin: 'bottom',
  transform: `rotate(${rotation}deg)`
})

const triangleStyle = () => ({
  position: 'absolute',
  top: '-5px',
  left: '2px',
  width: '0',
  height: '0',
  marginLeft: '-7px',
  borderLeft: '7px solid transparent',
  borderRight: '7px solid transparent',
  borderTop: 'none',
  borderBottomWidth: '15px',
  borderBottomStyle: 'solid'
})

const dotStyle = () => ({
  position: 'absolute',
  left: '-2px',
  right: '0',
  width: '8px',
  height: '8px',
  bottom: '-3px',
  borderRadius: '4px'
})

const Arrow = ({rotation}) => (
  <div style={needleStyle(rotation)} className='pace-arrow-needle'>
    <div style={dotStyle()} className='pace-arrow-needle' />
    <div style={triangleStyle()} className='pace-arrow-pointer' />
  </div>
)

Arrow.propTypes = {
  // rotation: a degree value (0 is “north”)
  rotation: React.PropTypes.number
}

Arrow.defaultProps = {
  rotation: 0
}

export default Arrow
