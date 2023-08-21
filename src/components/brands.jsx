import React from 'react';
import Brand1 from '../assets/brand/brand1.png';
import Brand2 from '../assets/brand/brand2.png';
import Brand3 from '../assets/brand/brand3.png';
import Brand4 from '../assets/brand/brand4.png';

export const Brands = () => {
  return (
    <div className=' md:px-5 py-5 w-full'>
<div className=' md:flex  md:space-x-10 justify-between w-fit md:w-full mx-auto'>

<img className='md:w-fit md:mx-0 w-1/2 mx-auto ' src={Brand1} alt="" />
<img className='md:w-fit md:mx-0 w-1/2 mx-auto ' src={Brand2} alt="" />
<img className='md:w-fit md:mx-0 w-1/2 mx-auto' src={Brand3} alt="" />
<img className='md:w-fit md:mx-0 w-1/2 mx-auto ' src={Brand4} alt="" />
</div>
    </div>
  )
}

