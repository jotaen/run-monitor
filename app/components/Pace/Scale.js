'use strict'

import React from 'react'

const tickStyle = (degrees) => ({
  position: 'absolute',
  bottom: '-1px',
  left: '54px',
  height: '50px',
  width: '4px',
  borderTopWidth: '5px',
  borderTopStyle: 'solid',
  transformOrigin: 'bottom',
  transform: `rotate(${degrees}deg)`
})

const Scale = () => (
  <div>
    <div style={tickStyle(-60)} className='pace-scale-tick1' />
    <div style={tickStyle(-30)} className='pace-scale-tick2' />
    <div style={tickStyle(0)} className='pace-scale-tick3' />
    <div style={tickStyle(30)} className='pace-scale-tick4' />
    <div style={tickStyle(60)} className='pace-scale-tick5' />
  </div>
)

export default Scale
