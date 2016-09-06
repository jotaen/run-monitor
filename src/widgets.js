'use strict'

exports.distance = (elementId, cssPrefix, actualDistance, targetDistance) => {
  const scale = new Plottable.Scales.Linear()
  const colorScale = new Plottable.Scales.InterpolatedColor()
  colorScale.range(['#e74c3c', '#1abc9c'])
  const data = [
    Math.floor(actualDistance*10),
    Math.floor((targetDistance-actualDistance)*10)
  ]

  const svgId = elementId + '-svg'
  const svg = '<svg width="100%" height="100%" id="' + svgId + '"></svg>'
  const value = '<div class="' + cssPrefix + '-value">' + actualDistance.toFixed(1) + '</div>'
  const label = '<div class="' + cssPrefix + '-label">' + targetDistance.toFixed(1) + '</div>'
  document.getElementById(elementId).innerHTML = svg + value + label

  const plot = new Plottable.Plots.Pie()
    .addDataset(new Plottable.Dataset(data))
    .sectorValue((value) => value, scale)
    .innerRadius(115, scale)
    .attr('fill', (value) => value, colorScale)
    .renderTo('svg#' + svgId)

  window.addEventListener('resize', () => {
    plot.redraw()
  })
}
