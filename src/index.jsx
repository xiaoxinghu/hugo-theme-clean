import './style/global.scss'
import './typography.js'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {
  Main,
  Section,
  Single,
  List,
  Summary,
  Taxonomy,
  Terms,
  CV
} from './layouts'

const renderHugoTemplate = element => {
  return ReactDOMServer.renderToStaticMarkup(element).replace(/&quot;/g, '"')
}

function render(locals) {
  return {
    '/layouts/_default/baseof.html': renderHugoTemplate(<Main />),
    '/layouts/_default/section.html': renderHugoTemplate(<Section />),
    '/layouts/_default/single.html': renderHugoTemplate(<Single />),
    '/layouts/_default/list.html': renderHugoTemplate(<List />),
    '/layouts/_default/taxonomy.html': renderHugoTemplate(<Taxonomy />),
    '/layouts/_default/terms.html': renderHugoTemplate(<Terms />),
    '/layouts/partials/summary.html': renderHugoTemplate(<Summary />),
    '/layouts/cv/single.html': renderHugoTemplate(<CV />),
  }
}

module.exports = render
