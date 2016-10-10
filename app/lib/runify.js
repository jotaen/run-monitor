'use strict'

const intensity = (distance, pace) => {
  return distance * Math.pow(pace, 2) / 100
}

module.exports = (item, target) => {
  const targetPace = target.distance / (target.time / 60)
  const targetIntensity = intensity(target.distance, targetPace)

  const run = item.fields
  run.date = new Date(run.date)
  run.pace = run.distance / run.time * 60
  run.targetPace = targetPace
  run.intensity = intensity(run.distance, run.pace) / targetIntensity
  run.extrapolatedTime = target.distance / run.pace * 60
  return run
}
