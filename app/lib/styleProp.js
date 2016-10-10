'use strict'

// rotate :: (Number) -> {`transform`: String}
exports.rotate = (value) => ({transform: `rotate(${value}deg)`})

// width :: (Number) -> {`width`: String}
exports.width = (value) => ({width: `${value}%`})
