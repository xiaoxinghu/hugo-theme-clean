import React from 'react'
import styles from './_styles.module.scss'
import { t, Range, If } from './hugo.jsx'

export default props => {
  return (
    <article>
      <h2>
        <a href={ t('.Permalink') }>{ t( '.Title' ) }</a>
      </h2>
      <time className='muted'>{ t('.Date.Format "02 Jan 2006"') }</time>
      <Range array='.Params.tags'>
        <a className={styles.tag} href={ t('"/tags/" | relLangURL') + t( '. | urlize' ) }>{ t('.') }</a>
      </Range>
      <div>
        { t('.Summary') }
        <If cond='.Truncated'>
          <a href={ t('.Permalink') }> Read more...</a>
        </If>
      </div>
    </article>
  )
}
