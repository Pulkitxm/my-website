import logo from '../assets/n.jpg';
import resume from "../assets/SiddhantShah.pdf"
import React from 'react';
export default function Navbar() {
    const [darkToggle, setDarkToggle] = React.useState(false);

    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-2 lg:px-20 xl:px-36 border-b border-zinc-300 dark:border-b dark:border-teal-800'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className=" w-10 rounded-full" alt="logo by tirch studio" />
            <a href="#home" className='text-2xl'>Siddhant Shah</a>  
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
        </div>
        
    </div>
    )
}