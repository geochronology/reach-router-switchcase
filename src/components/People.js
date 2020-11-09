import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

export const People = props => {

  const [peopleData, setPeopleData] = useState([]);

  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${props.theID}`)
  //     .then(response => { setpeopleData(response.data) })

  //   console.log(peopleData)
  // }, []);

  return (
    <div>
      <span> the People have spoken</span>
      {/* <Link to='/people' /> */}

      {props.children}
    </div>
  )
}

export const Person = props => {
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