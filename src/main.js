// import the original weex-html5.
import weex from 'weex-html5'
import hello from 'weex-hello'
var actionSheet = require('../weex-components/weex-action-sheet/web/index')
// install the component.
weex.install(hello)
weex.install(actionSheet)
// init the weex and load the bundle of 'demo/index.we'.
; (function () {
  function getUrlParam (key) {
    const reg = new RegExp('[?|&]' + key + '=([^&]+)')
    const match = location.search.match(reg)
    return match && match[1]
  }

  const loader = getUrlParam('loader') || 'xhr'
  const page = getUrlParam('page') || 'dist/mainlist.js'

  // jsonp callback name should be specified or be the default
  // value 'weexJsonpCallback' if the 'jsonp' loader is used.
  const JSONP_CALLBACK_NAME = 'weexJsonpCallback'

  weex.init({
    jsonpCallback: JSONP_CALLBACK_NAME,
    appId: location.href,
    loader: loader,
    source: page,
    rootId: 'weex'
  })
})()
