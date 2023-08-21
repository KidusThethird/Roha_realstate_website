import React, { useState } from 'react';
import Hero2 from '../assets/hero/hero-2.jpg'
import {ShieldCheck, CaretCircleDoubleDown} from "@phosphor-icons/react";
import {Accordion_json} from '../utils/accordion_about';
import { motion , AnimatePresence } from 'framer-motion';



const About = () => {

const [selected, setSelected] = useState(0);


const toggleSelection = (i) =>{
    setSelected(i);
}

  return (
    <div id="about" className='my-14 lg:grid grid-cols-2'>
        <motion.div 
         animate={{
            y: ['0%', '3%', '0%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        className=''>
<img className='mx-auto w-1/2 lg:w-3/4  rounded-t-full border-2 border-orange-500  ' src={Hero2} alt="" />
        </motion.div>
        <div>
            <div className='space-y-3'>
                <h1 className='text-orange-400 text-3xl font-semibold text-center lg:text-left'>Our Value</h1>
                <h1 className='text-blue-700 text-4xl font-semibold text-center lg:text-left'>Value We Give to You</h1>
                <p className='mx-auto lg:mx-0 w-3/4 text-gray-400 font-semibold'>Indulge in a life of unmatched luxury with our world-class amenities. Immerse yourself in the blissful sanctuary of private pools...</p>
            </div>

        {Accordion_json.map((item, i)=>(
 <div

       
 className='mt-6 mx-10 lg:mx-0 py-6 shadow-lg shadow-orange-200 border-t-2  border-r-2 rounded transition-all duration-200'>
 <div className='flex justify-around ' onClick={()=>toggleSelection(i)}>
     <div className='text-blue-700 rounded p-2 my-auto '>
         <ShieldCheck size={22} />
     </div>
     <h1 className='text-blue-700 text-lg text-center px-3 md:text-2xl font-semibold'>{item.title}</h1>
     <div className='text-blue-500 rounded p-2  cursor-pointer' onClick={()=>toggleSelection(i)}>
         <CaretCircleDoubleDown size={22}/>
     </div>
 </div>
 <AnimatePresence>
 <motion.div
       key={selected}
       initial={{ opacity: 0 }}
       animate={{ opacity:1 }}
      
       
    
 className='pt-2 px-4 text-gray-600'>
     <p className='transition-all  duration-200 ease-in-out'>{selected == i && item.description}</p>
 </motion.div>
 </AnimatePresence>
</div>

        ))}


        </div>
    </div>
  )
}

export default About;


