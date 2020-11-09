import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

export const Starships = props => {

  // const [starshipData, setStarshipData] = useState([]);
  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${props.theID}`)
  //     .then(response => { setpeopleData(response.data) })

  //   console.log(peopleData)
  // }, []);
  return (
    <div>
      <span> the Starships have spoken</span>
      {/* <Link to='/people' /> */}

      {props.children}

    </div>
  )
}

export const Starship = props => {
  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${props.theID}`)
  //     .then(response => { setpeopleData(response.data) })

  //   console.log(peopleData)
  // }, []);

  return (
    <div>
      Starship Data
    </div>
  )
}