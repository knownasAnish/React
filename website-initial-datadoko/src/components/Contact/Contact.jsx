import React from "react";

function Contact(){
    return(
        <div className='w-full flex justify-center'>
            <div className='w-4/6 bg-orange-500 text-black font-semibold flex flex-col p-20 gap-10 text-2xl rounded-3xl'>
                <p className='ml-[400px]'>Location: <span className='font-extrabold text-orange-100'>Biratnagar-3</span></p>
                <p className='ml-[400px]'>Email: <span className='font-extrabold text-orange-100'>datadoko2024@gmail.com</span></p>
                <p className='ml-[400px]'>Phone: <span className='font-extrabold text-orange-100'>9852039935</span></p>
            </div>
        </div>
    )
}

export default Contact