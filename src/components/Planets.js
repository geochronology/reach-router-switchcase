import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

export const Planets = props => {

  // const [planetData, setPlanetData] = useState([]);

  return (
    <div>
      <span> the Planets have spoken</span>
      {/* <Link to='/people' /> */}
      {props.children}

    </div>
  )
}


export const Planet = props => {
  // useEffect(() => {
  //   axios.get(`https://swapi.dev/api/people/${props.theID}`)
  //     .then(response => { setpeopleData(response.data) })

  //   console.log(peopleData)
  // }, []);

  return (
    <div>
      Planet Data
    </div>
  )
}