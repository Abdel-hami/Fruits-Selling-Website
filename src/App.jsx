import React from 'react'
import Nav from './components/navbar/Nav'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Banner from './components/banner/Banner'
import Banner1 from './components/banner/Banner1'
import Banner2 from './components/banner/Banner2'
import Footer from './components/Footer'
export default function App() {
  return (
    <main>
      <Nav/>
      <Hero/>
      <Menu/>
      <Banner/>
      <Banner1/>
      <Banner2/>
      <Footer/>
    </main>
  )
}
