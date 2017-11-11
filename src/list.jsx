import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Define, Range } from './hugo.jsx'

export default props => {

    return (
      <Define name="main">
        <main>
          { t(".Content") }
          <ul class="contents">
            <Range array=".Paginator.Pages">
              <li>
                <div>
                  { partial( "summary.html" ) }
                </div>
              </li>
            </Range>
          </ul>
          { partial( "pagination.html" ) }
        </main>
      </Define>
    )
}