import React from 'react'
import pex1 from '../../assets/pex1.jpg'
import pex4 from '../../assets/pex4.jpg'
import pex10 from '../../assets/pex10.png'
import pex12 from '../../assets/pex12.png'
import pex15 from '../../assets/pex15.jpg'
import pex16 from '../../assets/pex16.png'

function Home(){
    return(
        <div className='w-full lg:flex lg:justify-center'>
            <div className='lg:w-4/6 lg:flex lg:flex-col'>
                <div className='lg:w-full lg:min-h-[700px] lg:flex mb-10 lg:mt-20'>
                    <img src={pex1} alt="" className='lg:w-[500px] lg:h-[290px] lg:relative lg:left-[50px] lg:top-[30px] rounded-xl'/>
                    <p className=' lg:min-w-[400px] lg:h-[120px] font-semibold lg:relative lg:left-[200px] mt-20 text-center leading-3  rounded-xl'>
                        <span className='text-4xl'>Welcome to</span><span className='text-5xl text-red-700 italic font-extrabold'> Data Doko</span>, <br /><br />
                         <span className='italic'></span> <span className='text-3xl text-gray-500 font-semibold p-1 rounded-xl'>The complete Tech Solutions</span>
                    </p>
                    <img src={pex4} alt="" className='rounded-xl lg:w-[500px] lg:h-[290px] lg:absolute lg:top-[630px] lg:left-[1000px]'/>
                    <p className='lg:absolute lg:top-[750px] font-bold lg:left-[400px] lg:text-2xl italic'>
                        ❝In Every Byte, We Build Trust and Precision,<br />
                        Turning Challenges into Seamless Solutions.<br />
                        With Reliable Tech, We Ensure Your Success,<br />
                        Byte by Byte, Our Excellence Impresses.❞
                    </p>
                </div>
                <div className='lg:w-full lg:min-h-[1400px] lg:flex mb-10 mt-10 overflow-hidden'>
                    <img src={pex10} alt="" className='lg:w-[500px] lg:h-[290px] lg:relative lg:left-[50px] lg:top-[30px] rounded-xl animate-moveImage'/>
                    <img src={pex12} alt="" className='rounded-xl lg:w-[500px] lg:h-[290px] lg:absolute lg:top-[1350px] lg:left-[1000px] animate-moveImage1'/>
                    <img src={pex15} alt="" className='lg:w-[500px] lg:h-[290px] lg:absolute lg:left-[350px] lg:top-[1650px] rounded-xl animate-moveImage2'/>
                    <img src={pex16} alt="" className='rounded-xl lg:w-[500px] lg:h-[290px] lg:absolute lg:top-[1990px] lg:left-[1000px] animate-moveImage3'/>
                    <img src="" alt="" />
                </div>
            </div> 
        </div>
    )
}
export default Home