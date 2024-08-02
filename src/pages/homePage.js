import React from 'react'
import AsosiySwiper from '../mainPartsOfPage/swiper_slider/asosiy'
import PastkiSlider from '../mainPartsOfPage/swiper_slider/b_of_asosiy'
import Product from '../mainPartsOfPage/swiper_slider/product'
import Xizmat from './home_page_items/xizmat'
import About from './home_page_items/about'
import Tarmoq from './home_page_items/tarmoq'
import Aloqa from './home_page_items/aloqa'
import {Element} from 'react-scroll';

export default function HomePage() {
  return (
    <div>
      <AsosiySwiper/>
      <PastkiSlider/>

      <Element name='mahsulot' className='mahsulot'>
        <Product/>
      </Element>

      <Element name='k_xizmat' className='k_xizmat'>
        <Xizmat/>
      </Element>

      <Element name='haqida' className='haqida'>
        <About/>
      </Element>

      <Tarmoq/>

      <Element name='k_aloqa' className='k_aloqa'>
        <Aloqa/>
      </Element>

    </div>
  )
}
