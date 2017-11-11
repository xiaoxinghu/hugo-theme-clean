import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Block } from './hugo.jsx'
import Head from './head.jsx'
import Banner from './banner.jsx'
import Nav from './nav.jsx'

export default class Base extends React.Component {

  render() {
    return (
      <html lang="en-us">
        <Head />
        <body>
          <header>
            <Banner />
            <Nav />
          </header>
          <Block name="main" />
          { partial("sidebar.html") }
        </body>
          { partial("footer.html") }
      </html>
    )
  }
}
