import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People'
import Planet from './components/Planets'
import Starship from './components/Starships'
import { Router, Link } from '@reach/router';

function App() {
  const [starwarsState, setStarwarsState] = useState('')
  const [theID, setTheID] = useState('')

  const selectedState = (e) => {
    setStarwarsState(e.target.value)
  }

  const switchItem = () => {
    switch (starwarsState) {
      case 'people':
        <Link path='/people/' />;
        break;
      case 'planets':
        <Link path="/planets/" />;
        break;
      case 'starships':
        <Link path='/starships/' />;
        break;
      default:
        return null;
    }
  }

  const addId = e => {
    setTheID(e.target.value)
    console.log(theID)
  }
  return (
    <div className='App'>
      <header className='App-header' >
        Search For: &nbsp;
        <select onChange={selectedState} className='form-control-lg bg-dark text-white'>
          {/* Removing "active from People option tag" */}
          <option value='people' >People</option>
          <option value='planets' >Planets</option>
          <option value='starships' >Starships</option>
        </select>

           &nbsp; ID: &nbsp;
           <input type='text' onChange={addId} className='form-control-lg col-sm-1 bg-dark text-white' />&nbsp;
           <button className='btn-lg btn-warning' onClick={switchItem}  >Search Item</button>
        <Router>
          <People path='/people/' />
          <Planet path="/planets/" />
          <Starship path='/starships/' />
        </Router>
      </header>
      {starwarsState}
    </div>
  )
}

export default App;