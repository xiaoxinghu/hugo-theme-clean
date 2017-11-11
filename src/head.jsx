import React from 'react'
import { t, With, If } from './hugo.jsx'


export default prpos => {

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <title>{ t(".Title") }</title>
      <With param=".Site.Params.description">
        <meta name="description" content="{{ . }}" />
      </With>
      <With param=".Site.Params.author">
        <meta name="author" content={ t(".") } />
      </With>
      <link rel="stylesheet" href={ t( ".Site.BaseURL" ) + "css/style.css" } />
      <If cond=".RSSLink">
        <link href={ t( ".RSSLink" ) } rel="feed" type="application/rss+xml" title={ t( ".Site.Title" ) } />
      </If>
      { t( ".Hugo.Generator" ) }
    </head>
  )
}
