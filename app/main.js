'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
// const contentful = require('contentful')
const Pace = require('./components/pace')
// const config = require('./config')
// const runify = require('./lib/runify')

ReactDOM.render(<Pace actualPace={9} targetPace={10} />, document.getElementById('app'))

// contentful.createClient(config.contentful).getEntries({
//   content_type: 'run',
//   order: '-fields.date' // reverse order
// }).then((entries) => {
//   entries.items
//   .map((item) => runify(item, config.target))
//   .forEach((run) => {
//   })
// })
