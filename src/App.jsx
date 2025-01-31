import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar/Navbar'
import Startbootstrap from './components/StartBootstrap/Startbootstrap'
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/about/About';

import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <>
      <Navbar />
      <Startbootstrap />
      <Routes>
        <Route path='/portfolio' element={<Portfolio/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
