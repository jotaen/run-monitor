'use strict'

module.exports = (domNode, date, route) => {
  const h1 = document.createElement('h1')
  h1.setAttribute('class', 'date')
  let dateString = ''
  dateString += date.toLocaleDateString('en-US', {weekday: 'long'})
  dateString += ', '
  dateString += date.toLocaleDateString('en-US', {day: 'numeric'})
  dateString += '. '
  dateString += date.toLocaleDateString('en-US', {month: 'long'})
  h1.innerText = dateString
  domNode.appendChild(h1)

  const h2 = document.createElement('h2')
  h2.setAttribute('class', 'route')
  h2.innerText = route.join(' — ')
  domNode.appendChild(h2)
}
