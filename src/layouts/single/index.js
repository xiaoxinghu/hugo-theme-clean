import React from 'react'
import { t, partial, Define, Range, With } from '../hugo.jsx'

export default props => {

  return (
    <Define name="main">
      <main>
        <article>
          <h1>{ t('.Title') }</h1>
          <time>{ t('.Date.Format "Mon Jan 2, 2006"') }</time>
          <p>{ t('.WordCount') } words</p>

          <With param='.Params.tags'>
            <ul id="tags">
              <Range array='.'>
                <li> <a href={ t( '"tags" | absURL' ) + t('. | urlize') }>{ t('.') }</a> </li>
              </Range>
            </ul>
          </With>
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
