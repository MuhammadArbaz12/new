import React from 'react'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './Header/Header'
import Home from "./Pages/Home"
import Store from './Pages/Store'
import About from "./Pages/About"
import Blogs from "./Pages/Blogs"
import MobileHeader from './Header/MobileHeader'





const App = () => {

  return (
    <>
      <Router>
        <MobileHeader />

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Product' element={<Store />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Blogs />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
