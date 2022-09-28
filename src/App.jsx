import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Aboutme from './components/aboutme/aboutme'
import Experience from './components/aboutme/aboutme'
import Services from './components/aboutme/aboutme'
import Portfolio from './components/aboutme/aboutme'
import Contact from './components/aboutme/aboutme'
import Footer from './components/aboutme/aboutme'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <Aboutme />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App