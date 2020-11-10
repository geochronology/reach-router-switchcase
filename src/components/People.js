import React from 'react'
import { StarwarsContext, StarwarsProvider } from "../App"

export const People = props => {
  return (
    <div>
      <span> the People have spoken</span>

      {props.children}
    </div>
  )
}

export const Person = () => {

  const { category, theID } = React.useContext(StarwarsContext)

  return (
    <div>
      /{category}/{theID}
    </div>
  )
}