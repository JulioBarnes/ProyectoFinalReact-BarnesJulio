import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import CountComponent from './components/CountComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Perfumes TOP</h1>
      <NavBar/>
      <CountComponent/>
    </>
  )
}

export default App
