import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Aboutme from './components/aboutme/aboutme'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav />
        <Aboutme />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App