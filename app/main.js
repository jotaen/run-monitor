'use strict'

const React = require('react')
const ReactDOM = require('react-dom')
// const contentful = require('contentful')
const Page = require('./components/page')
const config = require('./config')
const runify = require('./lib/runify')

const callApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(runify({
        distance: 10.4,
        date: new Date(),
        time: 55,
        route: ['Platz A', 'Straße B']
      }, config.target))
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
