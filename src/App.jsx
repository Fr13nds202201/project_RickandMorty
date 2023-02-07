import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import getRandomLocation from './utilis/getRandomLocation.js'
import LocationInfo from './components/LocationInfo.jsx'
import ResidentInfo from './components/ResidenInfo.jsx'


function App() {
 
 const [location, setLocation] = useState()
 const [numberLocation, setnumberLocation] = useState(getRandomLocation())
 const [hasError, sethasError] = useState(false)


 useEffect(() => {
  const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
  axios.get(url)
 .then(res => {
   setLocation(res.data)
   sethasError(false)
   })
 .catch(err => {
    console.log(err)
    sethasError(true)
  })
}, [numberLocation])

const handleSubmit = e =>{
  e.preventDefault()
  setnumberLocation(e.target.inputLocation.value.trim())
  e.target.inputLocation.value=e.target.inputLocation.value.trim()
}

console.log(setnumberLocation)

 return (
    <div className="app">
      <h1 className="app__title">Rick and Morty</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" id='inputLocation' type="text" />
        <button className="form__btn">Search</button>
      </form>
      {
        hasError ?
        <h2 className="app_error">Hey you must provide ah id from 1 to 126 !!!</h2>
        :
        <>
          <LocationInfo location={location} />
            <div className='residents__container'>
            {
              location?.residents.map(url => (
                <ResidentInfo 
                  key={url}
                  url={url}
                />
                ))
            }
            </div>
        </>     
         }
    
    </div>
  )
}

export default App
