import React from 'react'
import Deal from '../Deal/Deal'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import HeroMiddle from '../Hero/HeroMiddle'
import Products from '../Products/Products'
import TopCategories from '../TopCategories/TopCategories'

function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <HeroMiddle/>
        <TopCategories/>
        <Deal/>
        <Products/>
    </div>
  )
}

export default Home
