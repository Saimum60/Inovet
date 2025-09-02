import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Banner from '../components/banner/Banner'
import BannerImg from '../components/banner/BannerImg'
import Feature from '../components/feature/Feature'
import FeatureLite from '../components/feature/FeatureLite'
import Work from '../components/works/Work'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <BannerImg/>
    <Feature/>
    <FeatureLite/>
    <Work/>
    </>
  )
}

export default Home