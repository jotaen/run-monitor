'use strict'

// rotate :: (Number) -> {`transform`: String}
exports.rotate = (value) => ({transform: `rotate(${value.toFixed(0)}deg)`})

// width :: (Number) -> {`width`: String}
exports.width = (value) => ({width: `${value.toFixed(0)}%`})

// strokeDasharray :: (Number) -> {`strokeDasharray`: String}
exports.strokeDasharray = (value) => ({strokeDasharray: `${value.toFixed(0)} 100`})
