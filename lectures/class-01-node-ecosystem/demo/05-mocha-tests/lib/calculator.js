'use strict'

module.exports = exports = {}

exports.add = (a, b) => {
  if(!a && !b) throw new Error()
  return a + b
}
