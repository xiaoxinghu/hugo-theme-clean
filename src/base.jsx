import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Block } from './hugo.jsx'
import Head from './head.jsx'
import Banner from './banner.jsx'
import Nav from './nav.jsx'
import Footer from './footer.jsx'

export default props => {
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
      <Footer />
    </html>
  )
}
