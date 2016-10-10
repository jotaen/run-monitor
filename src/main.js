'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const contentful = require('contentful')
const Speedometer = require('./speedometer')
const config = require('./config')
const runify = require('./runify')

contentful.createClient(config.contentful).getEntries({
  content_type: 'run',
  order: '-fields.date' // reverse order
}).then((entries) => {
  entries.items
  .map((item) => runify(item, config.target))
  .forEach((run) => {
    ReactDOM.render(<Speedometer />, document.getElementById('app'))
  })
})
