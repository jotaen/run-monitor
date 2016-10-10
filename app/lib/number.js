'use strict'

import { compose, multiply } from 'ramda'

// cutLow :: (Number) -> (Number) -> Number
const cutLow = (boundary) => (number) => (number < boundary) ? boundary : number

// cutHigh :: (Number) -> (Number) -> Number
const cutHigh = (boundary) => (number) => (number > boundary) ? boundary : number

// fullPercent :: (Number) -> Number
const fullPercent = compose(multiply(100), cutHigh(1), cutLow(0))

module.exports = {
  cutLow, cutHigh, fullPercent
}
