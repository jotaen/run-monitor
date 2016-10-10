'use strict'

// cutLow :: (Number) -> (Number) -> Number
exports.cutLow = (boundary) => (number) => (number < boundary) ? boundary : number

// cutHigh :: (Number) -> (Number) -> Number
exports.cutHigh = (boundary) => (number) => (number > boundary) ? boundary : number
