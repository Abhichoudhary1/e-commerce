import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Products from './components/Products'
import product from './components/product'
import {Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/Products' Component={Products}/>
        <Route exact path='/Products/:id' Component={product}/>
          
         
       

      </Routes>

    </div>
  )
}

export default App
