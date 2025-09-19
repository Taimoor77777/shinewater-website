import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import About from './components/About'
import SectionOne from './components/sectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <Navbar />
      <Hero />
      <About/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
      
    </>
  )
}

export default App
