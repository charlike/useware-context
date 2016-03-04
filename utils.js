'use strict'

/**
 * Module dependencies
 */

var utils = require('lazy-cache')(require)

/**
 * Temporarily re-assign `require` to trick browserify and
 * webpack into reconizing lazy dependencies.
 *
 * This tiny bit of ugliness has the huge dual advantage of
 * only loading modules that are actually called at some
 * point in the lifecycle of the application, whilst also
 * allowing browserify and webpack to find modules that
 * are depended on but never actually called.
 */

var fn = require
require = utils // eslint-disable-line no-undef, no-native-reassign

/**
 * Lazily required module dependencies
 */

require('arr-map')
require('bind-context')
require('is-arguments')
require('isobject')
require('useware')

/**
 * Restore `require`
 */

require = fn // eslint-disable-line no-undef, no-native-reassign

utils.isObject = function isObject (val) {
  if (!val) return false
  if (utils.isArguments(val)) return false
  if (utils.isobject(val)) return true
  return false
}

/**
 * Expose `utils` modules
 */

module.exports = utils
