import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Block } from '../hugo.jsx'
import Head from '../head'
import Banner from '../banner'
import Navbar from '../navbar'
import Footer from '../footer'

export default props => {
  return (
    <html lang="en-us">
      <Head />
      <body>
        <header className={ styles.header }>
          <div className={ styles.header_content }>
            <Banner />
            <Navbar />
          </div>
        </header>
        <Block name="main" />
        { partial("sidebar.html") }
      </body>
      <footer className={ styles.footer }>
        <div className={ styles.footer_content }>
          <Footer />
        </div>
      </footer>
    </html>
  )
}
