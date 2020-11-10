import React from 'react'
import { useQuery } from "react-query";
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

  const { category, theID, fetchStarwarsData } = React.useContext(StarwarsContext)

  const { data, isLoading, error } = useQuery([category, theID], fetchStarwarsData)

  if (isLoading) return <div>loading...</div>
  if (error) return <div>oop!! error ocurred</div>

  return (
    <div>
      <h1>/{category}/{theID}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>

    </div>
  )
}