import React, { useState } from 'react';
import Hero2 from '../assets/hero/hero-2.jpg'
import {ShieldCheck, CaretCircleDoubleDown} from "@phosphor-icons/react";
import {Accordion_json} from '../utils/accordion_about';
import { motion } from 'framer-motion';


const About = () => {

const [selected, setSelected] = useState(0);


const toggleSelection = (i) =>{
    setSelected(i);
}

  return (
    <div className='my-14 grid grid-cols-2'>
        <div className=''>
<img className='rounded-t-full border-2 border-orange-500 mx-10' src={Hero2} alt="" />
        </div>
        <div>
            <div className='space-y-3'>
                <h1 className='text-orange-400 text-3xl font-semibold'>Our Value</h1>
                <h1 className='text-blue-700 text-4xl font-semibold'>Value We Give to You</h1>
                <p className='w-3/4 text-gray-400 font-semibold'>Indulge in a life of unmatched luxury with our world-class amenities. Immerse yourself in the blissful sanctuary of private pools...</p>
            </div>

        {Accordion_json.map((item, i)=>(
 <div

       
 className='mt-6 py-6 shadow-lg shadow-orange-200 border-t-2  border-r-2 rounded transition-all duration-200'>
 <div className='flex justify-around'>
     <div className='text-blue-700 rounded p-2 my-auto bg-gray-200 '>
         <ShieldCheck size={18} />
     </div>
     <h1 className='text-blue-700 text-2xl font-semibold'>{item.title}</h1>
     <div className='text-blue-500 rounded p-2 bg-gray-200 cursor-pointer' onClick={()=>toggleSelection(i)}>
         <CaretCircleDoubleDown size={18}/>
     </div>
 </div>
 <div
    
 className='pt-10 px-16 text-gray-600'>
     <p className='transition-all  duration-200 ease-in-out'>{selected == i && item.description}</p>
 </div>
</div>

        ))}


        </div>
    </div>
  )
}

export default About;


