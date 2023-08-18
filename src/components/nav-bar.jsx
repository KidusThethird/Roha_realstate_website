import React from 'react'
import Logo from '../assets/roha-logo.png'

export const Navbar = () => {
  return (
    <div className='flex justify-around py-1 bg-blue-900 bg-opacity-70 fixed w-full z-50'>
       <div className='w-1/12'>
        <img src={Logo} alt="" />
        </div>
        <div className='space-x-8 text-orange-300 text-xl'>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="">Residencies</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="">Our Value</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="">Contact Us</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="">Get Started</a>
            <button className='bg-orange-400 hover:scale-110 transition-all duration-200 text-white text-base rounded px-3 py-1'>Contact</button>
            </div> 
    </div>
  )
}

