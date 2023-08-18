import React  from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination , Navigation ,  Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

import 'swiper/css/pagination';

import {Residents} from '../utils/residents'

export const ShowHomes = () => {

  return (
    <div className='px-5  '>
        <h1 className='text-orange-400 text-2xl font-semibold'>Best Choices</h1>
        <h1 className='text-blue-900 text-3xl font-bold'>Popular Residencies</h1>

        <div className='relative flex py-5 justify-end' >
        

<div className='text-xl space-x-5 pr-20'>
        <button  className='review-swiper-button-prev text-blue-500 py-1 px-2 shadow-xl border-t-2 border-l-2 border-orange-300 shadow-orange-400  rounded-lg'>{"<"}</button>
        <button  className='review-swiper-button-next text-blue-500 py-1 px-2 shadow-xl border-t-2 border-l-2 border-orange-300 shadow-orange-400  rounded-lg'>{">"}</button>
    </div>
</div>

    <div className='flex justify-between '>

    <Swiper
    
    modules={[Navigation, Pagination, Scrollbar, A11y]}
     pagination={{ clickable: true }}
     navigation={{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
      }}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
          >




    {Residents.map((resident)=>{
 return( <SwiperSlide  >
    
   
<div className='p-8'>
    <img className='rounded-2xl' src={resident.image} alt="" />
  <div className='flex gap-1 text-lg font-bold p-2 text-gray-500'> 
    <h1 className='text-blue-600'>$</h1> <h1>{resident.price}</h1>
  </div>
    <h1 className=' text-orange-400 text-2xl font-bold'>{resident.place}</h1>
    <p className=' text-xs text-gray-500 font-semibold'>{resident.description}</p>
</div>
</SwiperSlide>)
    })
    }
        
 </Swiper> 

    </div>
    </div>
  )
}




