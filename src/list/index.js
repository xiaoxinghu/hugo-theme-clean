import React from 'react'
import { t, partial, Define, Range } from '../hugo.jsx'

export default props => {

    return (
      <Define name="main">
        <main>
          { t(".Content") }
          <ul className="contents">
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
