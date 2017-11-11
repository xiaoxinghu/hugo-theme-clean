import React from 'react'
import styles from './_styles.module.scss'
import { t } from './hugo.jsx'

export default props => {

  return (
    <div className={styles.footer}>
      <form className={styles.ddg} name="x" action="//duckduckgo.com/">
        <input type="hidden" value="huxiaoxing.com" name="sites"></input>
        <input type="hidden" value="1" name="kh"></input>
        <input type="hidden" value="1" name="kn"></input>
        <input type="hidden" value="1" name="kac"></input>
        <input type="search" placeholder="Search" name="q"></input>
        <button class="button" type="submit">GO</button>
      </form>
      <div className={styles.footer_contact}>
        <a href="mailto:dawnstar.hu@gmail.com">
          <i className="fa fa-envelope-o"/>
        </a>
        <a href="https://github.com/xiaoxinghu">
          <i className="fa fa-github-alt"/>
        </a>
        <a href="https://twitter.com/xiaoxinghu">
          <i className="fa fa-twitter"/>
        </a>
      </div>
      <p className={styles.copyright}>
        All materials &copy; <script>document.write(new Date().getFullYear());</script>, Xiaoxing Hu.
      </p>
    </div>
  )
}
