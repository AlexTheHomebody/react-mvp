import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Players from './components/Players'
import Sidebar from './components/Sidebar'
import { useEffect } from "react";



function App() {
  const [players, setPlayers] = useState([])

  useEffect(() =>{
    const base_url = 'http://localhost:9999/'
    fetch(base_url + 'players')
        .then(res => res.json())
        .then(json => setPlayers(json)
        )
}, [])
  return (
    <div className='full'>
        <h1 className='header'>Game Night Players</h1>
        <div className='main'>
          <div className="App">
            <Players players={players}/>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
    </div>
  )
}



export default App
