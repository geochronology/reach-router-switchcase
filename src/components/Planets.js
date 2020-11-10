import React from 'react'

export const Planets = props => {

  return (
    <div>
      <span> the Planets have spoken</span>
      {props.children}

    </div>
  )
}


export const Planet = props => {

  return (
    <div>
      Planet Data
    </div>
  )
}