import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Header from './components/Header/Header'
import Products from './components/Products/Products'


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Header />
        <Products />
      </div>

    </>
  )
}

export default App