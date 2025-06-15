import React from 'react'
import img1 from '../assets/about2.jpg'

function Card(){
    return(
        <div className='w-3/5 h-3/5 text-black rounded-2xl border border-2 border-gray-400'>
            <div className='w-full h-full bg-white dark:bg-black text-black dark:text-white rounded-2xl flex flex-col items-center p-3'>
                <div className='w-2/3 h-2/3 dark:bg-white rounded-full p-1'>
                    <img src={img1} className='h-full w-full rounded-full' alt="" />
                </div>
                <div className=' w-2/3 h-1/3 p-4 text-center'>
                    <p className='text-xl font-bold'>Anish Kumar Das</p>
                    <p className='text-lg italic'>Web Developer</p>
                    <p className='text-lg italic'>Business Man</p>
                </div>
            </div>
        </div>
    )
}

export default Card