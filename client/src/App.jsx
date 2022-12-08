import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Players from './components/Players'
import Sidebar from './components/Sidebar'


function App() {

  return (
    <div className="App">
      <h1>Generate Teams</h1>
      <Players />
      <Sidebar />
    </div>
  )
}

export default App
