import React from 'react';
import Brand1 from '../assets/brand/brand1.png';
import Brand2 from '../assets/brand/brand2.png';
import Brand3 from '../assets/brand/brand3.png';
import Brand4 from '../assets/brand/brand4.png';

export const Brands = () => {
  return (
    <div className='justify-around flex space-x-10 px-5'>

<img className='w-fit ' src={Brand1} alt="" />
<img className='w-fit' src={Brand2} alt="" />
<img className='w-fit' src={Brand3} alt="" />
<img className='w-fit' src={Brand4} alt="" />
    </div>
  )
}

