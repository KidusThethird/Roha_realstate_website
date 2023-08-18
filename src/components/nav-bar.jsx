import React from 'react'
import Logo from '../assets/roha-logo.png'

export const Navbar = () => {
  return (
    <div className='flex justify-around pt-3 bg-gray-700 fixed w-full z-50'>
       <div className='w-1/12'>
        <img src={Logo} alt="" />
        </div>
        <div className='space-x-8 text-orange-300 text-xl'>
            <a className='' href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className='bg-orange-400 text-white text-base rounded px-3 py-1'>Contact</button>
            </div> 
    </div>
  )
}

