import React, { useState } from 'react'
import Logo from '../assets/roha-logo.png';
import {List , X} from "@phosphor-icons/react";


export const Navbar = () => {


  const [dropDownList, setDropDownList] =useState(false);

  const DropDownListToggle = () =>{

    if(dropDownList == 0){
      setDropDownList(true);
    }
    else{
      setDropDownList(false);
    }
  }

  return (
    <div className='flex justify-around py-1 bg-blue-900 bg-opacity-70 fixed w-full z-50'>
       <div className='w-1/6 lg:w-1/12'>
        <a href="#hero">
        <img src={Logo} alt="" />
        </a>
        </div>
        <div className='hidden lg:block space-x-8 text-orange-300 text-xl'>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500 ' href="#residencie">Residencies</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="#about">Our Value</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="#contact">Contact Us</a>
            <a className=' hover:shadow-lg pb-4 px-1 rounded hover:bg-blue-900 hover:shadow-orange-500' href="#getStarted">Get Started</a>
            <button className='bg-orange-400 hover:scale-110 transition-all duration-200 text-white text-base rounded px-3 py-1'>Contact</button>
            </div>


{!dropDownList && 

            <div className='lg:hidden text-orange-400 cursor-pointer' onClick={()=>DropDownListToggle()}>
              <List size={32}/>
            </div>}

     {dropDownList &&       
            <div className='lg:hidden text-orange-400 cursor-pointer' onClick={()=>DropDownListToggle()}>
              <X size={32}/>
            </div>

            
}
{dropDownList &&  <div  onClick={()=>DropDownListToggle()} className='lg:hidden absolute text-white flex-col flex top-12 right-24 bg-orange-600 bg-opacity-80 p-10 rounded-2xl'>
            <a className='  py-2 px-1 rounded hover:bg-blue-900 ' href="#residencie">Residencies</a>
            <a className='  py-2 px-1 rounded hover:bg-blue-900 ' href="#about">Our Value</a>
            <a className='  py-2 px-1 rounded hover:bg-blue-900 ' href="#contact">Contact Us</a>
            <a className='  py-2 px-1 rounded hover:bg-blue-900 ' href="#getStarted">Get Started</a>
            <button className='bg-orange-400 hover:scale-110 transition-all duration-200 text-white text-base rounded px-3 py-1'>Contact</button>
            </div>}
           


    </div>
  )
}

