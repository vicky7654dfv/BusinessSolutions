import React from 'react'
import Header from '../../components/Header/HEader'
import Banner from '../../components/Banner/Banner'
import Services from '../../components/Services/Services'
import Projects from '../../components/Projects/Projects'
import Leaders from '../../components/Leaders/Leaders'
import Ticker from '../../components/Ticker/Ticker'
import Footer from '../../components/Footer/Footer'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Banner />
        <Services />
        <Projects />
        <Leaders />
        <Ticker />
        <Footer />
    </div>
  )
}
