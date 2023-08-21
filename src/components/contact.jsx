import React from 'react';
import {Phone , ChatCenteredDots , VideoCamera ,  EnvelopeSimple} from "@phosphor-icons/react";
import Hero1 from '../assets/hero/hero-3.jpg';


const Contact = () => {
  return (
    <div className='lg:grid grid-cols-2 p-8'>

        <div>
            <div className='space-y-3'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Contact Us</h1>
                <h1 className='text-blue-700 text-3xl font-semibold'>Easy to contact us</h1>
                <p className='text-gray-700 '>
                Each property in our portfolio is a testament to architectural brilliance. From contemporary masterpieces to timeless classics.   
                </p>

            </div>

            <div className='md:grid grid-cols-2 gap-y-6 py-5 space-y-5'>

                <div className='space-y-4 border-2 md:w-3/4 p-4 hover:scale-105 transition-all duration-200  hover:shadow-xl hover:shadow-orange-600'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><Phone size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-orange-200 text-orange-700 flex justify-center p-2 rounded hover:text-white hover:bg-orange-700 transition-all duration-200'>
                        <button className=' font-semibold '>Call now</button>
                    </div>
                </div>

                <div className='space-y-4 border-2 md:w-3/4 p-4 hover:scale-105 transition-all duration-200  hover:shadow-xl hover:shadow-orange-600'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><ChatCenteredDots size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Chat</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-orange-200 text-orange-700 flex justify-center p-2 rounded hover:text-white hover:bg-orange-700 transition-all duration-200'>
                        <button className=' font-semibold '>Chat now</button>
                    </div>
                </div>

                <div className='space-y-4 border-2 md:w-3/4 p-4 hover:scale-105 transition-all duration-200  hover:shadow-xl hover:shadow-orange-600'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><VideoCamera size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Video Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-orange-200 text-orange-700 flex justify-center p-2 rounded hover:text-white hover:bg-orange-700 transition-all duration-200'>
                        <button className=' font-semibold '>Call now</button>
                    </div>
                </div>

                <div className='space-y-4 border-2 md:w-3/4 p-4 hover:scale-105 transition-all duration-200  hover:shadow-xl hover:shadow-orange-600'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><EnvelopeSimple size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Email</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='cursor-pointer bg-orange-200 text-orange-700 flex justify-center p-2 rounded hover:text-white hover:bg-orange-700 transition-all duration-200'>
                        <button className=' font-semibold '>Email now</button>
                    </div>
                </div>

                
               


            </div>
        </div>

        <div>

            <div className='mx-auto w-1/2 lg:w-3/4 '> 
                <img className='rounded-t-full   border-2 border-orange-500' src={Hero1} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Contact;