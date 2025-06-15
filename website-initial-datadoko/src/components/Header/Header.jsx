import React from "react"
import Logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import {useState} from 'react'

function Header(){
    const [isOpen, setIsOpen] = useState(true)
    function toggleMenu(){
        setIsOpen(!isOpen)
    }
    return(
        <div className="w-full flex justify-center items-center">
            <div className='lg:w-4/6 lg:h-28 w-full h-32 flex justify-between items-center lg:mt-10 border-b-2'>
                <Link to='/' className='lg:block w-4/12 lg:w-2/12 lg:h-full h-4/5 flex justify-center items-center p-2 order-2 lg:order-1'>
                    <img src={Logo} alt="Logo Image" className='lg:w-2/3 lg:h-full w-full h-4/5 lg:p-1 p-1 ml-8 lg:ml-0'/>
                </Link>
                <div className='h-4/5 lg:w-3/12 w-8/12 flex items-center justify-center gap-2 lg:gap-8 lg:order-3 order-3 p-1'>
                    <Link to='#' className='text-white w-fit text-center h-1/2 bg-orange-700 lg:p-5 p-4 text-lg font-bold mt-2 rounded-2xl flex items-center'>
                        Login
                    </Link>
                    <Link to='#' className='text-white w-fit text-center h-1/2 bg-orange-700 lg:p-5 p-4 text-lg font-bold mt-2 rounded-2xl flex items-center'>
                        Get Started
                    </Link>
                </div>
                <div className='lg:w-6/12 h-4/5 w-2/12 lg:order-2'>
                    <button onClick={toggleMenu} className="h-full w-full flex justify-center items-center mt-1 ml-4 lg:ml-0 lg:hidden">
                        {isOpen ? <FaBars className='h-2/3 w-3/5' /> : <FaTimes className='h-2/3 w-3/5' />}
                    </button>
                    <ul className={`${isOpen ? "hidden" : "block"} h-52 mt-10 lg:mt-0 lg:h-full text-lg w-24 lg:w-full flex flex-col justify-start gap-5 text-center text-xl  lg:pt-2 font-bold lg:block lg:flex lg:flex-row lg:justify-center lg:gap-20 lg:items-center`}>
                        <li>
                            <NavLink to='/' className={({ isActive }) => `lg:text-2xl ${isActive? 'text-orange-500' : 'text-black'}`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about' className={({ isActive }) => `lg:text-2xl ${isActive? 'text-orange-500' : 'text-black'}`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={({ isActive }) => `lg:text-2xl ${isActive? 'text-orange-500' : 'text-black'}`}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/github' className={({ isActive }) => `lg:text-2xl ${isActive? 'text-orange-500' : 'text-black'}`}>
                                Github
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/user/Anish' className={({ isActive }) => `lg:text-2xl ${isActive? 'text-orange-500' : 'text-black'}`}>
                                User
                            </NavLink>
                        </li>
                    </ul>
                </div>
                
                
            </div>
        </div>
    )
}

export default Header