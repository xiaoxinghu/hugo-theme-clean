import React from 'react'

export const t = content => `{{ ${content} }}`
export const partial = content => `{{ partial "${content}" . }}`

const Aux = props => props.children ? props.children : null

const Closure = props => {
  return (
    <Aux>
      { t(props.c) }
      <Aux>{props.children}</Aux>
      { t("end") }
    </Aux>
  )
}

export const Define = props => {
  return (
    <Closure c={ `define "${props.name}"` }>
      { props.children }
    </Closure>
  )
}

export const Block = props => {
  return (
    <Closure c={ `block "${props.name}" .` }>
      { props.children }
    </Closure>
  )
}

export const With = props => {
  return (
    <Closure c={ `with ${props.param}` }>
      { props.children }
    </Closure>
  )
}

export const If = props => {
  return (
    <Closure c={ `if ${props.cond}` }>
      { props.children }
    </Closure>
  )
}

export const Range = props => {
  return (
    <Closure c={ `range ${props.array}` }>
      { props.children }
    </Closure>
  )
}
