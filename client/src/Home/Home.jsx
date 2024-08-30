import React from 'react'

import Hero from "./Hero/Hero"
import About from "./About/About"
import CTA from "./CTA Section/CTA"
import Portfolio from "./Portfolio/Portfolio"
import Clients from "./Clients/Clients"
import Contact from "./Contact/Contact"
import Blogs from "./Blogs/Blogs"
import Newsletter from './Newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <CTA/>
        <Portfolio/>
        <Clients/>
        <Contact/>
        <Newsletter/>
        <Blogs/>
    </div>
  )
}

export default Home