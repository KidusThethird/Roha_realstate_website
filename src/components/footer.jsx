import React from 'react';
import Logo from '../assets/roha-logo.png';

const Footer = () => {
  return (
    <div className='p-10 justify-between space-y-10 md:space-y-0 md:flex flex-row-reverse'>
        

        <div>
            <h1 className='text-blue-700 text-3xl font-semibold'>Information</h1>
            <p className='text-gray-500'> Bole, Addis Ababa</p>

            <div className=' space-x-4  pt-4  text-xl'>
                <a href="">Property</a>
                <a href="">Services</a>
                <a href="">Product</a>
                <a href="">About Us</a>
            </div>
        </div>

        <div>
            <img src={Logo} className='w-1/3' alt="" />
            <p className='text-gray-500 pt-5'>Unlock Extraordinary Living: <br /> Discover Roha Homes<br/> Made by: Kidus Tesfaye</p>
        </div>

    </div>
  )
}

export default Footer;