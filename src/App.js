import React, { useState, useEffect } from 'react'
import { useWhatChanged } from "@simbathesailor/use-what-changed";
import { Router, Link, navigate } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { People, Person } from './components/People'
import { Planets, Planet } from './components/Planets'
import { Starships, Starship } from './components/Starships'
import './App.css';

function App() {

  // destructure categories from config
  const { people, planets, starships } = config.categories

  // initialize state
  const [starwarsState, setStarwarsState] = useState(people);
  const [theID, setTheID] = useState('');

  // log updates to ID and starwarsState 
  useWhatChanged([starwarsState, theID], 'starwarsState, theID')

  // change state on input from user
  const addId = e => setTheID(e.target.value)
  const selectCategory = (e) => setStarwarsState(e.target.value)

  // route the user based on starwarsState
  useEffect(() => navigate(`/${starwarsState}`), [starwarsState])

  // search swapi based on category and id
  const searchSwapi = e => {
    e.preventDefault()
    navigate(`/${starwarsState}/${theID}`)
  }

  return (
    <div className="App">
      <header className='App-header' >

        Search For:
        <form onSubmit={searchSwapi}>
          <select onChange={selectCategory} className='form-control-lg bg-dark text-white'>
            <option value={people} >People</option>
            <option value={planets} >Planets</option>
            <option value={starships} >Starships</option>
          </select>
          ID:
        <input type='text' onChange={addId} className='form-control-lg col-sm-1 bg-dark text-white' />
          <button className='btn-lg btn-warning' >Search Item</button>
        </form>
      </header>

      <Router>
        <People path='/people/'>
          <Person path=':personId' />
        </People>
        <Planets path="/planets/">
          <Planet path=':planetId' />
        </Planets>
        <Starships path='/starships/'>
          <Starship path=':starshipId' />
        </Starships>
      </Router>

    </div>
  )
}

const config = {
  categories: {
    people: 'people',
    planets: 'planets',
    starships: 'starships'
  }
}

export default App;