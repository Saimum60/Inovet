import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import BannerImg from '../components/banner/BannerImg'
import Feature from '../components/feature/Feature'
import FeatureLite from '../components/feature/FeatureLite'
import Work from '../components/works/Work'
import Pricing from '../components/works/procing/Pricing'
import Footer from '../components/footer/Footer'
import Analytics from '../components/analytics/Analytics'
import Process from '../components/process/Process'
import Price from '../components/price/Price'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <BannerImg/>
    <Feature/>
    <FeatureLite/>
    <Process/>
    <Work/>
    <Price/>
    <Analytics/>
    <Footer/>
    </>
  )
}

export default Home