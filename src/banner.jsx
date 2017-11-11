import React from 'react'
import styles from './_styles.module.scss'
import { t } from './hugo.jsx'

export default class Banner extends React.Component {

  render() {
    return (
      <div className={styles.header}>
        <a className={styles.brand_container} href={ t(".Site.BaseURL") }>
          <img className={styles.brand_logo} src="http://cdn.huxiaoxing.com/icons/logo.svg" />
          <div className={styles.brand_text}>{ t(".Site.Title") }</div>
        </a>
      </div>
    )
  }
}
