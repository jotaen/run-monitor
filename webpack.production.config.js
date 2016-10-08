'use strict'

const webpack = require('webpack')
const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
})
