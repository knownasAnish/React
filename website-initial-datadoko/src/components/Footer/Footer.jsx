import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer(){
    return(
        <div className='w-full my-10 flex justify-center'>
            <div className='lg:w-4/6 h-full lg:flex lg:flex-col lg:justify-between'>
                <div className='lg:h-4/6 lg:flex lg:justify-between lg:gap-20 lg:w-full lg:p-2 border-b-2'>
                    <Link to='/' className='lg:h-full lg:w-3/12 lg:p-2 lg:flex lg:items-center'>
                        <img className='lg:w-5/6 lg:h-5/6' src={Logo} alt="" />
                    </Link>
                    <div className='lg:w-6/12 lg:h-full lg:flex lg:justify-center lg:gap-20 lg:w-6/12 '>
                        <div className='lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:text-center'>
                            <h2 className='text-lg font-bold mb-3'>RESOURCES</h2>
                            <Link to='' className='text-md font-medium'>Home</Link>
                            <Link to='/about' className='text-md font-medium'>About</Link>
                        </div>
                        <div className='lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:text-center'>
                            <h2 className='text-lg font-bold mb-3'>FOLLOW US</h2>
                            <Link className='text-md font-medium'>Github</Link>
                            <Link className='text-md font-medium'>Discord</Link>
                        </div>
                        <div className='lg:flex lg:flex-col lg:justify-center lg:gap-3 lg:text-center'>
                            <h2 className='text-lg font-bold mb-3'>LEGAL</h2>
                            <Link className='text-md font-medium'>Privacy Policy</Link>
                            <Link className='text-md font-medium'>Terms & Conditions</Link>
                        </div>
                    </div>

                </div>
                <div className='lg:h-2/6 lg:w-full lg:flex lg:justify-between lg:items-center lg:p-3 lg:border-b-2'>
                    <div className='lg:w-4/12 text-lg font-medium'>
                        @2024AnishKumarDas. All Rights Reserved.
                    </div>
                    <div className='lg:w-3/12 lg:flex lg:justify-center lg:gap-8'>
                        <FaFacebook className='lg:h-6 lg:w-6'/>
                        <FaGithub className='lg:h-6 lg:w-6'/>
                        <FaInstagram className='lg:h-6 lg:w-6'/>
                        <FaTwitter className='lg:h-6 lg:w-6'/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer