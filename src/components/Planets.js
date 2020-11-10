import React from 'react'
import { StarwarsContext, StarwarsProvider } from "../App"

export const Planets = props => {

  return (
    <div>
      <span> the Planets have spoken</span>
      {props.children}

    </div>
  )
}


export const Planet = props => {

  const { category, theID } = React.useContext(StarwarsContext)

  return (
    <div>
      /{category}/{theID}
    </div>
  )
}