import React from 'react'
import {MapPin} from "@phosphor-icons/react";
import Hero1 from '../assets/hero/hero-1.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';


 export const Hero = () => {
  return (
    <div id="hero" className='lg:grid grid-cols-2 gap-x-6 px-10 bg-blue-900 py-10 md:py-20'>

        <div className='col-span-1 pt-10 w-full  '>
            <motion.div
              animate={{
                y: ['0%', '3%', '0%'],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
            <h1 className='mx-auto text-4xl md:text-7xl text-white  md:w-3/4 font-semibold'>
                Discover <br></br> Most Suitable Property
            </h1>
            </motion.div>
            
            <div className='  text-center md:block pt-12 md:pt-24 text-gray-300 w-full  '>
            <p className='' >Find a variety of properties that suit you very easily</p>
            <p className=''>Forger all difficulties in finding a residence for you</p>
            </div>
      
            <div className='mx-auto flex mt-7 bg-white md:px-7 px-2 py-4 w-fit space-x-2 md:space-x-7 rounded shadow-lg shadow-orange-300'>
                <div className='text-orange-600 font-bold '>
                    <MapPin  size={32}/>
                </div>
                <div className='w-1/2 items-center my-auto'>
                <input type="text" name="" id="" size={10}/>
                </div>
                <button className='bg-orange-600 px-4 py-2 text-white rounded hover:scale-110 transition-all duration-200'>Search</button>
              
            </div>


            <div className='py-10 flex space-x-8 text-white w-fit mx-auto'>
                <div >
                    <div className='flex text-2xl md:text-4xl'>
                    <h1 className='pr-2'>
                    <CountUp start={0} end={9000} duration={4} />
                        </h1> <h1 className='text-orange-400'> +</h1>
                    </div>
                    <p>Premiun Product</p>
                </div>
                <div>
                    <div className='flex text-2xl md:text-4xl'>
                    <h1 className='pr-2'> 
                    <CountUp start={0} end={2000} duration={4} />
                    </h1> <h1 className='text-orange-400'> +</h1>
                    </div>
                    <p>Happy Customer</p>
                </div>
                <div>
                    <div className='flex text-2xl md:text-4xl'>
                    <h1 className='pr-2'>
                    <CountUp start={0} end={28} duration={4} />
                        </h1> <h1 className='text-orange-400'> +</h1>
                    </div>
                    <p>Awards Winning</p>
                </div>
            </div>
        </div>

        <div>


       
        <AnimatePresence>
               <motion.div
               
                    
               animate={{
                y: ['0%', '3%', '0%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
                

                 className='w-fit mx-auto px-10'>
                <img className='rounded-t-full border-4  border-orange-400' src={Hero1} alt="" />
                </motion.div> 
                </AnimatePresence>

        </div>

    </div>
  )
}

