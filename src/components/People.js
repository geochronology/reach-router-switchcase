import React from 'react'

export const People = props => {
  return (
    <div>
      <span> the People have spoken</span>

      {props.children}
    </div>
  )
}

export const Person = props => {

  return (
    <div>
      Person Data
    </div>
  )
}