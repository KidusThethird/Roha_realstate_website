import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import House1 from '../assets/houses/house1.jpg';
import House2 from '../assets/houses/house2.jpg';
import House3 from '../assets/houses/house3.jpg';
import House4 from '../assets/houses/house4.jpg';

import {Residents} from '../utils/residents'

const myArray = [1, 2 , 3 , 5 , 6];

export const ShowHomes = () => {
  return (
    <div className='px-5  '>
        <h1 className='text-orange-400 text-2xl font-semibold'>Best Choices</h1>
        <h1 className='text-blue-900 text-3xl font-bold'>Popular Residencies</h1>


    <div className='flex justify-between '>


    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >


    {Residents.map((resident)=>{
return        <SwiperSlide>

<div className='p-8'>
    <img className='rounded-2xl' src={resident.image} alt="" />
  <div className='flex gap-1 text-lg font-bold p-2 text-gray-500'> 
    <h1 className='text-orange-400'>$</h1> <h1>{resident.price}</h1>
  </div>
    <h1 className=' text-blue-900 text-2xl font-bold'>{resident.place}</h1>
    <p className=' text-xs text-gray-500 font-semibold'>{resident.description}</p>
</div>
</SwiperSlide>
    })}


        
        
 </Swiper>
    </div>
    </div>
  )
}

