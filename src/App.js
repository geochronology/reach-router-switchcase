import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  memo
} from 'react'
import { ReactQueryDevtools } from "react-query-devtools";
import { useWhatChanged } from "@simbathesailor/use-what-changed";
import { Router, navigate } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { People, Person } from './components/People'
import { Planets, Planet } from './components/Planets'
import { Starships, Starship } from './components/Starships'
import './App.css';
import Axios from 'axios';


// APP w/ CONTEXT PROVIDER
export default function App() {
  return (
    <>
      <StarwarsProvider>
        <AppContent />
      </StarwarsProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>

  )
}

// CREATE CONTEXT
export const StarwarsContext = createContext()

// CONTEXT PROVIDER
function StarwarsProvider({ children }) {

  // import categories
  const categories = config.categories

  // destructure default category of search selection
  const { people } = categories

  // initialize state
  const [category, setCategory] = useState(people);
  const [theID, setTheID] = useState('');


  return (
    <StarwarsContext.Provider value={{
      category,
      setCategory,
      theID,
      setTheID,
      categories,
      fetchStarwarsData
    }}>
      <AppContent />
    </StarwarsContext.Provider>
  )
}

async function fetchStarwarsData(category, id) {
  if (!id) {
    return
  }

  const response = await Axios.get(
    `https://swapi.dev/api/${category}/${id}`
  ).then(res => res.data)
  // const data = await response.json()
  const data = response
  // console.log(data)
  return data
}


// APP CONTENT
const AppContent = memo(() => {

  // import global state into component
  const { category, setCategory } = useContext(StarwarsContext)
  const { theID, setTheID } = useContext(StarwarsContext)

  // destructure categories
  const { categories: { people, planets, starships } } = useContext(StarwarsContext)

  // log updates to ID and category 
  useWhatChanged([category, theID], 'category, theID')

  // change state on input from user
  const addId = e => setTheID(e.target.value)
  const selectCategory = (e) => setCategory(e.target.value)

  // route the user based on category
  useEffect(() => navigate(`/${category}`), [category])

  // search swapi based on category and id
  const searchSwapi = e => {
    e.preventDefault()
    navigate(`/${category}/${theID}`)
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
          <Person path=':personId' fetchStarwarsData />
        </People>
        <Planets path="/planets/">
          <Planet path=':planetId' fetchStarwarsData />
        </Planets>
        <Starships path='/starships/'>
          <Starship path=':starshipId' fetchStarwarsData />
        </Starships>
      </Router>

    </div>
  )
})

const config = {
  categories: {
    people: 'people',
    planets: 'planets',
    starships: 'starships'
  }
}
