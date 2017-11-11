import React from 'react'
import styles from './_styles.module.scss'
import { t, partial, Define, Range } from './hugo.jsx'

export default class Section extends React.Component {

  render() {
    return (
      <Define name="main">
        <main>
          { t(".Content") }
          <ul class="contents">
            <Range array=".Paginator.Pages">
              <li>{ t( ".Title" ) }
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
}
