'use strict'

const createWidget = require('./widgets')

module.exports = (run, target) => {
  createWidget.distance(
    'distance',
    'circle',
    run.distance,
    target.distance
  )
}
