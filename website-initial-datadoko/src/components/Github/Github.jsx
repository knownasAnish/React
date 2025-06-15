import React from "react";
import { useLoaderData } from 'react-router-dom'

function Github(){
    const data = useLoaderData()
    console.log(data)
    return(
        <div className="w-full flex justify-center">
            <div className='w-4/6 text-3xl font-bold bg-gray-700 text-white flex gap-20 items-center rounded-3xl'>
                <img src={data.avatar_url} alt="Github Profile Picture" className='w-[300px] h-[300px] m-5 rounded-2xl' />
                <p>Followers: <span className="text-4xl font-extrabold">{data.followers}</span></p>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}