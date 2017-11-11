import React from 'react'
import styles from './_styles.module.scss'
import { t, Range } from './hugo.jsx'

export default class Nav extends React.Component {

  render() {
    return (
      <nav>
        <ul className={styles.navbar}>
          <Range array=".Site.Menus.main">
            <li className={styles.navbar_link}><a href={t(".URL | relURL")}>{ t(".Name") }</a></li>
          </Range>
        </ul>
      </nav>
    )
  }
}
