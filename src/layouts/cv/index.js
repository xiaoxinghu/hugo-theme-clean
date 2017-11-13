import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Define, Range, With } from '../hugo.jsx'

export default props => {

  return (
    <Define name="main">
      <main>
        <article>
          <h1>
            { t('.Title') }
            <With param='.Params.subtitle'>
              <br />
              <span className={ styles.subtitle }>{ t('.') }</span>
            </With>
          </h1>
          <div className={styles.contact_card}>
            <img
              className={styles.avatar}
              src={ `https://s.gravatar.com/avatar/${ t('md5 .Site.Params.email') }?s=120` }/>
            <dl>
              <dt className={styles.flabel}>Email</dt>
              <dd><a href={`mailto:${t('$.Site.Params.email')}`}>{t('$.Site.Params.email')}</a></dd>
              <dt className={styles.flabel}>Website</dt>
              <dd><a href={t('$.Site.BaseURL')}>{t('$.Site.BaseURL')}</a></dd>
              <dt className={styles.flabel}>GitHub</dt>
              <dd><a href={`https://github.com/${t('$.Site.Params.github')}`}>{t('$.Site.Params.github')}</a></dd>
            </dl>
          </div>
          <div className={styles.cv}>
            { t( '.Content' ) }
          </div>
        </article>
      </main>
    </Define>
  )
}
