import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import ItemList from './components/ItemList'
import CartWidget from './components/CartWidget'

function App() {

  return (
    <>
      <BrowserRouter>
        <h1>Perfumes TOP</h1>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemList/>}/>
          <Route exact path='/checkout' element={<CartWidget/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
