import './style/global.scss'
/* import typography from 'css-loader!typography-loader!babel-loader!./typography.js'*/
import './typography.js'
import Base from './base.jsx'
import Section from './section.jsx'
import Single from './single.jsx'
import List from './list.jsx'
import Summary from './summary.jsx'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

const renderHugoTemplate = element => {
  return ReactDOMServer.renderToStaticMarkup(element).replace(/&quot;/g, '"')
}

function render(locals) {
  return {
    '/layouts/_default/baseof.html': renderHugoTemplate(<Base />),
    '/layouts/_default/section.html': renderHugoTemplate(<Section />),
    '/layouts/_default/single.html': renderHugoTemplate(<Single />),
    '/layouts/_default/list.html': renderHugoTemplate(<List />),
    '/layouts/partials/summary.html': renderHugoTemplate(<Summary />),
  }
}

module.exports = render
