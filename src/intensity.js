'use strict'

module.exports = (domNode, intensity) => {
  const percentage = Math.ceil(intensity * 100)

  // Setup Container
  const container = document.createElement('div')
  container.setAttribute('class', 'widget intensity')
  domNode.appendChild(container)

  // Render Text
  const value = document.createElement('div')
  value.setAttribute('class', 'value intensity-value')
  value.innerText = percentage
  container.appendChild(value)

  // Render Bar
  const progressBar = document.createElement('div')
  progressBar.setAttribute('style', [
    'width: 100%',
    'background-color: #e6dcea',
    'border: 0.15em solid #9b59b6',
    'height: 32px',
    'margin-top: 12px'
  ].join(';'))
  container.appendChild(progressBar)

  const gauge = document.createElement('div')
  gauge.setAttribute('style', [
    'background-color: #9b59b6',
    'width: ' + percentage + '%',
    'height: 100%'
  ].join(';'))
  progressBar.appendChild(gauge)
}
