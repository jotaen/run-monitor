'use strict'

exports.zoomScale = (actualPace, targetPace) => {
  const factor = 0.6
  const scaledActualPace = actualPace * factor
  const scaledTargetPace = targetPace * factor
  const middle = scaledActualPace - scaledTargetPace
  return 2.5 * middle / scaledTargetPace
}

exports.convertToDegrees = percent => {
  if (percent > 1) percent = 1
  if (percent < -1) percent = -1
  return percent * 90
}
