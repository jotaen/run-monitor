'use strict'

const intensity = function (distance, pace) {
  return distance * Math.pow(pace, 3) / 1000
}

module.exports = (item) => {
  const run = item.fields
  run.date = new Date(run.date)
  run.pace = run.distance / run.time * 60
  run.intensity = intensity(run.distance, run.pace) / intensity(config.target.distance, config.target.pace)
  return run
}
