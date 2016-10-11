'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
const contentful = require('contentful')
const Page = require('./components/Page')
const config = require('./config')
const runify = require('./lib/runify')

const fetchRuns = () => {
  return new Promise((resolve, reject) => {
    contentful.createClient(config.contentful).getEntries({
      content_type: 'run',
      order: '-fields.date' // reverse order
    }).then((entries) => {
      resolve(entries.items.map((item) => runify(item.fields, config.target)))
    })
  })
}

ReactDOM.render(<Page fetchRuns={fetchRuns} />, document.getElementById('app'))
