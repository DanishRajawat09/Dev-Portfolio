import React from 'react'

import Hero from './sections/Hero.jsx'
import Navbar from "./layout/Navbar.jsx"
import About from './sections/About.jsx'
const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        {/* <Projects/>
        <Experience/>
        <Testimonials/>
        <Contact/> */}
      </main>
    </div>
  )
}

export default App
