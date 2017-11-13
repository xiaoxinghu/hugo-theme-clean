import React from 'react'
import styles from './_styles.module.scss'
import { t } from '../hugo.jsx'

export default props => {
  return (
    <div>
      <a className={styles.container} href={ t(".Site.BaseURL") }>
        <img className={styles.logo} src="http://cdn.huxiaoxing.com/icons/logo.svg" />
        <div className={styles.text}>{ t(".Site.Title") }</div>
      </a>
    </div>
  )
}
