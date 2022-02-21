import React from 'react'
import Navbar from './navbar/index'
import Hero from './hero/index'
import Modern from './modern/index'
import Trending from './trending/index'
import Project from './project/index'
import Team from './team/index'
import Gallery from './gallery/index'
import Exhibition from './exhibition/index'
import Footer from './footer/index'
function index() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Modern/>
    <Trending/>
    <Project/>
    <Team/>
    <Gallery/>
    <Exhibition/>
    <Footer/>
    </>
  )
}

export default index