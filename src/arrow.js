'use strict'

const React = require('react')

const Arrow = ({rotation}) => {
  const strokeStyle = {
    position: 'absolute',
    left: '54px',
    right: '0',
    bottom: '-2px',
    borderRadius: '2px',
    backgroundColor: '#2c3e50',
    width: '4px',
    height: '52px',
    transformOrigin: 'bottom',
    transform: `rotate(${rotation}deg)`
  }
  const tipStyle = {
    position: 'absolute',
    top: '-5px',
    left: '2px',
    width: '0',
    height: '0',
    marginLeft: '-7px',
    borderLeft: '7px solid transparent',
    borderRight: '7px solid transparent',
    borderBottom: '15px solid #2c3e50'
  }
  const dotStyle = {
    position: 'absolute',
    left: '-2px',
    right: '0',
    width: '8px',
    height: '8px',
    bottom: '-3px',
    borderRadius: '4px',
    backgroundColor: '#2c3e50'
  }
  return (
    <div style={strokeStyle}>
      <div style={tipStyle}></div>
      <div style={dotStyle}></div>
    </div>
  )
}

Arrow.propTypes = {
  rotation: React.PropTypes.number
}

Arrow.defaultProps = {
  rotation: 0
}

module.exports = Arrow
