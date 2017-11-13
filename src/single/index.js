import React from 'react'
import { t, partial, Define, Range } from '../hugo.jsx'

export default props => {

  return (
    <Define name="main">
      <main>
        <article>
          <h1>{ t('.Title') }</h1>
          <time>{ t('.Date.Format "02.01.2006 15:04"') }</time>
          <div>
            { t( '.Content' ) }
          </div>
          <div>
            <ul id='tags'>
              <Range array='.Params.tags'>
					<li><a href={ t( '"/tags/" | relLangURL' ) + t('. | urlize') }>{ t('.') }</a> </li>
              </Range>
            </ul>
          </div>
          <div>
            { t('template "_internal/disqus.html" .') }
          </div>
        </article>
      </main>
    </Define>
  )
}
