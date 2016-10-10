'use strict'

import React from 'react'
require('./style.scss')

const Label = ({value, element, modifier}) => {
  const bem = `label__${element} label--${modifier} label__${element}--${modifier}`
  return (
    <div className='label'>
      <div className={bem}>{value}</div>
    </div>
  )
}

Label.propTypes = {
  // value: the value that is displayed
  value: React.PropTypes.string.isRequired,
  // element: BEM element
  element: React.PropTypes.string.isRequired,
  // modifier: BEM modifier
  modifier: React.PropTypes.string
}

Label.defaultProps = {
  modifier: 'actual'
}

module.exports = Label
