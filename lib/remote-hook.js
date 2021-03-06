#!/usr/bin/env node
const Patcher = require('./patcher')
const path = require('path')

const START_PAGE = path.resolve(__dirname, './template/start-remote.html')
const START_PAGE_NAME = 'start-remote.html'

const PLATFORM_SUPPORT = ['osx', 'ios', 'android', 'windows']

module.exports = function(ctx) {
  let isStartHmr =
    ctx.opts &&
    ctx.opts.options &&
    (ctx.opts.options.remote || ctx.opts.options.autoremote)
  if (!isStartHmr) return

  let options = {
    rootPath: ctx.opts.projectRoot,
    opts: ctx.opts,
    supportPlatform: PLATFORM_SUPPORT,
    startPage: {
      path: START_PAGE,
      name: START_PAGE_NAME
    }
  }

  const patcher = new Patcher(options)
  patcher.prepare()
}
