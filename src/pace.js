'use strict'

const markerPosition = (actualPace, targetPace) => {
  const factor = 0.6
  const scaledActualPace = actualPace * factor
  const scaledTargetPace = targetPace * factor
  const middle = scaledActualPace - scaledTargetPace
  return 90 * 2.5 * middle / scaledTargetPace
}

const tick = (degrees) => {
  const marker = document.createElement('div')
  marker.setAttribute('style', [
    'position: absolute',
    'bottom: -1px',
    'left: 55px',
    'height: 50px',
    'width: 2px',
    'border-top: 8px solid #bbb',
    'transform-origin: bottom',
    'transform: rotate(' + degrees + 'deg)'
  ].join(';'))
  return marker
}

module.exports = (domNode, actualPace, targetPace) => {
  // Setup Container
  const container = document.createElement('div')
  container.setAttribute('class', 'widget pace')
  domNode.appendChild(container)

  // Render Text
  const value = document.createElement('div')
  value.setAttribute('class', 'value pace-value')
  value.innerText = actualPace.toFixed(2)
  container.appendChild(value)

  const label = document.createElement('div')
  label.setAttribute('class', 'reference pace-reference')
  label.innerText = targetPace.toFixed(2)
  container.appendChild(label)

  // Render Gauge
  const dashboard = document.createElement('div')
  dashboard.setAttribute('style', [
    'position: relative',
    'height: 56px',
    'width: 112px',
    'border-radius: 90px 90px 0 0',
    'border: 3px solid #bbb',
    'background: #e6e6e6'
  ].join(';'))
  container.appendChild(dashboard)

  dashboard.appendChild(tick(-60))
  dashboard.appendChild(tick(-30))
  dashboard.appendChild(tick(0))
  dashboard.appendChild(tick(30))
  dashboard.appendChild(tick(60))

  const pointer = document.createElement('div')
  pointer.setAttribute('style', [
    'position: absolute',
    'left: 54px',
    'right: 0',
    'bottom: -2px',
    'border-radius: 2px',
    'background-color: #be643c',
    'width: 3px',
    'height: 52px',
    'transform-origin: bottom',
    'transform: rotate(' + Math.round(markerPosition(actualPace, targetPace)) + 'deg)'
  ].join(';'))
  dashboard.appendChild(pointer)

  const arrow = document.createElement('div')
  arrow.setAttribute('style', [
    'position: absolute',
    'top: -6px',
    'left: 2px',
    'width: 0',
    'height: 0',
    'margin-left: -8px',
    'border-left: 8px solid transparent',
    'border-right: 8px solid transparent',
    'border-bottom: 16px solid #be643c'
  ].join(';'))
  pointer.appendChild(arrow)
}
