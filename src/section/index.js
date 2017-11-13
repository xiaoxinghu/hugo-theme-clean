import React from 'react'
import { t, partial, Define, Range } from '../hugo.jsx'

export default props => {

  return (
    <Define name="main">
      <main>
        { t(".Content") }
        <Range array=".Paginator.Pages">
          <div>
            { partial( "summary.html" ) }
          </div>
        </Range>
        { partial( "pagination.html" ) }
      </main>
    </Define>
  )
}
