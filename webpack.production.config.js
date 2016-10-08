'use strict'

const webpack = require('webpack')
const baseConfig = require('./webpack.config')

module.exports = Object.assign({}, baseConfig, {
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
})
