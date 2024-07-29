import React from 'react'
import AsosiySwiper from '../mainPartsOfPage/swiper_slider/asosiy'
import PastkiSlider from '../mainPartsOfPage/swiper_slider/b_of_asosiy'
import Product from '../mainPartsOfPage/swiper_slider/product'
import Xizmat from './home_page_items/xizmat'
import About from './home_page_items/about'
import Tarmoq from './home_page_items/tarmoq'
import Aloqa from './home_page_items/aloqa'

export default function HomePage() {
  return (
    <div>
      <AsosiySwiper/>
      <PastkiSlider/>
      <Product/>
      <Xizmat/>
      <About/>
      <Tarmoq/>
      <Aloqa/>
    </div>
  )
}
