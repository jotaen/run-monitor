'use strict'

module.exports = (domNode, actualDistance, targetDistance) => {
  // Setup Container
  const container = document.createElement('div')
  container.setAttribute('class', 'widget distance')
  domNode.appendChild(container)

  // Render Text
  const value = document.createElement('div')
  value.setAttribute('class', 'value distance-value')
  value.innerText = actualDistance.toFixed(1)
  container.appendChild(value)

  const reference = document.createElement('div')
  reference.setAttribute('class', 'reference distance-reference')
  reference.innerText = targetDistance.toFixed(1)
  container.appendChild(reference)

  // Render SVG
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '100%')
  svg.setAttribute('height', '100%')
  container.appendChild(svg)

  const scale = new Plottable.Scales.Linear()
  const colorScale = new Plottable.Scales.Color()
  colorScale.range(['#1abc9c', '#e74c3c'])
  const data = [
    Math.floor(actualDistance*10),
    Math.floor((targetDistance-actualDistance)*10)
  ]

  const plot = new Plottable.Plots.Pie()
    .addDataset(new Plottable.Dataset(data))
    .sectorValue((value) => value, scale)
    .innerRadius(45)
    .attr('fill', (value) => value, colorScale)
    .renderTo(svg)

  window.addEventListener('resize', () => {
    plot.redraw()
  })
}
