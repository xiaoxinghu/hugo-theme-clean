import React from 'react'
import { t, partial, Define, Range } from '../hugo.jsx'

export default props => {

  return (
    <Define name="main">
      <main>
        <ul>
          <Range array='$name, $taxonomy := .Site.Taxonomies.tags'>
            <li>
              <a href={ t('"/tags/" | relLangURL') + t('$name | urlize') }>
                { t( '$name' ) }
              </a>
            </li>
          </Range>
        </ul>
      </main>
    </Define>
  )
}
