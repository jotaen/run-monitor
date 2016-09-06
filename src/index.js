'use strict'

const appendHeadline = require('./headline')
const appendDistance = require('./distance')
const appendIntensity = require('./intensity')
const appendPace = require('./pace')
const appendTime = require('./time')
const runify = require('./runify')

window.appendRun = (elementId, run, target) => {
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
    target.distance
  )
  appendPace(
    runContainer,
    run.pace,
    run.targetPace
  )
  appendTime(
    runContainer,
    run.time,
    run.extrapolatedTime,
    target.time
  )
  appendIntensity(
    runContainer,
    run.intensity
  )
}

window.runify = runify
