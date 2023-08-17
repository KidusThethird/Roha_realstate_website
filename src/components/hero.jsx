import React from 'react'
import {MapPin} from "@phosphor-icons/react";

 export const Hero = () => {
  return (
    <div className='grid grid-cols-2 gap-x-6 px-10 bg-gray-700 py-10'>

        <div className='col-span-1 pt-10'>
            <h1 className='text-7xl text-white w-3/4 font-semibold'>
                Discover <br></br> Most Suitable Property
            </h1>
            
            <div className='pt-24 text-gray-300'>
            <p >Find a variety of properties that suit you very easily</p>
            <p>Forger all difficulties in finding a residence for you</p>
            </div>
      
            <div className='flex mt-7 bg-white px-7 py-4 w-fit space-x-7 rounded shadow-2xl shadow-orange-300'>
                <div className='text-orange-600 font-bold'>
                    <MapPin  size={32}/>
                </div>
                <input type="text" name="" id="" />
                <button className='bg-orange-600 px-4 py-2 text-white rounded'>Search</button>
              
            </div>
        </div>

        <div>

        </div>

    </div>
  )
}

