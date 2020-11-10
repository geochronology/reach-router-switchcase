import React from 'react'

export const Starships = props => {

  return (
    <div>
      <span> the Starships have spoken</span>

      {props.children}

    </div>
  )
}

export const Starship = props => {

  return (
    <div>
      Starship Data
    </div>
  )
}