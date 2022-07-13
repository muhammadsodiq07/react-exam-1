import React from 'react'
import Advertisement from '../Advertising/Advertising'
import Deal from '../Deal/Deal'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import HeroMiddle from '../Hero/HeroMiddle'
import Products from '../Products/Products'
import Rated from '../Rated/Rated'
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
        <Advertisement/>
        <Rated/>
    </div>
  )
}

export default Home
