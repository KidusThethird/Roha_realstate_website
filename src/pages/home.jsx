
import React from 'react'
import {Hero} from '../components/hero'
import { Brands } from '../components/brands'
import { ShowHomes } from '../components/show-homes'
import About from '../components/about'
import Contact from '../components/contact'


export const Home = () => {
  return (
    <div>
        <Hero />
        <Brands />
        <ShowHomes />
        <About />
        <Contact />

    </div>
  )
}

