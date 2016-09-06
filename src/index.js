'use strict'

const appendHeadline = require('./headline')
const appendDistance = require('./distance')
const appendIntensity = require('./intensity')
const appendTime = require('./time')
const runify = require('./runify')

window.appendRun = (elementId, run) => {
  const allRunsContainer = document.getElementById('runs')
  const runContainer = document.createElement('div')
  runContainer.setAttribute('class', 'run')
  allRunsContainer.appendChild(runContainer)

  appendHeadline(
    runContainer,
    run.date,
    run.route
  )
  appendDistance(
    runContainer,
    run.distance,
    config.target.distance
  )
  appendIntensity(
    runContainer,
    run.intensity
  )
  appendTime(
    runContainer,
    run.time,
    run.extrapolatedTime,
    config.target.time
  )
}

window.runify = runify
