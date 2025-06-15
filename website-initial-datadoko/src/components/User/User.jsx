import React from 'react'
import { useParams } from 'react-router-dom'

function User(){
    const { userId } = useParams()
    return(
        <div className='w-full flex justify-center'>
            <div className='w-4/6 text-center text-2xl bg-gray-700 p-5 text-white font-bold rounded-3xl'> 
                User: <span className='font-black text-4xl p-5 m-5'>{userId}</span>
            </div>
        </div>
    )   
}
export default User