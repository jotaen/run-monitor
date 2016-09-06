'use strict'

const markerPosition = (actualPace, targetPace) => {
  const rangeMin = targetPace * 0.7
  const offset = targetPace - rangeMin
  const length = offset * 2
  const scaledActualPace = actualPace - rangeMin
  return scaledActualPace / length * 100
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

  // Render Bar
  const scale = document.createElement('div')
  scale.setAttribute('style', [
    'width: 100%',
    'position: relative',
    'background-color: #7f8c8d',
    'height: 8px',
    'margin-top: 32px'
  ].join(';'))
  container.appendChild(scale)

  const middleMarker = document.createElement('div')
  middleMarker.setAttribute('style', [
    'position: absolute',
    'top: 0',
    'left: 48%',
    'width: 6%',
    'background-color: #7f8c8d',
    'height: 18px'
  ].join(';'))
  scale.appendChild(middleMarker)

  const currentMarker = document.createElement('div')
  currentMarker.setAttribute('style', [
    'position: absolute',
    'top: -16px',
    'left: ' + markerPosition(actualPace, targetPace) + '%',
    'width: 0',
    'height: 0',
    'margin-left: -8px',
    'border-left: 8px solid transparent',
    'border-right: 8px solid transparent',
    'border-top: 16px solid #be643c'
  ].join(';'))
  scale.appendChild(currentMarker)
}
