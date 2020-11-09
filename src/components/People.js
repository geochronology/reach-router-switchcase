import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

export const People = props => {
  return (
    <div>
      <span> the People have spoken</span>
      {/* <Link to='/people' /> */}

      {props.children}
    </div>
  )
}

export const Person = props => {
  // const [name, setName] = useState('')

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${props.theID}`)
  //     .then(response => { setpeopleData(response.data) })

  //   console.log(peopleData)
  // }, []);

  return (
    <div>
      Person Data
    </div>
  )
}