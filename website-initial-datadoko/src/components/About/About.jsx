import React from "react";
import { useState, useEffect } from 'react'
import a1 from '../../assets/about1.jpg'
import a2 from '../../assets/about2.jpg'
import a3 from '../../assets/about3.jpg'
import a4 from '../../assets/about4.jpg'

function About(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const content = [
        {
            id:1,
            style: 'text-black',
            content: (
                <>
                <div className='lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center '>
                    <h1 className='text-center text-4xl m-4 mt-10 font-extrabold text-red-900 animate-fadeUp'>About Us</h1>
                    <p className='w-4/6 m-5 text-2xl font-bold text-gray-600 '>
                        <p className={`${currentIndex===0 ? 'animate-fadeUp2': ''}`}>Welcome to <span className='text-orange-500 italic m-1 text-3xl font-extrabold'>Data Doko</span>, where <span className='text-black'>Technology</span> meets <span className='text-black'>Innovation</span> to drive <span className='text-black'>Success</span>. <br /><br /></p>
                        <p className='animate-fadeUp3'>At <span className='text-black'>Data Doko</span>, we specialize in providing <span className='text-black'>cutting-edge solutions</span> tailored to meet the unique needs of  <span className='text-black'>Businesses</span> and  <span className='text-black'>Individuals</span>. From <span className='text-black'>Software development</span> and <span className='text-black'>IT consulting</span> to <span className='text-black'>Cloud computing</span> and <span className='text-black'>Cybersecurity</span>, our expertise spans across multiple tech domains, empowering our clients to thrive in the <span className='text-black'>Digital age</span>.</p>
                    </p>
                </div>
                </>),
        },
        {
            id:2,
            style: '',
            content: (
                <>
                <div className='lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center '>
                    <h1 className='text-center text-4xl m-4 mt-10 font-extrabold text-red-900 animate-fadeUp01'>What We Do</h1>
                    <p className='w-4/6 m-5 text-2xl font-bold text-gray-600 '>
                        <p className={`${currentIndex===1 ? 'animate-fadeUp21': ''} m-3`}><span className="text-blue-600 italic">Software Development:</span> Crafting custom software solutions for businesses of all sizes. <br /></p>
                        <p className={`${currentIndex===1 ? 'animate-fadeUp31': ''} m-3`}><span className="text-blue-600 italic">Web & Mobile Apps:</span> Designing user-friendly and robust applications for web and mobile platforms.<br /></p>
                        <p className={`${currentIndex===1 ? 'animate-fadeUp4': ''} m-3`}><span className="text-blue-600 italic">Cloud Services:</span> Helping businesses transition to the cloud with seamless integration and support.<br /></p>
                        <p className={`${currentIndex===1 ? 'animate-fadeUp5': ''} m-3`}><span className="text-blue-600 italic">Cybersecurity:</span> Ensuring the safety and security of digital assets with top-notch cybersecurity measures.<br /></p>
                        <p className={`${currentIndex===1 ? 'animate-fadeUp6': ''} m-3`}><span className="text-blue-600 italic">AI & Automation:</span> Transforming operations with AI-driven tools and automated workflows.<br /></p>
                    </p>
                </div>
                </>),
            
            
        },
        {
            id:3,
            style: '',
            content: (
                <>
                <div className='lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center '>
                    <h1 className='text-center text-4xl m-4 mt-10 font-extrabold text-red-900 animate-fadeUp'>Our Mission</h1>
                    <p className='w-4/6 m-5 text-2xl font-bold text-gray-600 italic'>
                        <p className='animate-fadeUp2'>Our <span className='text-black'>Mission</span> is to deliver <span className='text-black'></span>innovative, <span className='text-black'></span>reliable, and <span className='text-black'></span>scalable technology solutions that enable our clients to achieve their goals efficiently. <br /><br /></p>
                        <p className='animate-fadeUp3'>We are dedicated to making technology <span className='text-black'>accessible</span>,<span className='text-black'> intuitive</span>, and <span className='text-black'>transformative</span> for everyone.</p>
                    </p>
                </div>
                </>),
        },
        {
            id:4,
            style: '',
            content: (
                <>
                <div className='lg:w-full lg:flex lg:flex-col lg:items-center lg:justify-center '>
                    <h1 className='text-center text-4xl m-4 mt-10 font-extrabold text-red-900 animate-fadeUp01'>Why Choose Us?</h1>
                    <p className='w-4/6 m-5 text-2xl font-bold text-gray-600 '>
                    <p className='animate-fadeUp21 m-3'><span className="text-green-700 italic font-bold">Client-Centric Approach:</span> Your goals are our priority, and we tailor solutions to fit your needs. <br /></p>
                    <p className='animate-fadeUp31 m-3'><span className="text-green-700 italic font-bold">Continuous Innovation:</span> We stay ahead of the curve by adopting and implementing the latest technologies.<br /></p>
                    </p>
                </div>
                </>),
        },
        
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollDirections = event.deltaY > 0 ? "down" : "up";

            setCurrentIndex((prev) => {
                if(scrollDirections === "down" && prev < content.length-1){
                    return prev+1;
                }else if(scrollDirections === "up" && prev > 0){
                    return prev-1;
                }
                return prev
            })

        }

        window.addEventListener('wheel', handleScroll);

        return() => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [content.length])
    return(
        <div className='w-full lg:flex lg:justify-center'>
            <div className={`w-4/6 h-[600px] ${content[currentIndex].style} lg:flex lg:flex-col lg:items-center`}>
                {content[currentIndex].content}
                <div className="flex justify-center mt-10">
                    <span className={`${currentIndex===3 ? 'hidden': ''} m-3text-gray-500 text-lg font-medium animate-bounce`}>Scroll down for more <span className="font-black text-black text-2xl animate-fadeUp3">↓</span></span>
                </div>

            </div>
        </div>
    )
}

export default About