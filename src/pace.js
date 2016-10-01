'use strict'

const markerPosition = (actualPace, targetPace) => {
  const factor = 0.6
  const scaledActualPace = actualPace * factor
  const scaledTargetPace = targetPace * factor
  const middle = scaledActualPace - scaledTargetPace
  return 90 * 2.5 * middle / scaledTargetPace
}

const tick = (degrees, color) => {
  const marker = document.createElement('div')
  marker.setAttribute('style', [
    'position: absolute',
    'bottom: -1px',
    'left: 54px',
    'height: 50px',
    'width: 4px',
    'border-top: 5px solid ' + color,
    'transform-origin: bottom',
    'transform: rotate(' + degrees + 'deg)'
  ].join(';'))
  return marker
}

module.exports = (domNode, actualPace, targetPace) => {
  // Setup Container
  const container = document.createElement('div')
  container.setAttribute('class', 'widget pace')
  container.setAttribute('title', 'Pace')
  domNode.appendChild(container)

  // Render Text
  const value = document.createElement('div')
  value.setAttribute('class', 'value pace-value')
  value.innerText = actualPace.toFixed(1)
  container.appendChild(value)

  const reference = document.createElement('div')
  reference.setAttribute('class', 'reference pace-reference')
  reference.innerText = targetPace.toFixed(1)
  container.appendChild(reference)

  // Render Gauge
  const dashboard = document.createElement('div')
  dashboard.setAttribute('style', [
    'position: relative',
    'height: 56px',
    'width: 112px',
    'border-radius: 90px 90px 0 0',
    'border: 3px solid #95a5a6',
    'background: #e6e6e6'
  ].join(';'))
  container.appendChild(dashboard)

  dashboard.appendChild(tick(-60, '#e74c3c'))
  dashboard.appendChild(tick(-30, '#e67e22'))
  dashboard.appendChild(tick(0, '#3498db'))
  dashboard.appendChild(tick(30, '#2ecc71'))
  dashboard.appendChild(tick(60, '#1abc9c'))

  const pointer = document.createElement('div')
  pointer.setAttribute('style', [
    'position: absolute',
    'left: 54px',
    'right: 0',
    'bottom: -2px',
    'border-radius: 2px',
    'background-color: #2c3e50',
    'width: 4px',
    'height: 52px',
    'transform-origin: bottom',
    'transform: rotate(' + Math.round(markerPosition(actualPace, targetPace)) + 'deg)'
  ].join(';'))
  dashboard.appendChild(pointer)

  const dot = document.createElement('div')
  dot.setAttribute('style', [
    'position: absolute',
    'left: -2px',
    'right: 0',
    'width: 8px',
    'height: 8px',
    'bottom: -3px',
    'border-radius: 4px',
    'background-color: #2c3e50'
  ].join(';'))
  pointer.appendChild(dot)

  const arrow = document.createElement('div')
  arrow.setAttribute('style', [
    'position: absolute',
    'top: -5px',
    'left: 2px',
    'width: 0',
    'height: 0',
    'margin-left: -7px',
    'border-left: 7px solid transparent',
    'border-right: 7px solid transparent',
    'border-bottom: 15px solid #2c3e50'
  ].join(';'))
  pointer.appendChild(arrow)
}
