'use strict'

import React from 'react'

const formatDate = (date) => {
  return [
    (d) => d.toLocaleDateString('en-US', {weekday: 'long'}),
    (_) => ', ',
    (d) => d.toLocaleDateString('en-US', {day: 'numeric'}),
    (_) => '. ',
    (d) => d.toLocaleDateString('en-US', {month: 'long'}),
    (_) => ' – ',
    (d) => d.getHours(),
    (_) => ':',
    (d) => ('0' + d.getMinutes()).substr(-2)
  ].reduce((res, cb) => res.concat(cb(date)), '')
}

const Heading = ({date, route}) => (
  <div>
    <div className='run__date'>{formatDate(date)}</div>
    <div className='run__route'>{route.join(' — ')}</div>
  </div>
)

Heading.propTypes = {
  date: React.PropTypes.instanceOf(Date).isRequired,
  route: React.PropTypes.array.isRequired
}

module.exports = Heading
