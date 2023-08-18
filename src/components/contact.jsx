import React from 'react';
import {Phone} from "@phosphor-icons/react";
import Hero1 from '../assets/hero/hero-1.jpg';

const Contact = () => {
  return (
    <div className='grid grid-cols-2 p-8'>

        <div>
            <div className='space-y-3'>
                <h1 className='text-orange-500 text-2xl font-semibold'>Contact Us</h1>
                <h1 className='text-blue-700 text-3xl font-semibold'>Easy to contact us</h1>
                <p className='text-gray-700 '>
                Each property in our portfolio is a testament to architectural brilliance. From contemporary masterpieces to timeless classics.   
                </p>

            </div>

            <div className='grid grid-cols-2 gap-y-6 py-5'>

                <div className='space-y-4 border-2 w-3/4 p-4'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><Phone size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='bg-orange-200  flex justify-center p-2 rounded'>
                        <button className='text-orange-700 font-semibold'>Call now</button>
                    </div>
                </div>

                
                <div className='space-y-4 border-2 w-3/4 p-4'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><Phone size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='bg-orange-200  flex justify-center p-2 rounded'>
                        <button className='text-orange-700 font-semibold'>Call now</button>
                    </div>
                </div>

                
                <div className='space-y-4 border-2 w-3/4 p-4'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><Phone size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='bg-orange-200  flex justify-center p-2 rounded'>
                        <button className='text-orange-700 font-semibold'>Call now</button>
                    </div>
                </div>

                
                <div className='space-y-4 border-2 w-3/4 p-4'>
                    <div className='flex '>
                        <div className='text-orange-700 p-1 mr-7 my-auto rounded bg-orange-200'><Phone size={32} /></div> 
                        <div>
                            <h1 className='text-orange-700 text-xl font-semibold'>Call</h1>
                            <p className='text-gray-600'>0920112255</p>
                        </div>
                    </div>

                    <div className='bg-orange-200  flex justify-center p-2 rounded'>
                        <button className='text-orange-700 font-semibold'>Call now</button>
                    </div>
                </div>


            </div>
        </div>

        <div>

            <div className='mx-20 rounded-t-full overflow-hidden  border-2 border-orange-500'> 
                <img className='' src={Hero1} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Contact;