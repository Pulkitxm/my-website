import logo from '../assets/wizardLogo.svg';
import resume from "../assets/SiddhantShah.pdf"
import React from 'react';
export default function Navbar() {
    const [darkToggle, setDarkToggle] = React.useState(false);

    return (
    <div className='fixed z-50 bg-dark-500 w-full top-0 left-0 px-8 py-2 lg:px-20 xl:px-36 border-b-2 border-zinc-300 dark:border-b-2 dark:border-teal-200'>
        <div className="flex justify-between items-center text-white">
            <img src={logo} className=" w-10 rounded-full" alt="logo by tirch studio" />
            <a href="#home" className='text-2xl'>Siddhant Shah</a>  
            <ul className="hidden md:flex">
            <li className="p-2 md:text-xl"><a href="#about" className="hover:underline">About</a></li>
            <li className="p-2 md:text-xl"><a href="#skills" className="hover:underline">Skills</a></li>
            <li className="p-2 md:text-xl"><a href="#blogs" className="hover:underline">Blogs</a></li>
            </ul>
            <a href={resume} rel="noreferrer" target="_blank" className=" bg-teal-500 rounded-full px-4 py-1 border border-teal-800 border-4">Resume</a>
        </div>
        
    </div>
    )
}