import React, { useState, useEffect } from 'react'
import { useWhatChanged } from "@simbathesailor/use-what-changed";
import { Router, Link, navigate } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People'
import Planet from './components/Planets'
import Starship from './components/Starships'
import './App.css';



function App() {
  const [starwarsState, setStarwarsState] = useState('');
  const [theID, setTheID] = useState('')

  // log updates to ID and starwarsState 
  useWhatChanged([starwarsState, theID], 'starwarsState, theID')

  // change state on input from user
  const addId = e => setTheID(e.target.value)
  const selectCategory = (e) => setStarwarsState(e.target.value)

  // route the user based on starwarsState
  useEffect(() => {
    console.log(starwarsState)
    navigate(`${starwarsState}`)
  }, [starwarsState])



  // const switchItem = () => {
  //   switch (starwarsState) {
  //     case 'people':
  //       <Link path='/people/' />;
  //       break;
  //     case 'planets':
  //       <Link path="/planets/" />;
  //       break;
  //     case 'starships':
  //       <Link path='/starships/' />;
  //       break;
  //     default:
  //       return null;
  //   }
  // }


  return (
    <div className="App">
      <header className='App-header' >

        Search For: &nbsp;
        <select onChange={selectCategory} className='form-control-lg bg-dark text-white'>
          <option value='people' >People</option>
          <option value='planets' >Planets</option>
          <option value='starships' >Starships</option>
        </select>
          ID:
        <input type='text' onChange={addId} className='form-control-lg col-sm-1 bg-dark text-white' />
        <button className='btn-lg btn-warning' >Search Item</button>
        {/* <button className='btn-lg btn-warning' onClick={switchItem}  >Search Item</button> */}
      </header>

      <Router>
        <People path='/people/' />
        <Planet path="/planets/" />
        <Starship path='/starships/' />
      </Router>

    </div>
  )
}

export default App;