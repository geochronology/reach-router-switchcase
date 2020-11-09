import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from '@reach/router';

const People = props => {

  const [peopleData, setpeopleData] = useState([]);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${props.theID}`)
      .then(response => { setpeopleData(response.data) })

    console.log(peopleData)
  }, []);

  return (
    <div>
      <span> the People have spoken</span>
      {/* <Link to='/people' /> */}
    </div>
  )
}

export default People;