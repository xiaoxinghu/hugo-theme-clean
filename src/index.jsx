import './style/global.scss'
/* import typography from 'css-loader!typography-loader!babel-loader!./typography.js'*/
/* import './typography.js'*/
/* import Preamble from './preamble.jsx'
 * import Postamble from './postamble.jsx'*/
import Base from './base.jsx'
import Section from './section.jsx'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const renderHugoTemplate = element => {
  return ReactDOMServer.renderToStaticMarkup(element).replace(/&quot;/g, '"')
}

function render(locals) {
  return {
    '/layouts/_default/baseof.html': renderHugoTemplate(<Base />),
    '/layouts/_default/section.html': renderHugoTemplate(<Section />),
  }
}

module.exports = render
