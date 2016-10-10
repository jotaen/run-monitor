'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
// const contentful = require('contentful')
const Page = require('./components/page')
// const config = require('./config')
// const runify = require('./lib/runify')

const run = () => ({
  targetPace: 10.5,
  pace: 9.7,
  intensity: 0.3,
  date: new Date(),
  route: ['Platz A', 'Straße B']
})

const callApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(run())
    }, 0)
  })
  // contentful.createClient(config.contentful).getEntries({
  //   content_type: 'run',
  //   order: '-fields.date' // reverse order
  // }).then((entries) => {
  //   entries.items
  //     .map((item) => runify(item, config.target))
  //     .forEach((run) => {
  //       return new Promise()
  //     })
  // })
}

ReactDOM.render(<Page fetch={callApi} />, document.getElementById('app'))
