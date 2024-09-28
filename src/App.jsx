import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'
import Masculino from './components/Masculino'
import Femenino from './components/Femenino'
import Unisex from './components/Unisex'
import ItemDetailContainer from './components/ItemDetailContainer'
import CountComponent from './components/CountComponent';

function App() {

  return (
    <>
      <BrowserRouter>
        <h1 className='h1-Titulo'>Perfumes TOP</h1>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<ItemListContainer/>}/>
          <Route exact path='/masculino' element={<Masculino/>}/>
          <Route exact path='/femenino' element={<Femenino/>}/>
          <Route exact path='/unisex' element={<Unisex/>}/>
          <Route exact path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route exact path='/checkout' element={<CartWidget/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
