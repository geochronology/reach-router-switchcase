import React from 'react'
import { StarwarsContext, StarwarsProvider } from "../App"

export const Starships = props => {

  return (
    <div>
      <span> the Starships have spoken</span>

      {props.children}

    </div>
  )
}

export const Starship = () => {

  const { category, theID } = React.useContext(StarwarsContext)

  return (
    <div>
      /{category}/{theID}
    </div>
  )
}